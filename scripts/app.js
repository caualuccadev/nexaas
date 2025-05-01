import { CreateSideBar } from "./components/sideBar.js";


const bodyRoot = document.querySelector('body');


window.addEventListener('load', () =>{
    bodyRoot.appendChild(CreateSideBar());

})
