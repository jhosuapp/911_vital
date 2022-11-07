<?php include 'head.php' ?>



    <section class="trivia container-yellow container-principal container-hidden">

        <div class="trivia__container block-title block-description">
            <div class="trivia__block">
                <h6 id="triviaSize">Pregunta 1 de 4</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime ipsum voluptas labore accusantium, recusandae reiciendis nam eaque magni pariatur cumque deserunt modi facilis mollitia accusamus atque at? Ullam, officiis!</p>
                <div class="trivia__progress">
                    <div id="triviaProgress">
                        <img src="img/svg/mango.svg" alt="mango">
                    </div>
                </div>
            </div>
            <form id="form-trivia">
                <div class="trivia__questions">
                    <label data-question="23132123321321" for="primera">primera pregunta, para probar y un poco más larga</label>
                    <input type="radio" name="ciudad" id="primera" value="primera pregunta, para probar y un poco más larga">
                    <label data-question="23132123321321" for="segunda">segunda</label>
                    <input type="radio" name="ciudad" id="segunda" value="segunda">
                    <label data-question="23132123321321" for="tercera">tercera</label>
                    <input type="radio" name="ciudad" id="tercera" value="tercera">
                    <label data-question="23132123323321" for="cuarta">cuarta</label>
                    <input type="radio" name="ciudad" id="cuarta" value="cuarta">
                    <button type="submit" class="button">
                        Enviar respuesta
                        <span id="validation-resp">Por favor selecciona una respuesta</span>
                    </button>
                </div>

                <div class="trivia__questions">
                    <label data-question="23132123323321" for="segundaPregunta">otra pregunta</label>
                    <input type="radio" name="other" id="segundaPregunta" value="otra pregunta">
                    <label data-question="23132123321321" for="segundaPreguntaDos">segunda</label>
                    <input type="radio" name="other" id="segundaPreguntaDos" value="segunda">
                    <label data-question="23132123321321" for="segundaPreguntaTres">tercera</label>
                    <input type="radio" name="other" id="segundaPreguntaTres" value="tercera">
                    <label data-question="23132123321321" for="segundaPreguntaCuatro">cuarta</label>
                    <input type="radio" name="other" id="segundaPreguntaCuatro" value="cuarta">
                    <button class="button">
                        Enviar respuesta
                        <span id="validation-resp">Por favor selecciona una respuesta</span>
                    </button>
                </div>

                <div></div>
            </form>
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

<?php include 'footer.php' ?>