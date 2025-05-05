//loading component 

export function LoadingComponent(){
    //criando a seção que irá conter os elementos
    const section = document.createElement('section');
    section.classList.add('loadingSection');
    section.setAttribute('aria-hidden', 'false');
    section.setAttribute('aria-label', 'Carregando informações');

    //criando os elementos da seção 
    const loadingText = document.createElement('p');
    loadingText.classList.add('loadingText');
    loadingText.innerText = 'Carregando'

    const loadingImg = document.createElement('img');
    loadingImg.classList.add('loadingImg');
    loadingImg.setAttribute('src', '../assets/icons/loading dark.png');

    //add filhos 
    section.appendChild(loadingText);
    section.appendChild(loadingImg);

    return section;
}








// main section 

export function mainPanel(){
    const mainPanel = document.createElement('main');
    mainPanel.classList.add('mainSection')

    const loadingSection = LoadingComponent();
    
    mainPanel.appendChild(loadingSection);


    return mainPanel;
}