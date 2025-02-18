<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

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