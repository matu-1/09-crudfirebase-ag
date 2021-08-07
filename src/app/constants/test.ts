
class Animal {
  nombre?: string;
  isVivo: boolean;

  constructor(){
    this.isVivo = true;
  }
}

const an = new Animal();

function imprimir(animal: Animal){
  console.log(animal);
}

imprimir({isVivo: true});

imprimir(an);