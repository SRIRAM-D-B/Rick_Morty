let getDetails = (num) => {
    for(let i=0;i<=num;i++) {
        const url = `https://rickandmortyapi.com/api/character/${i}`;
        fetch(url).then((initialInfo) => {
            initialInfo.json().then((object) => {
                console.log(object);
            })
        })
    }
}