

let xhr = new XMLHttpRequest();

xhr.open('GET', 'fromage.json');

// xhr.responseType = 'json';


xhr.addEventListener('load', () => {

    let reponse = xhr.response;
     reponse = JSON.parse(xhr.response);

    reponse.forEach(el => {

        fromages = new Fromage(el.nom, el.type, el.pays, el.classement);

        // fromages.afficherFromage(); // Sinon exécuter directement dans le constructeur à chaque déclaration de nouvel objet Fromage
    });
})

xhr.send();



