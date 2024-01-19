<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name1 = $_POST['name1'];
    $roll1 = $_POST['roll1'];
    $department1 = $_POST['department1'];
    $email = $_POST['email'];
    $name2 = $_POST['name2'];
    $roll2 = $_POST['roll2'];
    $department2 = $_POST['department2'];
    $transaction = $_POST['transaction'];

    // Perform validation
    $errors = [];

    if (empty($name1)) {
        $errors[] = "Name is required.";
    }
    if (empty($roll1)) {
        $errors[] = "Name is required.";
    }
    if (empty($department1)) {
        $errors[] = "Name is required.";
    }
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if (empty($name2)) {
        $errors[] = "Name is required.";
    }
    if (empty($roll2)) {
        $errors[] = "Name is required.";
    }
    if (empty($department2)) {
        $errors[] = "Name is required.";
    }
    if (empty($transaction)) {
        $errors[] = "Name is required.";
    }


    // Process the form or display errors
    if (empty($errors)) {
        $conn = new mysqli('localhost', 'root',  '' , 'event');
if($conn->connect_error){
    die('Connection failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into paperpresentaion(name1,roll1,department1,email,name2,roll2,department2,transaction)values(?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssssss",$name1,$roll1,$department1,$email,$name2,$roll2,$department2,$transaction);
    $stmt->execute();
    $stmt->close();
    $conn->close();
     
} 
    echo "Form submitted successfully!";
    } else {
        // Display errors to the user
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>
