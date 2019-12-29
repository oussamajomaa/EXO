
// sélectionner les listes
let ulLi = $('ul li');
let page= $('#page');

for (let i = 0; i < ulLi.length; i++) {
    //en cliquant sur le li il va télécharger la page html demandée
    $(ulLi[i]).click(() => {
        if (i == 0) {

            $.get("../html/accueil.html",(data,status)=>{
                page.html(data);
                console.log(status);
            });
            // page.load("../html/accueil.html");
        }
        if (i == 1) {
            $.get("../html/page1.html",(data)=>{
                page.html(data);
            });
            // page.load("../html/page1.html");
        }
        if (i == 2) {
            $.get("../html/page2.html",(data)=>{
                page.html(data);
            });
            // page.load("../html/page2.html");
        }
    });
};


