class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`a ${this.nome} está ronronando`)
    }
}
class Cachorro extends Animal {
    abanarRabo() {
        console.log(`a ${this.nome} está feliz`)
    }
}

let miya = new Gato("Miya");
let pandora = new Cachorro("Pandora");

miya.falar("Miau!");
miya.ronronar();
pandora.falar("Au Au!");
pandora.abanarRabo();

// criar uma classe de outro animal de estimação
// cobra,calopsita, Hamster, etc...
// tem que estender Animal e ter um método próprio

class Ovelha extends Animal {
    pularCerca() {
        console.log(`a ${this.nome} está pulando a cerca`)
    }
}

let nuvem = new Ovelha("Nuvem")

nuvem.falar("Béeee!");
nuvem.pularCerca();
