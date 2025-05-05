import { CreateSideBar } from "./components/sideBar.js";
import { headerMobile } from "./components/headerMobile.js";
import { headerDesktop } from "./components/headerDesktop.js"
import { mainSection } from "./components/main.js";

const bodyRoot = document.querySelector('body');


window.addEventListener('load', () =>{
// navigation components 
    bodyRoot.appendChild(headerMobile());

    bodyRoot.appendChild(CreateSideBar());

    bodyRoot.appendChild(headerDesktop());

// main components 
    const menuItems = document.querySelectorAll('.navItemLink');

    menuItems.forEach(item =>{
        item.addEventListener('click', (event) =>{
            let itemId = event.currentTarget.getAttribute('id');

            bodyRoot.appendChild(mainSection(itemId));
        })
    })
    
})
