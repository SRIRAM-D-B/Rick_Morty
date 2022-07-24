let locStr = [];
let getDetails = (num) => {
    document.querySelector(".total").value = "";
    for (let i = 1; i <= num; i++) {
        const url = `https://rickandmortyapi.com/api/character/${i}`;
        fetch(url).then((initialInfo) => {
            initialInfo.json().then((object) => {
                storeData(object);
            });
        });
    }
};

let storeData = (object) => {
    locStr.push(object);
    localStorage.setItem('Characters', JSON.stringify(locStr));
}
