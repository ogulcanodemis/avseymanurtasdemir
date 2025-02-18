<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// İletişim bilgisi silme işlemi
if (isset($_POST['delete_contact'])) {
    $contact_id = $_POST['contact_id'];
    $stmt = $db->prepare("DELETE FROM contacts WHERE id = ?");
    $stmt->execute([$contact_id]);
}

// Aktiflik durumu değiştirme
if (isset($_POST['toggle_status'])) {
    $contact_id = $_POST['contact_id'];
    $stmt = $db->prepare("UPDATE contacts SET is_active = NOT is_active WHERE id = ?");
    $stmt->execute([$contact_id]);
}

// İletişim bilgilerini listele
$stmt = $db->query("SELECT * FROM contacts ORDER BY type ASC");
$contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// İkon tiplerini tanımla
$iconTypes = [
    'phone' => 'Telefon',
    'email' => 'E-posta',
    'address' => 'Adres',
    'whatsapp' => 'WhatsApp',
    'working_hours' => 'Çalışma Saatleri'
];
?>

<!DOCTYPE html>
<html>
<head>
    <title>İletişim Bilgileri Yönetimi</title>
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
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>İletişim Bilgileri</h2>
            <a href="contact_add.php" class="btn btn-primary">
                <i class="fas fa-plus me-2"></i>Yeni İletişim Bilgisi Ekle
            </a>
        </div>

        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Tip</th>
                        <th>Değer</th>
                        <th>Durum</th>
                        <th>Son Güncelleme</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($contacts as $contact): ?>
                    <tr>
                        <td><?php echo $iconTypes[$contact['type']] ?? $contact['type']; ?></td>
                        <td><?php echo $contact['value']; ?></td>
                        <td>
                            <form method="POST" class="d-inline">
                                <input type="hidden" name="contact_id" value="<?php echo $contact['id']; ?>">
                                <button type="submit" name="toggle_status" class="btn btn-sm <?php echo $contact['is_active'] ? 'btn-success' : 'btn-secondary'; ?>">
                                    <?php echo $contact['is_active'] ? 'Aktif' : 'Pasif'; ?>
                                </button>
                            </form>
                        </td>
                        <td><?php echo date('d.m.Y H:i', strtotime($contact['updated_at'])); ?></td>
                        <td>
                            <a href="contact_edit.php?id=<?php echo $contact['id']; ?>" class="btn btn-sm btn-warning me-2">
                                <i class="fas fa-edit"></i> Düzenle
                            </a>
                            <form method="POST" class="d-inline" onsubmit="return confirm('Bu iletişim bilgisini silmek istediğinizden emin misiniz?');">
                                <input type="hidden" name="contact_id" value="<?php echo $contact['id']; ?>">
                                <button type="submit" name="delete_contact" class="btn btn-sm btn-danger">
                                    <i class="fas fa-trash"></i> Sil
                                </button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html> 