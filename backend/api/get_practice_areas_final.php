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
    $stmt = $db->query("SELECT * FROM practice_areas WHERE is_active = 1 ORDER BY id ASC");
    $areas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['status' => 'success', 'data' => $areas]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Veritabanı hatası: ' . $e->getMessage()]);
}
?>