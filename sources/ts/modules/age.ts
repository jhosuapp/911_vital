const age = function(){

    const getAllInputs : any = document.querySelectorAll('#age input');

    function _validateAge(){

        getAllInputs.forEach((data: any, indice : number)=>{
            data.addEventListener('keyup', (e : any)=>{
                
                let getDataValue = data.value;
                if (e.key == "Backspace" && indice > 0) {
                    data.previousElementSibling.focus();
                    data.value = "";
                }
                if(getDataValue.length == 1 && indice < getAllInputs.length - 1){
                    data.nextElementSibling.focus();
                }

                let arrayWithValues : any[] = []; 
                getAllInputs.forEach((data : any)=>{
                    arrayWithValues.push(data.value);
                });
                let getAllValuesInNumber : any = arrayWithValues.join('');     
                parseInt(getAllValuesInNumber) < 2004 && parseInt(getAllValuesInNumber) > 1900 ? window.location.href = "/" : console.log('mal');

            });
        });

    }

    return {
        rturnFunctions : function(){
            _validateAge()
        }
    }

}();


let getChildsFunction = ()=>{
    age.rturnFunctions();
}

export {
    getChildsFunction
}

