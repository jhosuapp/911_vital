<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edad</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>

    <section class="validation-age aos-activate" data-aos="animation">

        <!-- IMAGENES HEADER -->

        <div class="validation-age__icons">
            <div class="validation-age__icons__item aos-custom-scale">
                <img src="../img/svg/polygon__orange.svg" alt="">
            </div>
            <div class="validation-age__icons__item aos-custom-scale">
                <img src="../img/svg/polygon__orange.svg" alt="">
            </div>
        </div>
        
        <div class="validation-age__container">
            <div class="validation-age__logo aos-custom-fade-up">
                <img src="../img/svg/logo.svg" alt="logo">
            </div>
            <div class="validation-age__block block-description aos-custom-fade-up">
                <p>Para continuar debes ser mayor de edad. Ingresa tu año de nacimiento.</p> 
                <div class="validation-age__flex aos-custom-fade-up" id="age">
                    <input type="text" placeholder="A"  maxlength="1" class="aos-custom-fade-up">
                    <input type="text" placeholder="A"  maxlength="1" class="aos-custom-fade-up">
                    <input type="text" placeholder="A"  maxlength="1" class="aos-custom-fade-up">
                    <input type="text" placeholder="A"  maxlength="1" class="aos-custom-fade-up">
                </div>
                <div class="validation-age__save-data aos-custom-fade-up" id="saveData">
                    <div></div>
                    <p>Recordar mis datos</p>
                </div>
                <div class="validation-age__block--align block-description--small aos-custom-fade-up">
                    <p>*No selecciones esta opción si compartes este computador con menores de edad.</p>
                    <p>Este sitio web utiliza cookies que se quedarán almacenadas en el computador con el fin de mejorar su experiencia. Al proporcionar su fecha de nacimiento, también se acepta el uso de cookies. Más información haga <a href="#">clic aquí.</a></p>
                </div>
            </div>
        </div>

        <!-- IMAGENES FOOTER + WAVES -->

        <div class="validation-age__images">
            <div class="validation-age__images__absolute validation-age__images__absolute--right aos-custom-fade-right">
                <img src="../img/png/age__flower_two.png" alt="">
            </div>
            <div class="validation-age__images__absolute aos-custom-fade-left">
                <img src="../img/png/age__flower.png" alt="">
            </div>
            <div class="waves__container">
                <div class="waves" style="background-image: url('../img/svg/wave.svg')"></div>
                <div class="waves waves--two" style="background-image: url('../img/svg/wave.svg')"></div>
            </div>
        </div>
    </section>

    <!-- FOOTER & LOADER -->
    <?php 
        include '../footer.php';
        include 'loader.php';
    ?>

</body>
</html>
