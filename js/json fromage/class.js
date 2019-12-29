

class Fromage {
    constructor(nom, type, pays, classement) {
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
        this.afficherFromage()

    }
    afficherFromage() {
        // let article = document.createElement('article');
        // let nomFromage = document.createElement('h1');
        // let typeFromage = document.createElement('h2');
        // let paysfromage = document.createElement('h2');
        // let classementFromage = document.createElement('div');

        // nomFromage.innerText = this.nom;
        // typeFromage.innerText = this.type;
        // paysfromage.innerText = this.pays;
        // classementFromage.textContent=this.classement;
        
        // this.addStar(classementFromage);

        // article.appendChild(nomFromage);
        // article.appendChild(typeFromage);
        // article.appendChild(paysfromage);
        // article.appendChild(classementFromage);
        // document.body.appendChild(article);

        let article = document.createElement('article');
        article.setAttribute('class', 'fromage');
        document.body.appendChild(article);
        let nF = this.addElement('h1', this.nom, article);
        let tF = this.addElement('h2', this.type, article);
        let pF = this.addElement('h2', this.pays, article);
        let cF = this.addElement('div','', article);
        this.addStar(cF);
    }


    addStar(d) {
        for (let i = 0; i < this.classement; i++) {
            console.log(this.classement)
            let img = document.createElement('img');
            img.src = 'etoile.png';
            img.style.width = '10%';
            d.appendChild(img);
        }
        
    }
    addElement(type, txt, target) {
        let el = document.createElement(type);
        if (txt.length > 0) {
            el.textContent = txt;
        }
        target.appendChild(el);
        return el;
    }

}

