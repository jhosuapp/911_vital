const trivia = function(){

    let getAllLabel = document.querySelectorAll<HTMLElement>('#form-trivia label');
    let getAllButtonsTrivia = document.querySelectorAll<HTMLElement>('#form-trivia .button');
    let getAllContainersQuestions = document.querySelectorAll<HTMLElement>('.trivia__questions');
    let getNumberDinamicSize = document.querySelector<HTMLElement>('#triviaSize');
    let getProgressTrivia = document.querySelector<HTMLElement>('#triviaProgress');
    let getFormTrivia = document.querySelector<HTMLElement>('#form-trivia');

    function _triviaContainer(){
        getAllContainersQuestions[0].classList.add('active');
        getAllContainersQuestions.forEach((data : any, indice : any)=>{
            data.setAttribute('data-length', indice + 1);
            data.setAttribute('data-value', null);
        });
    }

    function _trivia(){
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
                if(getParentNode.getAttribute('data-selectQuestion')){
                    getParentNode.classList.remove('active');
                    getParentNode.nextElementSibling.classList.add('active');
                    reUseNumberDinamic(getParentNode.nextElementSibling.getAttribute('data-length'));
                }else{
                    data.classList.add('invalid');
                }
                _triviaResult();
            });
        });
    }   

    function _triviaProgress(){
        let time = 120000;

        setInterval(()=>{
            let timeModify = time - 1000;
            time = timeModify;
            let calcPercent = (100 * time) / 120000;
            getProgressTrivia ? getProgressTrivia.style.width = `${calcPercent}%` : false;
        },1000);
    }

    function _triviaSubmit(){

        let arrayWithValues : any = [];
        getAllContainersQuestions.forEach((data : any)=>{
            arrayWithValues.push(data.getAttribute('data-value'));
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
                console.log(data);
            }).catch(error =>{
                
            });
        });

    }

    function _triviaResult(){
        let getAllQuestionsTrue = document.querySelectorAll<HTMLElement>('.dataTrue');
    }

    return {
        getChildrenFunction : function(){
            _trivia();
            _triviaContainer();
            _triviaProgress();
            _triviaSubmit();
            _triviaResult();
        }
    }

}();

let getChildTrivia = ()=>{
    trivia.getChildrenFunction();
}

export {
    getChildTrivia
}
