const main_URL = 'https://remotestorage-6b5e2-default-rtdb.europe-west1.firebasedatabase.app/'

let chooseOfferButton = -1;
function init() {
    loadData();
}

async function loadData() {
    let response = await fetch(main_URL + '.json');
    let responseToJson = await response.json();
    render(responseToJson);
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