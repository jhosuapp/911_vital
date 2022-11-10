const ranking = function(){

    function _ranking(){
        fetch('/911_vital/public_html/theme/jhosuaTheme/conexiones/ranking.php')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }


    return {
        getChildrenParent : function(){
            _ranking();
        }
    }

}();

let getChildRanking = ()=>{
    ranking.getChildrenParent()
}

export{
    getChildRanking
}