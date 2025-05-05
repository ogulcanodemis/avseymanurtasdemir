<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if (!isset($_GET['id'])) {
    header("Location: blog_list.php");
    exit();
}

$blog_id = $_GET['id'];
$stmt = $db->prepare("SELECT * FROM blogs WHERE id = ?");
$stmt->execute([$blog_id]);
$blog = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$blog) {
    header("Location: blog_list.php");
    exit();
}

$error_message = '';
$success_message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = trim($_POST['title']);
    $content = trim($_POST['content']);
    $image_url = trim($_POST['image_url']);

    // Gerekli alanların kontrolü
    if (empty($title) || empty($content)) {
        $error_message = "Başlık ve içerik alanları boş bırakılamaz!";
    } else {
        try {
            // updated_at alanını da güncelliyoruz
            $stmt = $db->prepare("UPDATE blogs SET title = ?, content = ?, image_url = ?, updated_at = NOW() WHERE id = ?");
            $result = $stmt->execute([$title, $content, $image_url, $blog_id]);
            
            if ($result) {
                // Başarılı güncelleme sonrası blog listesine yönlendir
                header("Location: blog_list.php?success=2");
                exit();
            } else {
                $error_message = "Blog güncellenirken bir hata oluştu. Lütfen tekrar deneyin.";
            }
        } catch (PDOException $e) {
            $error_message = "Veritabanı hatası: " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Blog Düzenle</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
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
                        <h3>Blog Yazısı Düzenle</h3>
                    </div>
                    <div class="card-body">
                        <?php if ($error_message): ?>
                            <div class="alert alert-danger" role="alert">
                                <?php echo $error_message; ?>
                            </div>
                        <?php endif; ?>

                        <?php if ($success_message): ?>
                            <div class="alert alert-success" role="alert">
                                <?php echo $success_message; ?>
                            </div>
                        <?php endif; ?>

                        <form method="POST" id="blogForm" onsubmit="return validateForm()">
                            <div class="mb-3">
                                <label for="title" class="form-label">Başlık</label>
                                <input type="text" class="form-control" id="title" name="title" value="<?php echo htmlspecialchars($blog['title']); ?>" required>
                            </div>
                            <div class="mb-3">
                                <label for="image_url" class="form-label">Görsel URL</label>
                                <input type="url" class="form-control" id="image_url" name="image_url" value="<?php echo htmlspecialchars($blog['image_url']); ?>">
                            </div>
                            <div class="mb-3">
                                <label for="editor" class="form-label">İçerik</label>
                                <textarea class="form-control" id="editor" name="content"><?php echo htmlspecialchars($blog['content']); ?></textarea>
                                <div id="contentError" class="invalid-feedback" style="display: none;">
                                    Lütfen içerik alanını doldurun.
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <a href="blog_list.php" class="btn btn-secondary">İptal</a>
                                <button type="submit" class="btn btn-primary">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let editor;
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(newEditor => {
                editor = newEditor;
            })
            .catch(error => {
                console.error(error);
            });

        function validateForm() {
            const content = editor.getData();
            if (!content.trim()) {
                document.getElementById('contentError').style.display = 'block';
                return false;
            }
            document.getElementById('contentError').style.display = 'none';
            return true;
        }
    </script>
</body>
</html> 