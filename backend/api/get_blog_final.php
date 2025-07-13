<?php
header('Content-Type: application/json');
// İki domain'i de destekle
$allowed_origins = [
    'https://avseymanurtasdemir.com',
    'https://avseymanurtasdemir.com.tr',
    'https://www.avseymanurtasdemir.com',
    'https://www.avseymanurtasdemir.com.tr'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('Access-Control-Allow-Origin: *');
}
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once '../config.php';

try {
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Blog ID gerekli']);
        exit;
    }
    
    $stmt = $db->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->execute([$id]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($blog) {
        echo json_encode(['success' => true, 'data' => $blog]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Blog bulunamadı']);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Veritabanı hatası']);
}
?>