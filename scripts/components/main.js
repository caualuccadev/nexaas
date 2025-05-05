import { mainPanel } from "./mainPanel.js";
import { LoadingComponent } from "./loadinComponent.js";

// pegando os links para dinamizar o conteudo da main
// o conteúdo só vai aparecer quando o link estiver ativo

let menuLinks = document.querySelectorAll('.navItemLink');


export function mainSection(id){
    const mainSection = document.createElement('main');
    mainSection.classList.add('mainSection');

    
   


    let idSection = id

    switch (idSection) {
        case 'Painel':
            mainSection.appendChild(mainPanel());
            
            break;
            
        case 'Configurações':
            mainSection.appendChild(LoadingComponent());;

        default:
            mainSection.innerHTML= ''
            break;
    }

    

    return mainSection
}

