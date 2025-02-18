<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if (!isset($_GET['id'])) {
    header("Location: contact_list.php");
    exit();
}

$contact_id = $_GET['id'];
$stmt = $db->prepare("SELECT * FROM contacts WHERE id = ?");
$stmt->execute([$contact_id]);
$contact = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$contact) {
    header("Location: contact_list.php");
    exit();
}

$iconTypes = [
    'phone' => 'Telefon',
    'email' => 'E-posta',
    'address' => 'Adres',
    'whatsapp' => 'WhatsApp',
    'working_hours' => 'Çalışma Saatleri'
];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $type = $_POST['type'];
    $value = $_POST['value'];
    $icon = $_POST['icon'];
    $is_active = isset($_POST['is_active']) ? 1 : 0;

    $stmt = $db->prepare("UPDATE contacts SET type = ?, value = ?, icon = ?, is_active = ? WHERE id = ?");
    if ($stmt->execute([$type, $value, $icon, $is_active, $contact_id])) {
        header("Location: contact_list.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>İletişim Bilgisi Düzenle</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="admin_panel.php">Admin Panel</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="logout.php">Çıkış Yap</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>İletişim Bilgisi Düzenle</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="mb-3">
                                <label for="type" class="form-label">Tip</label>
                                <select class="form-select" id="type" name="type" required>
                                    <option value="">Seçiniz</option>
                                    <?php foreach ($iconTypes as $key => $value): ?>
                                        <option value="<?php echo $key; ?>" <?php echo $contact['type'] === $key ? 'selected' : ''; ?>>
                                            <?php echo $value; ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="value" class="form-label">Değer</label>
                                <input type="text" class="form-control" id="value" name="value" value="<?php echo htmlspecialchars($contact['value']); ?>" required>
                            </div>
                            <div class="mb-3">
                                <label for="icon" class="form-label">İkon</label>
                                <select class="form-select" id="icon" name="icon" required>
                                    <option value="faPhone" <?php echo $contact['icon'] === 'faPhone' ? 'selected' : ''; ?>>Telefon</option>
                                    <option value="faEnvelope" <?php echo $contact['icon'] === 'faEnvelope' ? 'selected' : ''; ?>>E-posta</option>
                                    <option value="faMapMarkerAlt" <?php echo $contact['icon'] === 'faMapMarkerAlt' ? 'selected' : ''; ?>>Konum</option>
                                    <option value="faWhatsapp" <?php echo $contact['icon'] === 'faWhatsapp' ? 'selected' : ''; ?>>WhatsApp</option>
                                    <option value="faClock" <?php echo $contact['icon'] === 'faClock' ? 'selected' : ''; ?>>Saat</option>
                                </select>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="is_active" name="is_active" <?php echo $contact['is_active'] ? 'checked' : ''; ?>>
                                <label class="form-check-label" for="is_active">Aktif</label>
                            </div>
                            <div class="d-flex justify-content-between">
                                <a href="contact_list.php" class="btn btn-secondary">İptal</a>
                                <button type="submit" class="btn btn-primary">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Tip seçildiğinde otomatik ikon seçme
        document.getElementById('type').addEventListener('change', function() {
            const iconSelect = document.getElementById('icon');
            switch(this.value) {
                case 'phone':
                    iconSelect.value = 'faPhone';
                    break;
                case 'email':
                    iconSelect.value = 'faEnvelope';
                    break;
                case 'address':
                    iconSelect.value = 'faMapMarkerAlt';
                    break;
                case 'whatsapp':
                    iconSelect.value = 'faWhatsapp';
                    break;
                case 'working_hours':
                    iconSelect.value = 'faClock';
                    break;
            }
        });
    </script>
</body>
</html> 