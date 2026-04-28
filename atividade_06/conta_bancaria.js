class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    
    verSaldo() {
        console.log(`
            Olá ${this.titular}, 
            seu saldo atual é R$ ${this.saldo}`)
    }

    depositar(valor) {
        this.saldo += valor;
    }

    // criar o método sacar e sacar 100 da sua conta
    sacar(valor) {
        this.saldo -= valor;
    }
}

let contaDaJulia = new ContaBancaria("Julia", 15000)
contaDaJulia.verSaldo() //15000
contaDaJulia.depositar(350)
contaDaJulia.verSaldo() //15350
contaDaJulia.sacar(100)
contaDaJulia.verSaldo() //15250

let contaDaLuiz = new ContaBancaria("Luiz", 1)
contaDaLuiz.verSaldo()  
