<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

require_once '../config/db_connection.php';

// Fetch all contact information
$query = "SELECT * FROM contacts ORDER BY created_at DESC";
$result = mysqli_query($conn, $query);

// Handle status toggle
if (isset($_POST['toggle_status'])) {
    $contact_id = $_POST['contact_id'];
    $current_status = $_POST['current_status'];
    $new_status = $current_status == 1 ? 0 : 1;
    
    $update_query = "UPDATE contacts SET is_active = ? WHERE id = ?";
    $stmt = mysqli_prepare($conn, $update_query);
    mysqli_stmt_bind_param($stmt, "ii", $new_status, $contact_id);
    
    if (mysqli_stmt_execute($stmt)) {
        header("Location: list_contacts.php");
        exit();
    }
}

// Handle delete
if (isset($_POST['delete'])) {
    $contact_id = $_POST['contact_id'];
    
    $delete_query = "DELETE FROM contacts WHERE id = ?";
    $stmt = mysqli_prepare($conn, $delete_query);
    mysqli_stmt_bind_param($stmt, "i", $contact_id);
    
    if (mysqli_stmt_execute($stmt)) {
        header("Location: list_contacts.php");
        exit();
    }
}

include 'header.php';
?>

<div class="container-fluid">
    <div class="row">
        <?php include 'sidebar.php'; ?>
        
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">İletişim Bilgileri</h1>
                <a href="add_contact.php" class="btn btn-primary">
                    <i class="fas fa-plus"></i> Yeni Ekle
                </a>
            </div>

            <?php if (mysqli_num_rows($result) > 0): ?>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tür</th>
                                <th>Değer</th>
                                <th>İkon</th>
                                <th>Durum</th>
                                <th>Oluşturulma Tarihi</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while ($row = mysqli_fetch_assoc($result)): ?>
                                <tr>
                                    <td><?php echo $row['id']; ?></td>
                                    <td><?php echo ucfirst($row['type']); ?></td>
                                    <td><?php echo $row['value']; ?></td>
                                    <td><i class="<?php echo $row['icon']; ?>"></i></td>
                                    <td>
                                        <form method="POST" style="display: inline;">
                                            <input type="hidden" name="contact_id" value="<?php echo $row['id']; ?>">
                                            <input type="hidden" name="current_status" value="<?php echo $row['is_active']; ?>">
                                            <button type="submit" name="toggle_status" class="btn btn-sm <?php echo $row['is_active'] ? 'btn-success' : 'btn-secondary'; ?>">
                                                <?php echo $row['is_active'] ? 'Aktif' : 'Pasif'; ?>
                                            </button>
                                        </form>
                                    </td>
                                    <td><?php echo date('d.m.Y H:i', strtotime($row['created_at'])); ?></td>
                                    <td>
                                        <a href="edit_contact.php?id=<?php echo $row['id']; ?>" class="btn btn-sm btn-warning">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <form method="POST" style="display: inline;" onsubmit="return confirm('Bu iletişim bilgisini silmek istediğinizden emin misiniz?');">
                                            <input type="hidden" name="contact_id" value="<?php echo $row['id']; ?>">
                                            <button type="submit" name="delete" class="btn btn-sm btn-danger">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="alert alert-info">
                    Henüz iletişim bilgisi eklenmemiş.
                </div>
            <?php endif; ?>
        </main>
    </div>
</div>

<?php include 'footer.php'; ?> 