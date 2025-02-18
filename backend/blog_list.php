<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Blog silme işlemi
if (isset($_POST['delete_blog'])) {
    $blog_id = $_POST['blog_id'];
    $stmt = $db->prepare("DELETE FROM blogs WHERE id = ?");
    $stmt->execute([$blog_id]);
}

// Blogları listele
$stmt = $db->query("SELECT * FROM blogs ORDER BY created_at DESC");
$blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Blog Yönetimi</title>
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
            <h2>Blog Yazıları</h2>
            <a href="blog_add.php" class="btn btn-primary">Yeni Blog Ekle</a>
        </div>

        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Başlık</th>
                        <th>Görsel</th>
                        <th>Oluşturulma Tarihi</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($blogs as $blog): ?>
                    <tr>
                        <td><?php echo $blog['id']; ?></td>
                        <td><?php echo $blog['title']; ?></td>
                        <td>
                            <?php if ($blog['image_url']): ?>
                                <img src="<?php echo $blog['image_url']; ?>" alt="Blog görsel" style="height: 50px;">
                            <?php endif; ?>
                        </td>
                        <td><?php echo date('d.m.Y H:i', strtotime($blog['created_at'])); ?></td>
                        <td>
                            <a href="blog_edit.php?id=<?php echo $blog['id']; ?>" class="btn btn-sm btn-warning me-2">
                                <i class="fas fa-edit"></i> Düzenle
                            </a>
                            <form method="POST" class="d-inline" onsubmit="return confirm('Bu blog yazısını silmek istediğinizden emin misiniz?');">
                                <input type="hidden" name="blog_id" value="<?php echo $blog['id']; ?>">
                                <button type="submit" name="delete_blog" class="btn btn-sm btn-danger">
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