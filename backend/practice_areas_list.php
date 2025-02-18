<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Silme işlemi
if (isset($_POST['delete_area'])) {
    $area_id = $_POST['area_id'];
    $stmt = $db->prepare("DELETE FROM practice_areas WHERE id = ?");
    $stmt->execute([$area_id]);
    header("Location: practice_areas_list.php");
    exit();
}

// Aktiflik durumu değiştirme
if (isset($_POST['toggle_status'])) {
    $area_id = $_POST['area_id'];
    $stmt = $db->prepare("UPDATE practice_areas SET is_active = NOT is_active WHERE id = ?");
    $stmt->execute([$area_id]);
    header("Location: practice_areas_list.php");
    exit();
}

// Çalışma alanlarını listele
$stmt = $db->query("SELECT * FROM practice_areas ORDER BY id ASC");
$areas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Çalışma Alanları Yönetimi</title>
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
            <h2>Çalışma Alanları</h2>
            <a href="practice_area_add.php" class="btn btn-primary">
                <i class="fas fa-plus me-2"></i>Yeni Alan Ekle
            </a>
        </div>

        <?php if (isset($_SESSION['message'])): ?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <?php 
                echo $_SESSION['message'];
                unset($_SESSION['message']);
                ?>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php endif; ?>

        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Başlık</th>
                        <th>Açıklama</th>
                        <th>İkon</th>
                        <th>Durum</th>
                        <th>Son Güncelleme</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($areas as $area): ?>
                    <tr>
                        <td><?php echo $area['id']; ?></td>
                        <td><?php echo $area['title']; ?></td>
                        <td><?php echo substr($area['description'], 0, 100) . '...'; ?></td>
                        <td><i class="<?php echo $area['icon']; ?> fa-lg"></i></td>
                        <td>
                            <form method="POST" class="d-inline">
                                <input type="hidden" name="area_id" value="<?php echo $area['id']; ?>">
                                <button type="submit" name="toggle_status" class="btn btn-sm <?php echo $area['is_active'] ? 'btn-success' : 'btn-secondary'; ?>">
                                    <?php echo $area['is_active'] ? 'Aktif' : 'Pasif'; ?>
                                </button>
                            </form>
                        </td>
                        <td><?php echo date('d.m.Y H:i', strtotime($area['updated_at'])); ?></td>
                        <td>
                            <a href="practice_area_edit.php?id=<?php echo $area['id']; ?>" class="btn btn-sm btn-warning me-2">
                                <i class="fas fa-edit"></i> Düzenle
                            </a>
                            <form method="POST" class="d-inline" onsubmit="return confirm('Bu çalışma alanını silmek istediğinizden emin misiniz?');">
                                <input type="hidden" name="area_id" value="<?php echo $area['id']; ?>">
                                <button type="submit" name="delete_area" class="btn btn-sm btn-danger">
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 