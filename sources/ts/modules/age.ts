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

                function saveData(){
                    window.location.href = "/911_vital/public_html/theme/jhosuaTheme/";
                    localStorage.setItem('age', 'validado');
                }

                let createDate = new Date();
                parseInt(getAllValuesInNumber) < createDate.getFullYear() - 18 && parseInt(getAllValuesInNumber) > 1900 ? saveData() : false;

            });
        });
    }

    function _saveDataLocalStorage(){
        let getButtonSaveData = document.getElementById('saveData');

        getButtonSaveData?.addEventListener('click', ()=>{
            getButtonSaveData?.classList.toggle('active');
        });
    }

    return {
        rturnFunctions : function(){
            try{
                _validateAge();
            }catch(error){ }
            try{
                _saveDataLocalStorage();
            }catch(error){ }
        }
    }
}();


let getChildFunctionsAge = ()=>{
    age.rturnFunctions();
}

export {
    getChildFunctionsAge
}

