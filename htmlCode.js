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
            console.log(counter);
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
        <button class="singleMenuButton material-symbols-outlined">
            add
        </button>
    </div>
    `;
    
    return htmlCode;
}