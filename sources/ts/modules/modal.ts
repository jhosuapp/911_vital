const modal = function(){

    function _modalHome(){
        let getAllButtonsOpenModal = document.querySelectorAll<HTMLElement>('.open-modal');
        let getAllButtonsCloseModal = document.querySelectorAll<HTMLElement>('.close-modal');
        let getModalContainer = document.querySelector<HTMLElement>('.modal-home');
        let getIframe = document.querySelector<HTMLElement>('#iframe');

        getAllButtonsOpenModal.forEach((data : any)=>{
            data.addEventListener('click', ()=>{   
                console.log(data.getAttribute('data-video'));
                getIframe?.setAttribute('src', data.getAttribute('data-video'));
                getModalContainer?.classList.add('active');
            });
        });

        getAllButtonsCloseModal.forEach((data : any)=>{
            data.addEventListener('click', ()=>{
                getModalContainer?.classList.remove('active');
                getIframe?.removeAttribute('src');
            });
        });
    }

    return {
        getChildrenFunction : function(){
            _modalHome();
        }
    }

}();

let getChildModal = ()=>{
    modal.getChildrenFunction();
}

export {
    getChildModal
}