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
        $tercera_pregunta=$row['tercera_pregunta'];
        $tiempo=$row['tiempo'];
        $preguntasbien=$row['preguntasbien'];
        $puntos=$row['puntos'];
        

        $clientes[] = array('id'=> $id, 
                            'primera_pregunta'=> $primera_pregunta, 
                            'segunda_pregunta'=> $segunda_pregunta, 
                            'tercera_pregunta'=> $tercera_pregunta, 
                            'tiempo'=> intval($tiempo),
                            'preguntasbien'=> intval($preguntasbien),
                            'puntos'=> intval($puntos));

    }
        
    //DESCONECTAMOS BD
    $close = mysqli_close($conexion) 
    or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
    
    //CREAMOS EL JSON
    echo json_encode([$clientes]);

?>