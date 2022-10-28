let getFunctionParentNavbar = function navbar(){
    
    let getNavBar : any = document.querySelector('.header');
    let getHamburgerNavBar : any = document.querySelector('.header__hamburger'); 

    function _scrollHeader(){
        if(getNavBar){
            let scrollTopPosition = () =>{
                window.scrollY > 50 ? getNavBar.classList.add('active') : getNavBar.classList.remove('active');
            }
            window.addEventListener('scroll', scrollTopPosition);
        }
    }

    function _hamburger(){
        let showMenu = () =>{
            getHamburgerNavBar.classList.toggle('active');
            getHamburgerNavBar.nextElementSibling.classList.toggle('active');
            getNavBar.classList.toggle('animation');
        }
        getHamburgerNavBar.addEventListener('click', showMenu);
    }

    function _validateAgeLocalStorage(){
        if(window.location.pathname != "/911_vital/public_html/theme/jhosuaTheme/template-parts/validations_age.php"){
            if(localStorage.getItem('age')){}else{
                window.location.href = "/911_vital/public_html/theme/jhosuaTheme/template-parts/validations_age.php";
            }
        }
    }

    function _loader(){
        let getLoaderContainer = document.querySelector('.loader');
        setTimeout(()=>{
            getLoaderContainer?.classList.add('active');
            setTimeout(()=>{
                getLoaderContainer?.classList.add('animation-paused');
            },1000);
        },400);
    }

    return {
        rturnfunction : function(){
            try{
                _scrollHeader();
                _hamburger();
            }catch(error){ }
            try{
                _validateAgeLocalStorage();
            }catch(error){}
            try{
                _loader();
            }catch(error){ }
        }
    }
}()


let getFunctionsChild = ()=>{
    getFunctionParentNavbar.rturnfunction();
}

export{
    getFunctionsChild
}