
let title = document.createElement('p');
title.textContent = 'GAME OF THRONE, les maisons, les personnages';
document.body.appendChild(title);

fetch('got.json')
    .then(response => response.json())

    .then(data => {
        data.forEach(el => {
            let got = new GameOfThrown(el.nom, el.wikiSuffix, el.gens, el.name, el.description, el.image, el.wikiSuffix);
        });
    })
    .catch(err => console.log("le fichier n'existe pas"));


// $.getJSON('got.json', (data) => {

//     data.forEach(el => {

//         let got = new GameOfThrown(el.nom, el.wikiSuffix, el.gens, el.name, el.description, el.image, el.wikiSuffix);
//     });
// });


