const parallax = function(){

    function _parallax(){
        let getBodyForParallax : any = document.getElementsByTagName("BODY")[0];  
        getBodyForParallax.addEventListener("mousemove", function(e : any) {
            parallaxed(e, "parallaxed", -0.2);
        });
    
        function parallaxed(e : any, className : any, trans : any) {
            let amountMovedX = (e.clientX * trans / 8);
            let amountMovedY = (e.clientY * trans / 8);
            let getClassesWithParallax = document.querySelectorAll<HTMLElement>(`.${className}`);
            let i : number;
            for (i = 0; i < getClassesWithParallax.length; i++) {
                getClassesWithParallax[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        }
    }

    return{
        getChildrenFunctions : function(){
            try{
                _parallax();
            }catch(error){ }
        }
    }

}();

let getChildParallax = ()=>{
    parallax.getChildrenFunctions();
}

export{
    getChildParallax
}
