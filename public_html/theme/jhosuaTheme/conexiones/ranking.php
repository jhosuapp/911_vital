<?php

    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "vital";

    //CREAMOS LA CONEXIÓN
    $conexion = mysqli_connect($server, $user, $pass,$bd) 
    or die("Ha sucedido un error inexperado en la conexion de la base de datos");

    //GENERAMOS LA CONSULTA
    $sql = "SELECT * FROM trivia_preguntas";
    mysqli_set_charset($conexion, "utf8"); //FORMATO DE DATOS BD

    if(!$result = mysqli_query($conexion, $sql)) die();

    $clientes = array(); //CREAMOS ARRAY

    while($row = mysqli_fetch_array($result)) 
    { 
        $id=$row['id'];
        $primera_pregunta=$row['primera_pregunta'];
        $segunda_pregunta=$row['segunda_pregunta'];
        

        $clientes[] = array('id'=> $id, 'primera_pregunta'=> $primera_pregunta, 'segunda_pregunta'=> $segunda_pregunta);

    }
        
    //DESCONECTAMOS BD
    $close = mysqli_close($conexion) 
    or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
    
    //CREAMOS EL JSON
    echo json_encode([$clientes]);

?>