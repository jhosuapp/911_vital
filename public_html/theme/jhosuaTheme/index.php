<?php include 'head.php' ?>

<section class="home-banner container-yellow container-principal container-hidden aos-activate" data-aos="animation">
    <div class="home-banner__flex">
        <div class="home-banner__item block-title aos-custom-fade-up">
            <h1>Mira los videos, responda la trivia y gana premios</h1>
            <a href="#" class="button aos-custom-fade-up">Iniciar trivia</a>
        </div>
        <div class="home-banner__item home-banner__item--animation aos-custom-rotate">
            <img src="img/png/banner__image.png" class="home-banner__image" alt="911 vital">
            <img src="img/svg/logo.svg" class="home-banner__item-animate" alt="911 logo">
        </div>
    </div>

    <!-- POLYGONS -->

    <div class="home-polygon">
        <div class="home-polygon__item">
            <img class="aos-custom-scaleX" src="img/svg/polygon__orange__right.svg" alt="polygon naranja">
        </div>
        <div class="home-polygon__item">
            <img class="aos-custom-scaleXreverse" src="img/svg/polygon__orange.svg" alt="polygon naranja">
        </div>
        <div class="home-polygon__item">
            <img class="aos-custom-scaleX" src="img/svg/polygon__green.svg" alt="polygon verde">
        </div>
    </div>
    
    <!-- SLIDER -->

    <div class="swiper swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide aos-custom-fade-up">
                <div class="swiper-home__item">
                    <img src="img/svg/icon__play.svg" alt="">
                </div>
                <div class="swiper-home__item">
                    <p>Mira nuestros videos y registrate</p>
                </div>
            </div>
            <div class="swiper-slide aos-custom-fade-up">
                <div class="swiper-home__item">
                    <img src="img/svg/message.svg" alt="">
                </div>
                <div class="swiper-home__item">
                    <p>Mira nuestros videos y registrate</p>
                </div>
            </div>
            <div class="swiper-slide aos-custom-fade-up">
                <div class="swiper-home__item">
                    <img src="img/svg/award.svg" alt="">
                </div>
                <div class="swiper-home__item">
                    <p>Mira nuestros videos y registrate</p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!-- WAVES -->
    
    <div class="validation-age__images home-flowers">
        <div class="validation-age__images__absolute validation-age__images__absolute--right aos-custom-fade-right">
            <img src="img/png/age__flower_two.png" alt="">
        </div>
        <div class="validation-age__images__absolute aos-custom-fade-left">
            <img src="img/png/age__flower.png" alt="">
        </div>
        <div class="waves__container">
            <div class="waves" style="background-image: url('img/svg/wave.svg')"></div>
            <div class="waves waves--two" style="background-image: url('img/svg/wave.svg')"></div>
        </div>
    </div>
</section>


<section class="home-video">
    <article class="block-title">
        <div class="home-video__background">
            <h4>Título del capítulo</h4>
            <img src="img/png/play_video.png" alt="">
        </div>
        <div class="home-video__participate">
            <h4>Mira este video y contesta la trivia</h4>
            <a href="#" class="button">Participa ahora</a>
        </div>
    </article>
    <aside class="block-title">
        <h6>Más capítulos de la serie</h6>
        <div class="home-video__block">
            <div class="home-video__item"></div>
            <p>Jbalvin, sech, una nota (oficial video)</p>
        </div>
        <div class="home-video__block">
            <div class="home-video__item"></div>
            <p>Jbalvin, sech, una nota (oficial video)</p>
        </div>
        <div class="home-video__block">
            <div class="home-video__item"></div>
            <p>Jbalvin, sech, una nota (oficial video)</p>
        </div>
    </aside>
</section>

<?php include 'footer.php' ?>