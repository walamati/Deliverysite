const main_URL = 'https://remotestorage-6b5e2-default-rtdb.europe-west1.firebasedatabase.app/'

function init() {
    loadData();
}

async function loadData() {
    let response = await fetch(main_URL + '.json');
    let responseToJson = await response.json();
    render(responseToJson);
}

function render(responseToJson) {
    console.log(responseToJson['menu_1-0']);
}