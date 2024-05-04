<?php

$host = 'localhost';
$dbname = 'recipe_db';
$user = 'username';
$password = 'password';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
  die('Connection failed: '. $conn->connect_error);
}

$sql = 'SELECT * FROM recipes';
$result = $conn->query($sql);

$recipes = [];

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $recipes[] = $row;
  }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($recipes);

?>