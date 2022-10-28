import * as AOS from 'aos';

const aos = function(){
    
    function _initAos(){
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
            });
        }, 500);
    }


    return {
        rturnFunctions : function(){
            _initAos();
        }
    }
}();


let getChildFunctionsAos = ()=>{
    aos.rturnFunctions();
}


export{
    getChildFunctionsAos
}