<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

require_once '../config/db_connection.php';

$contact_id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

if ($contact_id === 0) {
    header("Location: list_contacts.php");
    exit();
}

// Fetch contact information
$query = "SELECT * FROM contacts WHERE id = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, "i", $contact_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$contact = mysqli_fetch_assoc($result);

if (!$contact) {
    header("Location: list_contacts.php");
    exit();
}

$contact_types = [
    'phone' => ['name' => 'Telefon', 'icons' => ['fas fa-phone', 'fas fa-mobile-alt']],
    'email' => ['name' => 'E-posta', 'icons' => ['fas fa-envelope', 'far fa-envelope']],
    'address' => ['name' => 'Adres', 'icons' => ['fas fa-map-marker-alt', 'fas fa-location-dot']],
    'whatsapp' => ['name' => 'WhatsApp', 'icons' => ['fab fa-whatsapp']],
    'working_hours' => ['name' => 'Çalışma Saatleri', 'icons' => ['fas fa-clock', 'far fa-clock']]
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $type = mysqli_real_escape_string($conn, $_POST['type']);
    $value = mysqli_real_escape_string($conn, $_POST['value']);
    $icon = mysqli_real_escape_string($conn, $_POST['icon']);
    $is_active = isset($_POST['is_active']) ? 1 : 0;

    $update_query = "UPDATE contacts SET type = ?, value = ?, icon = ?, is_active = ? WHERE id = ?";
    $stmt = mysqli_prepare($conn, $update_query);
    mysqli_stmt_bind_param($stmt, "sssii", $type, $value, $icon, $is_active, $contact_id);

    if (mysqli_stmt_execute($stmt)) {
        header("Location: list_contacts.php");
        exit();
    }
}

include 'header.php';
?>

<div class="container-fluid">
    <div class="row">
        <?php include 'sidebar.php'; ?>
        
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">İletişim Bilgisi Düzenle</h1>
                <a href="list_contacts.php" class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> Geri Dön
                </a>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <form method="POST">
                                <div class="mb-3">
                                    <label for="type" class="form-label">İletişim Türü</label>
                                    <select name="type" id="type" class="form-select" required>
                                        <option value="">Seçiniz</option>
                                        <?php foreach ($contact_types as $type => $info): ?>
                                            <option value="<?php echo $type; ?>" <?php echo $contact['type'] === $type ? 'selected' : ''; ?>>
                                                <?php echo $info['name']; ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label for="value" class="form-label">Değer</label>
                                    <input type="text" name="value" id="value" class="form-control" value="<?php echo htmlspecialchars($contact['value']); ?>" required>
                                </div>

                                <div class="mb-3">
                                    <label for="icon" class="form-label">İkon</label>
                                    <select name="icon" id="icon" class="form-select" required>
                                        <option value="">Seçiniz</option>
                                        <?php foreach ($contact_types as $type => $info): ?>
                                            <?php foreach ($info['icons'] as $icon): ?>
                                                <option value="<?php echo $icon; ?>" <?php echo $contact['icon'] === $icon ? 'selected' : ''; ?>>
                                                    <?php echo $icon; ?> <i class="<?php echo $icon; ?>"></i>
                                                </option>
                                            <?php endforeach; ?>
                                        <?php endforeach; ?>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" name="is_active" id="is_active" class="form-check-input" <?php echo $contact['is_active'] ? 'checked' : ''; ?>>
                                        <label for="is_active" class="form-check-label">Aktif</label>
                                    </div>
                                </div>

                                <div class="text-end">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fas fa-save"></i> Kaydet
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<script>
document.getElementById('type').addEventListener('change', function() {
    const type = this.value;
    const iconSelect = document.getElementById('icon');
    const icons = <?php echo json_encode($contact_types); ?>[type]?.icons || [];
    
    // Clear current options
    iconSelect.innerHTML = '<option value="">Seçiniz</option>';
    
    // Add new options
    icons.forEach(icon => {
        const option = document.createElement('option');
        option.value = icon;
        option.innerHTML = `${icon} <i class="${icon}"></i>`;
        iconSelect.appendChild(option);
    });
});
</script>

<?php include 'footer.php'; ?> 