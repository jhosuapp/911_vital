import Swiper from 'swiper';

const swiper = function(){

    function _swiperHome(){
        let swiperHome = new Swiper(".swiper-home", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    allowTouchMove: true,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    allowTouchMove: true,
                },
            }
        });
    }


    return {
        getChildrenFunction : function(){
            _swiperHome();
        }
    }
}()

let getChildSwiper = ()=>{
    swiper.getChildrenFunction();
}

export{
    getChildSwiper
}
