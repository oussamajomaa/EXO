

// fetch('js/data/menu.json')
// .then(response=>response.json())
// .


fetch("data/menu.json")
    .then( (res) => {
        res.json()
        .then( (data) => {
            console.log(data);
            
        })
    })



