function chooseMenusHtmlCode(singleMenus, i, headlines, counter, headlineImgs) {
    let htmlCode = ``;
    if (i % 2 === 0) {
        htmlCode += /*html */ `
            <img class="headlineImgs" src="${headlineImgs[`img_${counter}`]}" alt="">
        `;  
}
    if (i % 2 === 0) {
            htmlCode += /*html */ `
                <h2 class="menuHedlines" >${headlines[`headline_${counter}`]}</h2>
            `;  
    }
    htmlCode += /*html */ `
    <div class="singleMenu">
        <div>
            <div class="headlineSingleMenu">
                <h3>${singleMenus[`name`]}</h3>
                <span class="material-symbols-outlined">
                    info
                </span>
            </div>
            <span>${singleMenus[`order`]}</span>
            <h3>${singleMenus[`price`]}</h3>
        </div>
        <span style="font-size: 30px; background: #ffeac4; border-radius: 50%; padding: 10px" class="material-symbols-outlined">
            add
        </span>
    </div>
    `;
    
    return htmlCode;
}