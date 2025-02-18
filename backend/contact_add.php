<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
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

    $stmt = $db->prepare("INSERT INTO contacts (type, value, icon, is_active) VALUES (?, ?, ?, ?)");
    if ($stmt->execute([$type, $value, $icon, $is_active])) {
        header("Location: contact_list.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Yeni İletişim Bilgisi Ekle</title>
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
                        <h3>Yeni İletişim Bilgisi Ekle</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="mb-3">
                                <label for="type" class="form-label">Tip</label>
                                <select class="form-select" id="type" name="type" required>
                                    <option value="">Seçiniz</option>
                                    <?php foreach ($iconTypes as $key => $value): ?>
                                        <option value="<?php echo $key; ?>"><?php echo $value; ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="value" class="form-label">Değer</label>
                                <input type="text" class="form-control" id="value" name="value" required>
                            </div>
                            <div class="mb-3">
                                <label for="icon" class="form-label">İkon</label>
                                <select class="form-select" id="icon" name="icon" required>
                                    <option value="faPhone">Telefon</option>
                                    <option value="faEnvelope">E-posta</option>
                                    <option value="faMapMarkerAlt">Konum</option>
                                    <option value="faWhatsapp">WhatsApp</option>
                                    <option value="faClock">Saat</option>
                                </select>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="is_active" name="is_active" checked>
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