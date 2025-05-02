import { CreateSideBar } from "./components/sideBar.js";
import { headerMobile } from "./components/headerMobile.js";


const bodyRoot = document.querySelector('body');


window.addEventListener('load', () =>{
    let screenSize = window.innerWidth;

    bodyRoot.appendChild(headerMobile());
    bodyRoot.appendChild(CreateSideBar());

    

})
