<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once '../config.php';

if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Blog ID gerekli']);
    exit();
}

try {
    $stmt = $db->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($blog) {
        echo json_encode(['success' => true, 'data' => $blog]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Blog yazısı bulunamadı']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Veritabanı hatası']);
}
?> 