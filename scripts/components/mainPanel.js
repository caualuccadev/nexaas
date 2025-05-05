//importando informações dos clientes para criar os components
import { customers } from "/data/clients.js";


// functions para calcular e criar os cards
function cardConstructor(title, body){
    const card = document.createElement('article');
    card.classList.add('cardInfo')

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('cardTitle')
    cardTitle.innerText = title;

    const cardBody = document.createElement('p');
    cardBody.classList.add('cardBody');
    cardBody.innerText = body


    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    return card

}

function totalClients(){
    let totalClients = customers.length;

    const title = 'Total de Clientes'
    const body = totalClients;

    return cardConstructor(title, body)
}

function overdueClients(){
    let counter = 0;

    customers.forEach(client =>{
        if(client['status'] === 'overdue'){
            counter += 1
        }
    });

    const title = 'Clientes Inadimplentes';
    const body = counter;

    return cardConstructor(title, body)
}

function payingClients(){
    let counter = 0;

    customers.forEach(client =>{
        if(client['status'] === 'paying'){
            counter += 1
        }
    });

    const title = 'Clientes Adimplentes';
    const body = counter;

    return cardConstructor(title, body);
}

function totalAmount(){
    let totalAmount = 0;

    customers.forEach(client =>{
        totalAmount += client['subscription_amount']
    })

    const title = 'Total Arrecadado';
    const body = totalAmount.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'});

    return cardConstructor(title, body);
}



//seção de cards da visão geral
function cardsSection(){
    // container dos cards
    const cardsSection = document.createElement('section')
    cardsSection.classList.add('cardsSection');

    // titulo da seção de cards
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('sectionTitle');
    sectionTitle.innerText = 'Visão Geral';

    //adicionando o container dos cards 
    const cardsContainer = document.createElement('section')
    cardsContainer.classList.add('cardsContainer')

    // adicionando os filhos 
    cardsContainer.appendChild(totalClients());
    cardsContainer.appendChild(overdueClients());
    cardsContainer.appendChild(payingClients());
    cardsContainer.appendChild(totalAmount());

    // adicionando o container de card no seu container pai
    cardsSection.appendChild(sectionTitle);
    cardsSection.appendChild(cardsContainer)



    return cardsSection;
}

// função para criar a lista de clientes 
function clientsList(){
    const clientList = document.createElement('ul');
    clientList.classList.add('clientsList');

    customers.forEach(client =>{
        const clientItem = document.createElement('li');
        clientItem.classList.add('clientItem')

        // para alterar a url da foto dinamicamente
        let urlName = client['name'].replace(' ', '')

        // criando os elementos da li 
        let profilePicture = document.createElement('img')
        profilePicture.setAttribute('src', `../assets/images/${urlName}.png`);
        profilePicture.setAttribute('alt', `${client['name']} profile`);
        profilePicture.classList.add('clientProfile')

        let clientName = document.createElement('p');
        clientName.classList.add('clientInfo');
        clientName.classList.add('clientName')
        clientName.innerText = client['name'];

        let clientEmail = document.createElement('p');
        clientEmail.classList.add('clientInfo');
        clientEmail.innerText = client['email'];

        let clientTel = document.createElement('p');
        clientTel.classList.add('clientInfo');
        clientTel.classList.add('clientPhone')
        clientTel.innerText = client['phone'];

        let clientStatus = document.createElement('p');
        clientStatus.classList.add('clientInfo')
        if(client['status'] === 'paying'){
            clientStatus.innerText = 'Adimplente'
            clientStatus.classList.add('clientPaying')
        } else{
            clientStatus.innerText = 'Inadimplente'
            clientStatus.classList.add('clientOverdue')
        }


        //adicionando os itens na li 
        clientItem.appendChild(profilePicture);
        clientItem.appendChild(clientName);
        clientItem.appendChild(clientEmail);
        clientItem.appendChild(clientTel);
        clientItem.appendChild(clientStatus);
        
        //adicionando a li na ul 
        clientList.appendChild(clientItem)

    });

    return clientList
}


//seção de clients 
function clientsSection(){
    const clientsSection = document.createElement('section');
    clientsSection.classList.add('clientsSection');

    const clientsTitle = document.createElement('h2');
    clientsTitle.classList.add('sectionTitle');
    clientsTitle.innerText = 'Lista de clientes'

    clientsSection.appendChild(clientsTitle);
    clientsSection.appendChild(clientsList());

    return clientsSection;

}



// complete panel section 

export function mainPanel(){
    const mainPanel = document.createElement('section');
    mainPanel.classList.add('panelSection')
    mainPanel.setAttribute('id', 'Painel');

    
    mainPanel.appendChild(cardsSection())
    mainPanel.appendChild(clientsSection());
    


    return mainPanel;
}