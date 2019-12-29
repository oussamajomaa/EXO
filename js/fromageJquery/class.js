

class Fromage {
    constructor(nom, type, pays, classement) {
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
        this.afficherFromage()

    }
    afficherFromage() {
        let article = document.createElement('article');
        article.setAttribute('class', 'fromage');
        document.body.appendChild(article);
        let nF = this.addElement('h1', this.nom, article);
        let tF = this.addElement('h2', this.type, article);
        let pF = this.addElement('h2', this.pays, article);
        let cF = this.addElement('div', '', article);
        this.addStar(cF);
    }


    addStar(d) {
        for (let i = 0; i < this.classement; i++) {
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

