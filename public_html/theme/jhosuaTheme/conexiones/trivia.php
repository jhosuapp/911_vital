<?php

$ciudad = $_POST['ciudad'];
$other = $_POST['other'];

echo json_encode([$ciudad, $other]);

?>