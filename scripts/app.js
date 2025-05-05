import { CreateSideBar } from "./components/sideBar.js";
import { headerMobile } from "./components/headerMobile.js";
import { headerDesktop } from "./components/headerDesktop.js"
import { mainPanel } from "./components/mainPanel.js";

const bodyRoot = document.querySelector('body');


window.addEventListener('load', () =>{
// navigation components 
    bodyRoot.appendChild(headerMobile());
    
    bodyRoot.appendChild(CreateSideBar());

    bodyRoot.appendChild(headerDesktop());

// main components
    bodyRoot.appendChild(mainPanel());
    
})
