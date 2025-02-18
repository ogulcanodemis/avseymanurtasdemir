<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if (!isset($_GET['id'])) {
    header("Location: practice_areas_list.php");
    exit();
}

$area_id = $_GET['id'];
$stmt = $db->prepare("SELECT * FROM practice_areas WHERE id = ?");
$stmt->execute([$area_id]);
$area = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$area) {
    header("Location: practice_areas_list.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $icon = $_POST['icon'];
    $is_active = isset($_POST['is_active']) ? 1 : 0;

    $stmt = $db->prepare("UPDATE practice_areas SET title = ?, description = ?, icon = ?, is_active = ? WHERE id = ?");
    
    if ($stmt->execute([$title, $description, $icon, $is_active, $area_id])) {
        $_SESSION['message'] = "Çalışma alanı başarıyla güncellendi.";
        header("Location: practice_areas_list.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Çalışma Alanı Düzenle</title>
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
                        <h5 class="mb-0">Çalışma Alanı Düzenle</h5>
                        <a href="practice_areas_list.php" class="btn btn-secondary">
                            <i class="fas fa-arrow-left me-2"></i>Geri Dön
                        </a>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="mb-3">
                                <label for="title" class="form-label">Başlık</label>
                                <input type="text" class="form-control" id="title" name="title" value="<?php echo htmlspecialchars($area['title']); ?>" required>
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label">Açıklama</label>
                                <textarea class="form-control" id="description" name="description" rows="4" required><?php echo htmlspecialchars($area['description']); ?></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="icon" class="form-label">İkon</label>
                                <select class="form-select" id="icon" name="icon" required>
                                    <option value="fas fa-users" <?php echo $area['icon'] == 'fas fa-users' ? 'selected' : ''; ?>>Kullanıcılar (fas fa-users)</option>
                                    <option value="fas fa-gavel" <?php echo $area['icon'] == 'fas fa-gavel' ? 'selected' : ''; ?>>Çekiç (fas fa-gavel)</option>
                                    <option value="fas fa-briefcase" <?php echo $area['icon'] == 'fas fa-briefcase' ? 'selected' : ''; ?>>Evrak Çantası (fas fa-briefcase)</option>
                                    <option value="fas fa-shopping-cart" <?php echo $area['icon'] == 'fas fa-shopping-cart' ? 'selected' : ''; ?>>Alışveriş (fas fa-shopping-cart)</option>
                                    <option value="fas fa-home" <?php echo $area['icon'] == 'fas fa-home' ? 'selected' : ''; ?>>Ev (fas fa-home)</option>
                                    <option value="fas fa-balance-scale" <?php echo $area['icon'] == 'fas fa-balance-scale' ? 'selected' : ''; ?>>Terazi (fas fa-balance-scale)</option>
                                    <option value="fas fa-scroll" <?php echo $area['icon'] == 'fas fa-scroll' ? 'selected' : ''; ?>>Tomar (fas fa-scroll)</option>
                                    <option value="fas fa-file-contract" <?php echo $area['icon'] == 'fas fa-file-contract' ? 'selected' : ''; ?>>Sözleşme (fas fa-file-contract)</option>
                                    <option value="fas fa-shield-alt" <?php echo $area['icon'] == 'fas fa-shield-alt' ? 'selected' : ''; ?>>Kalkan (fas fa-shield-alt)</option>
                                    <option value="fas fa-lightbulb" <?php echo $area['icon'] == 'fas fa-lightbulb' ? 'selected' : ''; ?>>Ampul (fas fa-lightbulb)</option>
                                    <option value="fas fa-landmark" <?php echo $area['icon'] == 'fas fa-landmark' ? 'selected' : ''; ?>>Bina (fas fa-landmark)</option>
                                    <option value="fas fa-handshake" <?php echo $area['icon'] == 'fas fa-handshake' ? 'selected' : ''; ?>>El Sıkışma (fas fa-handshake)</option>
                                </select>
                                <div class="mt-2">
                                    Seçilen ikon: <i id="selectedIcon" class="<?php echo $area['icon']; ?> fa-2x ms-2"></i>
                                </div>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="is_active" name="is_active" <?php echo $area['is_active'] ? 'checked' : ''; ?>>
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