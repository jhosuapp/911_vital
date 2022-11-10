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

import {
    getChildTrivia
} from "./modules/trivia";

import {
    getChildRanking
} from "./modules/ranking";

window.addEventListener('load', ()=>{
    getFunctionsChild();
    getChildFunctionsAge();
    getChildFunctionsAos();
    getChildParallax();
    getChildSwiper();
    getChildModal();
    getChildTrivia();
    getChildRanking();
});