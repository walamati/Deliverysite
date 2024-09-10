const main_URL = 'https://remotestorage-6b5e2-default-rtdb.europe-west1.firebasedatabase.app/'

let chooseOfferButton = -1;
let menuCounter = 0;
let firstResponse = null;
function init() {
    loadData();
    intoBasketPretext();
}

async function loadData() {
    let response = await fetch(main_URL + '.json');
    firstResponse = await response.json();
    render(firstResponse);
}

function render(responseToJson) {
    let chooseMenus = document.getElementById('chooseMenus');
    let headlines = responseToJson[`menusHeadline`];
    let headlineImgs = responseToJson[`headlineImgs`];
    let counter = 0;
    for (let i = 0; i < 10; i++) { 
        let singleMenus = responseToJson[`menu_1-${i}`];
        chooseMenus.innerHTML += chooseMenusHtmlCode(singleMenus, i, headlines, counter, headlineImgs);
        if (i % 2) {
            counter++;
        }
    }
}

function chooseButton(index, sectionId) {
    
    if (chooseOfferButton !== -1) {
        let button = document.getElementById(`offersButton_${chooseOfferButton}`);
        button.classList.remove('underline');
    }
    
    chooseOfferButton = index;
    let button = document.getElementById(`offersButton_${index}`);
    button.classList.add('underline');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function chooseSingleMenu(i) {
    document.getElementById('body').classList.add('hidden');
    document.getElementById('chooseSingleMenuBackgroundColor').classList.add('chooseSingleMenuBackgroundColor');
    document.getElementById('finalSingleChoose').classList.remove('none');
    document.getElementById('finalSingleChoose').innerHTML = finalSingleChooseHtmlCode(i, firstResponse);
}

function closeSingleCard() {
    document.getElementById('body').classList.remove('hidden');
    document.getElementById('chooseSingleMenuBackgroundColor').classList.remove('chooseSingleMenuBackgroundColor');
    document.getElementById('finalSingleChoose').classList.add('none');
}

function amountAdd(menu) {
    menuCounter = firstResponse[menu]['amount'];
    if (menuCounter >= 10) {
        console.error('no more');
    } else {
        menuCounter++;
        firstResponse[menu]['amount'] = menuCounter;
        sendToArray(firstResponse[menu], menu);
    }
}

function amountRemove(menu) {
    menuCounter = firstResponse[menu]['amount'];
    if (menuCounter <= 1) {
        console.error('dont work');
    } else {
        menuCounter--;
        firstResponse[menu]['amount'] = menuCounter;
        sendToArray(firstResponse[menu], menu);
    }
    
}

async function sendToArray(data, path) {
    let response = await fetch(main_URL + path + '.json', {
        method: `PUT`,
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
     });
     let responseToJson = await response.json();
     let lastNumber = getLastNumber(path);
     chooseSingleMenu(lastNumber);
}

function getLastNumber(menu) {
    let parts = menu.split('-');
    let lastNumber = parts[1];
    return lastNumber;
}

function intoBasketPretext() {
    let pretext = document.getElementById('pretext');
    pretext.innerHTML = pretextHtmlCode();
}

function chooseInBasket(menu) {
    closeSingleCard();
    console.log(firstResponse[menu]);
    let pretext = document.getElementById('pretext');
    pretext.innerHTML = ``;
    let inBasket = document.getElementById('inBasket');
    inBasket.innerHTML = inBasketHtmlCode(firstResponse[menu]);
}


function singleBasketButton(id, id2){
    let button = document.getElementById(id);
    let button2 = document.getElementById(id2);
    button.style.backgroundColor = "#FFFFFF"; 
    button.style.boxShadow = "black 0px 0px 20px -10px";
    button2.style.backgroundColor = "#ffeac4";
    button2.style.boxShadow = "none";
}