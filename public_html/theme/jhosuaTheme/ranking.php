<?php include 'head.php' ?>

<section class="trivia container-yellow container-principal container-hidden aos-activate" data-aos="animation">
    <!-- POLYGONS -->
    <div class="home-polygon trivia-polygon">
        <div class="home-polygon__item">
            <img class="aos-custom-scaleX" src="img/svg/polygon__yellow.svg" alt="polygon naranja">
        </div>
        <div class="home-polygon__item">
            <img class="aos-custom-scaleXreverse" src="img/svg/polygon__yellow_reverse.svg" alt="polygon naranja">
        </div>
        <div class="home-polygon__item">
            <img class="aos-custom-scaleX" src="img/svg/polygon__green.svg" alt="polygon verde">
        </div>
    </div>
    <!--RANKING-->
    <div class="ranking-results">
        <hgroup class="trivia-results__block block-title">
            <h1>Ranking</h1>
            <h6>Semanalmente tendremos 30 ganadores de espectaculares premios, no te quedes por fuera. ¡Juega y gana!</h6>
            <h6>Te presentamos tu mejor puntaje hasta el momento ¿Puedes superarlo? </h6>
        </hgroup>
        <div id="ranking-results" class="ranking-time"></div>
    </div>
    <!-- WAVES -->
    <div class="validation-age__images home-flowers">
        <div class="validation-age__images__absolute aos-custom-fade-left">
            <img src="img/png/age__flower.png" alt="">
        </div>
        <div class="trivia-banner">
            <div class="home-banner__item home-banner__item--animation">
                <img src="img/png/banner__image.png" class="home-banner__image" alt="911 vital">
                <img src="img/svg/logo.svg" class="home-banner__item-animate" alt="911 logo">
            </div>
        </div>
        <div class="waves__container">
            <div class="waves" style="background-image: url('img/svg/wave.svg')"></div>
            <div class="waves waves--two" style="background-image: url('img/svg/wave.svg')"></div>
        </div>
    </div>
</section>

<?php include 'footer.php' ?>