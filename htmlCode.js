function chooseMenusHtmlCode(singleMenus, i, headlines, counter, headlineImgs) {
    let htmlCode = ``;
    if (i % 2 === 0) {
        htmlCode += /*html */ `
            <img class="headlineImgs" src="${headlineImgs[`img_${counter}`]}" alt="">
        `;  
}
    if (i % 2 === 0) {
            htmlCode += /*html */ `
                <h2 class="menuHedlines" id="section${counter}">${headlines[`headline_${counter}`]}</h2>
            `;  
    }
    htmlCode += /*html */ `
    <div class="singleMenu">
        <div>
            <div class="headlineSingleMenu">
                <h3>${singleMenus[`name`]}</h3>
                <button class="singleMenuInfoButton material-symbols-outlined">
                    info
                </button>
            </div>
            <span>${singleMenus[`order`]}</span>
            <h3>${singleMenus[`price`]}</h3>
        </div>
        <button onclick="chooseSingleMenu(${i})" class="singleMenuButton material-symbols-outlined">
            add
        </button>
    </div>
    `;
    return htmlCode;
}
function finalSingleChooseHtmlCode(i, firstResponse) {
    let htmlCode = /*html */ `
    <div class="singleCard">
        <div class="singleCardHeadline">
            <h2>${firstResponse[`menu_1-${i}`][`name`]}</h2>
            <button onclick="closeSingleCard()" class="material-symbols-outlined">close</button>
        </div>
        <div class="finalSingleChooseContent">
            <img src="${firstResponse[`menu_1-${i}`][`img`]}" alt="">
            <div class="singleCardText">
                <div>${firstResponse[`menu_1-${i}`][`order`]}</div>
                <div>${firstResponse[`menu_1-${i}`][`supplement`]}</div>
            </div>
        </div>
        <div class="singleCardPriceContainer">
            <button onclick="amountAdd('menu_1-${i}')" class="amountAdd material-symbols-outlined">add</button>
            <div>${firstResponse[`menu_1-${i}`][`amount`]}</div>
            <button onclick="amountRemove('menu_1-${i}')" class="amountRemove material-symbols-outlined">remove</button>
            <button onclick="chooseInBasket('menu_1-${i}')" class="priceButton">${firstResponse[`menu_1-${i}`][`price`]}</button>
        </div>
        
    </div>
    `;
    return htmlCode;
}

function pretextHtmlCode() {
    let htmlCode = /*html */ `
    `;
    return htmlCode;
}

function inBasketHtmlCode(menu) {
    let htmlCode = `hallo`;
    return htmlCode;
}