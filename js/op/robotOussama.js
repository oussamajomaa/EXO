class Robot{
    constructor(colorBody,colorOrgan,tire,hands,eye,ressort,hears){
        this.colorBody=colorBody;
        this.colorOrgan=colorOrgan;
        this.tire=tire;
        this.hands=hands;
        this.eye=eye;
        this.ressort=ressort;
        this.hears=hears;
    }
    marcher(){
        console.log('je peux marcher');
    };
    tenir(){
        console.log('je peux tenir les choses');
    };
    parler(){
        console.log('je peux parler');
    }
    sauterBody(){
        console.log('mon corps saute')
    }

}