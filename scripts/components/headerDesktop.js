import { asideHeader_mobile , searchBar_container } from "./headerMobile.js";

export function headerDesktop(){
    const headerSection = document.createElement('header');
    headerSection.classList.add('headerDesktop');

    headerSection.appendChild(searchBar_container());
    headerSection.appendChild(asideHeader_mobile());
   

    return headerSection;
};