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
    displayInfo();
}

let displayInfo = () => {
    let info = JSON.parse(localStorage.getItem('Characters'));
    console.log(info);
    let display = info.map(object => {
        return `<br><div>Name : ${object.name}</div>
        <div>status : ${object.status}</div>
        <div>gender : ${object.gender}</div>
        <div>species : ${object.species}</div>`
    }).join('');
    document.querySelector('.display_container').innerHTML = display;
}
