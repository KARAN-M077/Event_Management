<?php
$name1 = $_POST['name1'];
$roll1 = $_POST['roll1'];
$department1 = $_POST['department1'];
$email = $_POST['email'];
$name2 = $_POST['name2'];
$roll2 = $_POST['roll2'];
$department2 = $_POST['department2'];
$transaction = $_POST['transaction'];

$conn = new mysqli('localhost', 'root',  '' , 'event');
if($conn->connect_error){
    die('Connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into electronics(name1,roll1,department1,email,name2,roll2,department2,transaction)values(?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssssss",$name1,$roll1,$department1,$email,$name2,$roll2,$department2,$transaction);
    $stmt->execute();
    echo "registerted succes";
    $stmt->close();
    $conn->close();  
} 
?>