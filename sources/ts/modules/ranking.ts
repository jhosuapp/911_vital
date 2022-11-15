const ranking = function(){

    let getRankingContainer : any = document.querySelector<HTMLElement>('#ranking-results');
    
    function _ranking(){
        fetch('/911_vital/public_html/theme/jhosuaTheme/conexiones/ranking.php')
        .then(res => res.json())
        .then(data =>{

            let [posicion] = data;

            let ordery = posicion.sort((a:any, b:any)=>{
                if(a.tiempo < b.tiempo){
                    return -1;
                }
            });

            let orderyPoints = ordery.sort((a:any, b:any)=>{
                if(a.puntos > b.puntos){
                    return -1;
                }
            });

            if(orderyPoints){

                orderyPoints.map(({tiempo = 0, nombre = "Jhosua Penagos", puntos = 0}, indice:any)=>{

                    let getTotalTime : any = tiempo;
                    let getMinutes : any = getTotalTime / 60000;
                    let getSeconds : any = (getTotalTime / 1000) - (parseInt(getMinutes) * 60);
                    getSeconds < 10 ? getSeconds = "0" + getSeconds : getSeconds = getSeconds;

                    let createHtmlElementDiv = document.createElement('div');
                    let templateData = `<div class="trivia-results__block trivia-results__place">
                                            <div class="trivia-results__position">
                                                <div class="trivia-results__number">${indice + 1}</div>
                                                <p>${nombre}</p>
                                                <div class="trivia-results__time">
                                                    <span>${parseInt(getMinutes)}:${getSeconds}</span>
                                                    <span>${puntos}pts</span>
                                                </div>
                                            </div>
                                        </div>`;
                    createHtmlElementDiv.innerHTML = templateData;
                    createHtmlElementDiv.classList.add('ranking-time__childs')
                    getRankingContainer.append(createHtmlElementDiv);
                });

            }

        }).catch(error =>{
        //    console.log(error); 
        });
    }


    return {
        getChildrenParent : function(){
            try{
                _ranking();
            }catch(error){ }
        }
    }

}();

let getChildRanking = ()=>{
    ranking.getChildrenParent()
}

export{
    getChildRanking
}