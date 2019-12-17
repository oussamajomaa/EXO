// class Personnage {
//     constructor(nom, sante, force) {
//       this.nom = nom;
//       this.sante = sante;
//       this.force = force;
//       this.xp = 0; // Toujours 0 au début
//     }
//     // Attaque une cible
//     attaquer(cible) {
//       if (this.sante > 0) {
//         const degats = this.force;
//         console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`);
//         cible.sante -= degats;

//         if (cible.sante > 0) {
//           console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
//         } else {
//           cible.sante = 0;
//           const bonusXP = 10;
//           console.log(`${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience`);
//           this.xp += bonusXP;
//         }

//       } else {
//         console.log(`${this.nom} n'a plus de points de vie et ne pas pas attaquer`);
//       }

//     }

//     // Renvoie la description du personnage
//     decrire() {
//       return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`;
//     }
//   }



class Rectangle {
  constructor(hauteur, largeur) {
    this.name = 'Rectangle';
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  coucou(){
    console.log('Coucou, je suis un ' + this.name + '.');
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set aire(valeur) {
    this.hauteur = Math.sqrt(valeur);
    this.largeur = Math.sqrt(valeur);
  }
}

class Carré extends Rectangle {
  constructor(longueur) 
{

    // Ici, on appelle le constructeur de Rectangle
    // qui est l'objet « parent » de Carré
    super(longueur,longueur);


    // Pour les classes dérivées, super() doit être appelé
    // avant d'utiliser 'this' sinon cela entraînera une 
    // exception ReferenceError.
    this.name = 'Carré';
    
  }
}