<?php

$conex = mysqli_connect("localhost","root","","vital"); 

$primera_pregunta = $_POST['primera_pregunta'];
$segunda_pregunta = $_POST['segunda_pregunta'];
$tercer_pregunta = $_POST['tercer_pregunta'];

if($primera_pregunta && $segunda_pregunta && $tercer_pregunta){
    echo json_encode([$primera_pregunta, $segunda_pregunta, $tercer_pregunta]);

    $consulta = "INSERT INTO trivia_preguntas(primera_pregunta, segunda_pregunta, tercera_pregunta) VALUES ('$primera_pregunta', '$segunda_pregunta', '$tercer_pregunta')";
    $resultado = mysqli_query($conex,$consulta);
}

?>