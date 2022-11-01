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



window.addEventListener('load', ()=>{
    getFunctionsChild();
    getChildFunctionsAge();
    getChildFunctionsAos();
    getChildParallax();
});