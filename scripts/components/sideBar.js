// atomic developing: smaller -> bigger


// funções de animação 

function hoverAnimation(item){
    item.addEventListener('mouseover', ()=>{
        item.style.backgroundColor = `var(--primaryActive)`;
        item.style.transition = 'all ease-in-out .3s'
    });

    item.addEventListener('mouseleave', ()=>{
        item.style.backgroundColor = `transparent`;
        item.style.transition = 'all ease-in-out .3s'
    })
};


//side bar items 
function sideBar_Header(){
    const sideBar_header = document.createElement('header');
    sideBar_header.classList.add('headerSideBar');

    sideBar_header.innerHTML = 
    `
    <img src="../assets/images/Logo_Nexaas.png">
    `;

    return sideBar_header;
}


function sideBar_navItems(content, url){
    const ItemContent = content;
    const ItemURL = url;

    const item = document.createElement('li');
    item.classList.add('sidebar_navItem');
    item.setAttribute('role','button');
    item.setAttribute('role-description', `Navegar para ${ItemContent}`)

    const itemLink = document.createElement('a');
    itemLink.setAttribute('href', '');
    itemLink.classList.add('sidebar_navItem');
    itemLink.classList.add('navItemLink');


    hoverAnimation(item); hoverAnimation(itemLink);

    itemLink.innerHTML = 
    `
    <img src=${ItemURL} alt="${ItemContent} ícone">
    <p>${ItemContent}</p>
    
    `;

    item.appendChild(itemLink)    

    return item;
};

function sideBar_ItemsList(){
    const navContainer = document.createElement('nav');
    navContainer.classList.add('navContainer');

    const itemsList = document.createElement('ul');

    itemsList.classList.add('sideBar_navUL');
    
    itemsList.appendChild(sideBar_navItems('Painel', "../assets/icons/panel_icon.png"));
    itemsList.appendChild(sideBar_navItems('Configurações', '../assets/icons/GearFill.png'));


    navContainer.appendChild(itemsList)


    return navContainer;
}

function sideBar_footer(){
    const footerSideBar = document.createElement('footer');
    footerSideBar.classList.add('footer_sidebar');

    const buttonFooter = document.createElement('button');
    buttonFooter.setAttribute('aria-label', 'Navegar para suporte');
    buttonFooter.classList.add('buttonFooter')

    buttonFooter.innerHTML = 
    `
    <img src ="../assets/icons/support_icon.png" class="icon_nav" >
    Suporte
    `;

    hoverAnimation(buttonFooter);

    footerSideBar.appendChild(buttonFooter);


    return footerSideBar;
}


export function CreateSideBar(){
    const sideBar = document.createElement('aside');

    sideBar.classList.add('sidebar');

    sideBar.appendChild(sideBar_Header());
    sideBar.appendChild(sideBar_ItemsList());
    sideBar.appendChild(sideBar_footer());

    return sideBar;

} 


