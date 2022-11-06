import {
    getFunctionsChild
} from "./modules/navbar";

import{
    getChildFunctionsAge
} from "./modules/age";

import {
    getChildFunctionsAos
} from "./modules/aos";

import {
    getChildParallax
} from "./modules/parallax";

import{
    getChildSwiper
} from "./modules/swiper";

import {
    getChildModal
} from "./modules/modal";

window.addEventListener('load', ()=>{
    getFunctionsChild();
    getChildFunctionsAge();
    getChildFunctionsAos();
    getChildParallax();
    getChildSwiper();
    getChildModal();
});