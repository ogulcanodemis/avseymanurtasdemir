<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Admin Panel</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="logout.php">Çıkış Yap</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <h2>Hoş geldiniz, <?php echo $_SESSION['username']; ?>!</h2>
                <div class="mt-4">
                    <div class="list-group">
                        <a href="blog_list.php" class="list-group-item list-group-item-action">
                            <i class="fas fa-blog me-2"></i> Blog Yazıları
                        </a>
                        <a href="contact_list.php" class="list-group-item list-group-item-action">
                            <i class="fas fa-address-book me-2"></i> İletişim Bilgileri
                        </a>
                        <a href="practice_areas_list.php" class="list-group-item list-group-item-action">
                            <i class="fas fa-briefcase me-2"></i> Çalışma Alanları
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <i class="fas fa-envelope me-2"></i> Mesajlar
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <i class="fas fa-cog me-2"></i> Ayarlar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html> 