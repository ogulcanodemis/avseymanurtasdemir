<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $icon = $_POST['icon'];
    $is_active = isset($_POST['is_active']) ? 1 : 0;

    $stmt = $db->prepare("INSERT INTO practice_areas (title, description, icon, is_active) VALUES (?, ?, ?, ?)");
    
    if ($stmt->execute([$title, $description, $icon, $is_active])) {
        $_SESSION['message'] = "Çalışma alanı başarıyla eklendi.";
        header("Location: practice_areas_list.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Yeni Çalışma Alanı Ekle</title>
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
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Yeni Çalışma Alanı Ekle</h5>
                        <a href="practice_areas_list.php" class="btn btn-secondary">
                            <i class="fas fa-arrow-left me-2"></i>Geri Dön
                        </a>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="mb-3">
                                <label for="title" class="form-label">Başlık</label>
                                <input type="text" class="form-control" id="title" name="title" required>
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label">Açıklama</label>
                                <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="icon" class="form-label">İkon</label>
                                <select class="form-select" id="icon" name="icon" required>
                                    <option value="fas fa-users">Kullanıcılar (fas fa-users)</option>
                                    <option value="fas fa-gavel">Çekiç (fas fa-gavel)</option>
                                    <option value="fas fa-briefcase">Evrak Çantası (fas fa-briefcase)</option>
                                    <option value="fas fa-shopping-cart">Alışveriş (fas fa-shopping-cart)</option>
                                    <option value="fas fa-home">Ev (fas fa-home)</option>
                                    <option value="fas fa-balance-scale">Terazi (fas fa-balance-scale)</option>
                                    <option value="fas fa-scroll">Tomar (fas fa-scroll)</option>
                                    <option value="fas fa-file-contract">Sözleşme (fas fa-file-contract)</option>
                                    <option value="fas fa-shield-alt">Kalkan (fas fa-shield-alt)</option>
                                    <option value="fas fa-lightbulb">Ampul (fas fa-lightbulb)</option>
                                    <option value="fas fa-landmark">Bina (fas fa-landmark)</option>
                                    <option value="fas fa-handshake">El Sıkışma (fas fa-handshake)</option>
                                </select>
                                <div class="mt-2">
                                    Seçilen ikon: <i id="selectedIcon" class="fas fa-users fa-2x ms-2"></i>
                                </div>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="is_active" name="is_active" checked>
                                <label class="form-check-label" for="is_active">Aktif</label>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-save me-2"></i>Kaydet
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // İkon seçildiğinde önizleme göster
        document.getElementById('icon').addEventListener('change', function() {
            const selectedIcon = document.getElementById('selectedIcon');
            selectedIcon.className = this.value + ' fa-2x ms-2';
        });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 