<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once '../config.php';

try {
    $stmt = $db->query("SELECT * FROM contacts WHERE is_active = 1 ORDER BY type ASC");
    $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Verileri kullanımı kolay bir formata dönüştür
    $formattedContacts = [
        'phone' => null,
        'email' => null,
        'address' => null,
        'whatsapp' => null,
        'working_hours' => null
    ];

    foreach ($contacts as $contact) {
        $formattedContacts[$contact['type']] = [
            'value' => $contact['value'],
            'icon' => $contact['icon']
        ];
    }

    echo json_encode(['status' => 'success', 'data' => $formattedContacts]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Veritabanı hatası: ' . $e->getMessage()]);
}
?> 