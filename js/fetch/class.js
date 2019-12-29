class GameOfThrown {
    constructor(nom, wikiSuffix, gens, name, description, image, wiki) {
        this.nom = nom;
        this.gens = gens;
        this.name = name;
        this.description = description;
        this.image = image;
        this.wikiSuffix = wikiSuffix;
        this.wiki = wiki;
        this.affiche();
    }
    affiche() {

        let section =this.addElement('section','',document.body);
        let article = this.addElement('article','',document.body);
        let h1=this.addElement('h1',this.nom,section);
        let h2=this.addElement('h2',this.wikiSuffix,article);
        let btn=this.addElement('button','Click',section);

        for (let i = 0; i < this.gens.length; i++) {

            let div1=this.addElement('div','',article);
            let div2=this.addElement('div','',article);

            let img = document.createElement('img');
            img.src = this.gens[i].image;
            div1.appendChild(img);

            let h3 = this.addElement('h3',this.gens[i].nom,div2);
            let h4 = this.addElement('h4',this.gens[i].description,div2);
            let h5 = this.addElement('h5',this.gens[i].wikiSuffix,div2);
        }
        
        let bt = document.getElementsByTagName('button');
        let art = document.getElementsByTagName('article');

        for (let i = 0; i < art.length; i++) {
            $(art[i]).hide();
        }

        for (let i = 0; i < bt.length; i++) {
            bt[i].addEventListener('click', () => {
                $(art[i]).fadeIn('slow');
                // bt[i].innerText = '-'
                for (let j = 0; j < art.length; j++) {
                    if (j != i) {
                        $(art[j]).fadeOut();
                    }
                }
            });
        }

    }

    addElement(type, txt, target) {
        let el = document.createElement(type);
        if ((txt)&&(txt.length>0)){
            el.textContent = txt;
        }
        target.appendChild(el);
        return el;
    }

}


