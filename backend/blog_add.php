<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $image_url = $_POST['image_url'];

    $stmt = $db->prepare("INSERT INTO blogs (title, content, image_url) VALUES (?, ?, ?)");
    if ($stmt->execute([$title, $content, $image_url])) {
        header("Location: blog_list.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Yeni Blog Ekle</title>
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
                        <h3>Yeni Blog Yazısı Ekle</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST" id="blogForm" onsubmit="return validateForm()">
                            <div class="mb-3">
                                <label for="title" class="form-label">Başlık</label>
                                <input type="text" class="form-control" id="title" name="title" required>
                            </div>
                            <div class="mb-3">
                                <label for="image_url" class="form-label">Görsel URL</label>
                                <input type="url" class="form-control" id="image_url" name="image_url">
                            </div>
                            <div class="mb-3">
                                <label for="editor" class="form-label">İçerik</label>
                                <textarea class="form-control" id="editor" name="content"></textarea>
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