let functionparentTypeData = function typeData(){

    function _varsPersonality(){

    }


    return {
        rturnFunctions : function(){
            _varsPersonality()
        }
    }
}()

let getChildTypeData = ()=>{
    functionparentTypeData.rturnFunctions();
}

export{
    getChildTypeData
}