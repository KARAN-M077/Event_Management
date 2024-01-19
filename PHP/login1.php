<?php
$email = $_POST['email'];
$pass= $_POST['pass'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "event";
$conn = new mysqli("localhost", "root", "", "event");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$stmt = "SELECT email,pass FROM projectlogin WHERE email='$email' AND pass='$pass'";
$result = $conn->query($stmt);
if ($result->num_rows > 0) {
  header('Location: navbar.html');
  exit;
} else {
    $error = "Invalid email or password";
}
$conn->close();
?>
<?php
  if (isset($error)) {
    echo "<p>$error</p>";
  }
  ?>