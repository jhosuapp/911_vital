<?php

$conex = mysqli_connect("localhost","root","","vital"); 

$primera_pregunta = $_POST['primera_pregunta'];
$segunda_pregunta = $_POST['segunda_pregunta'];
$tercer_pregunta = $_POST['tercer_pregunta'];
$time = $_POST['time'];
$totalQuestions = $_POST['totalQuestions'];
$points = $_POST['points'];


if($primera_pregunta && $segunda_pregunta && $tercer_pregunta && $time){
    echo json_encode([$primera_pregunta, $segunda_pregunta, $tercer_pregunta, $time, $totalQuestions, $points]);

    $consulta = "INSERT INTO trivia_preguntas(primera_pregunta, segunda_pregunta, tercera_pregunta, tiempo, preguntasbien, puntos) VALUES ('$primera_pregunta', '$segunda_pregunta', '$tercer_pregunta', '$time', '$totalQuestions', '$points')";
    $resultado = mysqli_query($conex,$consulta);
}

?>