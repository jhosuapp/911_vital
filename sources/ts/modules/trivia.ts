const trivia = function(){

    let getAllLabel = document.querySelectorAll<HTMLElement>('#form-trivia label');
    let getAllButtonsTrivia = document.querySelectorAll<HTMLElement>('#form-trivia .button');
    let getAllContainersQuestions = document.querySelectorAll<HTMLElement>('.trivia__questions');
    let getNumberDinamicSize = document.querySelector<HTMLElement>('#triviaSize');
    let getProgressTrivia = document.querySelector<HTMLElement>('#triviaProgress');
    let getFormTrivia = document.querySelector<HTMLElement>('#form-trivia');
    let getBlockQuestions = document.querySelector<HTMLElement>('#block-questions');
    let getCotaninerResults = document.querySelector<HTMLElement>('#container-results');
    let getLoaderQuestions = document.querySelector<HTMLElement>('.loader');

    //ASIGNAMOS TAMAÑO Y VALUES NULL PARA LOS CONTENEDORES DE CADA PREGUNTA
    function _triviaContainer(){
        getAllContainersQuestions[0].classList.add('active');
        getAllContainersQuestions.forEach((data : any, indice : any)=>{
            data.setAttribute('data-length', indice + 1);
            data.setAttribute('data-value', null);
        });
    }

    //VALIDAMOS LAS PREGUNTAS CORRECTAS Y GUARDAMOS VALUES EN CONTENEDOR PADRE
    function _triviaQuestions(){
        function reUseNumberDinamic(number : any){
            getNumberDinamicSize ? getNumberDinamicSize.innerHTML = `${number} pregunta de ${getAllContainersQuestions.length}` : false;
        }
        reUseNumberDinamic(1);

        getAllLabel.forEach((data : any)=>{
            data.addEventListener('click', ()=>{
                let getParentNodeLabel = data.parentNode;
                getAllLabel.forEach((data : any)=>{
                    data.classList.remove('active');
                });
                data.classList.add('active');
                getParentNodeLabel.setAttribute('data-value', data.textContent);
                getParentNodeLabel.setAttribute('data-selectQuestion', true);
                data.getAttribute('data-question') == "23132123323321" ? getParentNodeLabel.classList.add('dataTrue') : getParentNodeLabel.classList.remove('dataTrue');
            });
        });

        getAllButtonsTrivia.forEach((data : any)=>{
            data.addEventListener('click', ()=>{
                let getParentNode = data.parentNode;
                let getDataLenght = getParentNode.nextElementSibling.getAttribute('data-length');
                if(getParentNode.getAttribute('data-selectQuestion') && parseInt(getDataLenght) <= getAllContainersQuestions.length){
                    getParentNode.classList.remove('active');
                    getParentNode.nextElementSibling.classList.add('active');
                    reUseNumberDinamic(getDataLenght);
                }else{
                    data.classList.add('invalid');
                }
                _triviaResult();
            });
        });
    }   

    //CALCULAMOS EL TIEMPO LIMITE DE LA TRIVIA
    function _triviaProgress(){
        let time : any = 180000;
        let totalTime : any = 0;
        setInterval(()=>{
            let timeModify = time - 1000;
            time = timeModify;
            let calcPercent = (100 * time) / 180000;
            getProgressTrivia ? getProgressTrivia.style.width = `${calcPercent}%` : false;
            let totalTimeModify = totalTime + 1000;
            totalTime = totalTimeModify;
            localStorage.setItem('tiempo_empleado', totalTime);
        },1000);
    }

    //RESULTADOS GENERALES DE LA TRIVIA
    function _triviaResult(){
        let getAllQuestionsTrue = document.querySelectorAll<HTMLElement>('.dataTrue');
        return getAllQuestionsTrue.length;
    }

    //ENVIAMOS DATA AL BACKEND
    function _triviaSubmit(){
        let removeSection = ()=>{
            getLoaderQuestions?.classList.remove('active');
            setTimeout(()=>{
                getBlockQuestions?.classList.add('hidden');
            },500);
        }

        getAllButtonsTrivia[getAllButtonsTrivia.length - 1].addEventListener('click', ()=>{
            let validateLastQuestion = getAllContainersQuestions[getAllContainersQuestions.length -1].getAttribute('data-selectQuestion');
            validateLastQuestion ? removeSection() : false;
        });

        getFormTrivia?.addEventListener('submit', (e : any)=>{
            e.preventDefault();
            const dataForm = new FormData((e.target))
            fetch('/911_vital/public_html/theme/jhosuaTheme/conexiones/trivia.php', {
                method: 'POST',
                body: dataForm
            })
            .then(res => res.json())
            .then(data =>{
                if(data){
                    setTimeout(()=>{
                        getLoaderQuestions?.classList.add('active');
                    },1500);

                    let getTotalTime : any = localStorage.getItem('tiempo_empleado');
                    let getMinutes : any = getTotalTime / 60000;
                    let getSeconds : any = (getTotalTime / 1000) - (parseInt(getMinutes) * 60);
                    getSeconds < 10 ? getSeconds = "0" + getSeconds : getSeconds = getSeconds;

                    let createDivWithTemplate = document.createElement('div');
                    let templateWithTimes = `
                        <hgroup class="trivia-results__block block-title">
                            <h1>¡Fin de la trivia!</h1>
                            <h6>Tus resultados</h6>
                            <h6>
                                Acertaste <b>${_triviaResult()}/${getAllContainersQuestions.length}</b> preguntas<br>
                                Tu tiempo fue de <b>${parseInt(getMinutes)}:${getSeconds}</b>
                            </h6>
                            <h6>Este es tu puesto dentro del ranking</h6>
                        </hgroup>
                        <div class="trivia-results__block trivia-results__place">
                            <div class="trivia-results__position">
                                <div class="trivia-results__number">1</div>
                                <p>Ernesto Torres</p>
                                <div class="trivia-results__time">
                                    <span>${parseInt(getMinutes)}:${getSeconds}</span>
                                    <span>${20 * _triviaResult()} Pts</span>
                                </div>
                            </div>
                        </div>`;
                    createDivWithTemplate.innerHTML = templateWithTimes;
                    getCotaninerResults?.prepend(createDivWithTemplate);
                    getCotaninerResults?.classList.add('active');
                    window.scrollTo(0, 0);
                    console.log(data);
                }
            }).catch(error =>{
                // console.log(error);
            });
        });
    }

    return {
        getChildrenFunction : function(){
            _triviaQuestions();
            _triviaContainer();
            _triviaProgress();
            _triviaSubmit();
            _triviaResult();
        }
    }

}();

let getChildTrivia = ()=>{
    try{
        trivia.getChildrenFunction();
    }catch(error){}
}

export {
    getChildTrivia
}
