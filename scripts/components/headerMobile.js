// atomic developing: smaller -> bigger 


function buttonMenu(){
    const button = document.createElement('button');
    button.setAttribute('aria-label', 'Abrir menu');
    button.classList.add('mobileIcons')
    const idButton = 'menu_img'

    button.classList.add('buttonMenu');

    button.innerHTML = 
    `
    <img src="../assets/icons/menu_default.png" id="menu_img" alt="menubutton">
    
    `;

    return button

};

export function logoHeader(){
    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', '../assets/images/Logo_Nexaas.png');
    imgLogo.setAttribute('alt', 'Nexaas logo');

    return imgLogo;
};

export function notificationButton(){
    const buttonNotification = document.createElement('button');
    buttonNotification.setAttribute('aria-label', 'Abrir notificações');
    buttonNotification.classList.add('mobileIcons');
    buttonNotification.classList.add('bellContainer')
    const notificationID = 'notification_img';

    buttonNotification.innerHTML=
    `
    <img src="../assets/icons/notification dark.png" id=${notificationID}>
    `;

    return buttonNotification;
}

export function profilePicture(){
    const profileImg = document.createElement('img');
    profileImg.setAttribute('alt', 'Foto de perfil');
    profileImg.setAttribute('src', '../assets/images/avatar-admin.png');
    profileImg.classList.add('imageProfile')

    const chevron_icon = document.createElement('img');
    chevron_icon.setAttribute('src', '../assets/icons/chevron dark.png');
    chevron_icon.setAttribute('id', 'mobileChevron');
    chevron_icon.classList.add('mobileChevron');

    const profileContainer = document.createElement('aside');
    profileContainer.classList.add('profileContainer');

    profileContainer.appendChild(profileImg);
    profileContainer.appendChild(chevron_icon);

    return profileContainer;
};

export function asideHeader_mobile() {
    const userNav = document.createElement('div');
    userNav.classList.add('userNav_mobile');

    userNav.appendChild(notificationButton());
    userNav.appendChild(profilePicture());

    return userNav;
};

export function searchBar_container(){
    const footerHeader = document.createElement('section');
    footerHeader.classList.add('searchContainer');

    const searchIcon = document.createElement('img');
    searchIcon.setAttribute('src', '../assets/icons/Search.png');
    searchIcon.classList.add('mobileIcons');
    searchIcon.classList.add('searchIcon')

    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'search');
    searchBar.setAttribute('id', 'searchBar');
    searchBar.setAttribute('placeholder', 'Busque por clientes')

    footerHeader.appendChild(searchIcon);
    footerHeader.appendChild(searchBar);

    return footerHeader;
}

export function navigationUser(){
    const navUser = document.createElement('section');
    navUser.classList.add('navUser');

    navUser.appendChild(buttonMenu());
    navUser.appendChild(logoHeader());
    navUser.appendChild(asideHeader_mobile());

    return navUser;
};

export function headerMobile(){
    const headerMobile = document.createElement('header');
    headerMobile.classList.add('headerMobile');

    headerMobile.appendChild(navigationUser());
    headerMobile.appendChild(searchBar_container());

    return headerMobile;
}



