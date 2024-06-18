const main_URL = 'https://remotestorage-6b5e2-default-rtdb.europe-west1.firebasedatabase.app/'
const array = [];

function init() {
    loadData();
}

async function loadData() {
    let response = await fetch(main_URL + '.json');
    let responseToJson = await response.json();
    array.push(responseToJson);
}