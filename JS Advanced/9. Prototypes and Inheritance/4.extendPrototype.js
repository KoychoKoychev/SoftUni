function extend(clas){
    Object.defineProperty(clas.prototype,"species",{
        value:"Human"
    })
    Object.defineProperty(clas.prototype,"toSpeciesString",{
      value: function(){
          return `I am a ${this.species}. ${this.toString()}`;
      }  
    })
    return clas;
}

class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

extend(Person);

const me = new Person("ivan","ivan@abv.bg");
console.log(me.species);
console.log(me.toSpeciesString());
