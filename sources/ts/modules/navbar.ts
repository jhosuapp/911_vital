let getFunctionParentNavbar = function navbar(){
    
    let getNavBar : any = document.querySelector('.header');
    let getHamburgerNavBar : any = document.querySelector('.header__hamburger'); 

    function _scrollHeader(){
        let scrollTopPosition = () =>{
            window.scrollY > 50 ? getNavBar.classList.add('active') : getNavBar.classList.remove('active');
        }
        window.addEventListener('scroll', scrollTopPosition);
    }

    function _hamburger(){
        let showMenu = () =>{
            getHamburgerNavBar.classList.toggle('active');
            getHamburgerNavBar.nextElementSibling.classList.toggle('active');
            getNavBar.classList.toggle('animation');
        }
        getHamburgerNavBar.addEventListener('click', showMenu);
    }

    return {
        rturnfunction : function(){
            _scrollHeader();
            _hamburger();
        }
    }
}()


let getFunctionsChild = ()=>{
    getFunctionParentNavbar.rturnfunction();
}

export{
    getFunctionsChild
}