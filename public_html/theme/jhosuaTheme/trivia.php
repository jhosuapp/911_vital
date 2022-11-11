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
        <!-- TRIVIA RESULTS -->
        <div class="trivia-results trivia__container" id="container-results">
            <div class="trivia-results__block trivia-results__flex">
                <a href="" class="button">Iniciar Trivia</a>
                <a href="" class="button button--transparent">Ver más videos</a>
            </div>
        </div>
        <!-- TRIVIA QUESTIONS -->
        <div class="trivia__container block-title block-description" id="block-questions">
            <div class="trivia__block aos-custom-fade-up">
                <h6 id="triviaSize">Pregunta 1 de 4</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime ipsum voluptas labore accusantium, recusandae reiciendis nam eaque magni pariatur cumque deserunt modi facilis mollitia accusamus atque at? Ullam, officiis!</p>
                <div class="trivia__progress aos-custom-scale">
                    <div id="triviaProgress">
                        <img src="img/svg/mango.svg" alt="mango">
                    </div>
                </div>
            </div>
            <form id="form-trivia">
                <div class="trivia__questions">
                    <label data-question="23132123321321" for="primera">Falsa</label>
                    <input type="radio" name="primera_pregunta" id="primera" value="falsa">
                    <label data-question="23132123321321" for="segunda">Falsa</label>
                    <input type="radio" name="primera_pregunta" id="segunda" value="falsa">
                    <label data-question="23132123321321" for="tercera">Falsa</label>
                    <input type="radio" name="primera_pregunta" id="tercera" value="falsa">
                    <label data-question="23132123323321" for="cuarta">Verdadera</label>
                    <input type="radio" name="primera_pregunta" id="cuarta" value="verdadera">
                    <button class="button aos-custom-fade-up">
                        Enviar respuesta
                        <span id="validation-resp">Por favor selecciona una respuesta</span>
                    </button>
                </div>

                <div class="trivia__questions">
                    <label data-question="23132123323321" for="segundaPregunta">Verdadera</label>
                    <input type="radio" name="segunda_pregunta" id="segundaPregunta" value="verdadera">
                    <label data-question="23132123321321" for="segundaPreguntaDos">Falsa</label>
                    <input type="radio" name="segunda_pregunta" id="segundaPreguntaDos" value="falsa">
                    <label data-question="23132123321321" for="segundaPreguntaTres">falsa</label>
                    <input type="radio" name="segunda_pregunta" id="segundaPreguntaTres" value="falsa">
                    <label data-question="23132123321321" for="segundaPreguntaCuatro">falsa</label>
                    <input type="radio" name="segunda_pregunta" id="segundaPreguntaCuatro" value="falsa">
                    <button class="button">
                        Enviar respuesta
                        <span id="validation-resp">Por favor selecciona una respuesta</span>
                    </button>
                </div>

                <div class="trivia__questions">
                    <label data-question="23132123323321" for="tercer_primera">Verdadera</label>
                    <input type="radio" name="tercer_pregunta" id="tercer_primera" value="verdadera">
                    <label data-question="23132123321321" for="tercer_segunda">Falsa</label>
                    <input type="radio" name="tercer_pregunta" id="tercer_segunda" value="falsa">
                    <label data-question="23132123321321" for="tercera_tercera">Falsa</label>
                    <input type="radio" name="tercer_pregunta" id="tercera_tercera" value="falsa">
                    <button class="button">
                        Enviar respuesta
                        <span id="validation-resp">Por favor selecciona una respuesta</span>
                    </button>
                </div>
                
                <!-- INPUTS CON VALUES DE TIEMPO Y PREGUNTAS ACERTADAS -->
                <input type="hidden" name="time" id="time">
                <input type="hidden" name="totalQuestions" id="totalQuestions">
                <input type="hidden" name="points" id="points">

                <div id="count_questions" data-length="finish"></div>
            </form>
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