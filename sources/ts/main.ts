import {
    getFunctionsChild
} from "./modules/navbar";

import{
    getChildFunctionsAge
} from "./modules/age";

import {
    getChildFunctionsAos
} from "./modules/aos";



window.addEventListener('load', ()=>{
    getFunctionsChild();
    getChildFunctionsAge();
    getChildFunctionsAos();
});