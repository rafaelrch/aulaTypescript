export{}

class ContaBancaria {
    private _titular: string;
    private _saldo: number;


    constructor(_titular: string, _saldo: number) {
        this._titular = _titular;
        this._saldo = _saldo;
    }

    public get saldo(){
        return this._saldo;
    }

    private set saldo(valor: number){
        if(valor !== this._saldo){
            this._saldo = valor;
            console.log(`Saldo atualizado: R$${this._saldo}`)
        }
    }

    depositar(valor: number): boolean{
        if(valor <= 0){
            console.log("Deposito inválido")
            return false
        }

        this.saldo = this._saldo + valor;
        return true
    }

    sacar(valor: number): boolean{
        if(valor > this._saldo ){
            console.log('Valor insuficiente')
            return false
        }else{
            this.saldo = this._saldo - valor;
            return true
        }
    }
}

const conta = new ContaBancaria('Rafael', 3000);
console.log('Saldo: ', conta.saldo);

conta.depositar(500);
conta.sacar(200)

console.log('Novo saldo: ', conta.saldo);

conta.sacar(3000)
console.log('Novo saldo: ', conta.saldo);

// 2

console.log("----------------------")

class Carro{
    public modelo: string;
    private _velocidade: number;


    constructor(modelo: string, _velocidade: number) {
        this._velocidade =_velocidade;
        this.modelo = modelo;
        
    }

    public get velocidade(){
        return this._velocidade;
    }

    public set velocidade(setVelocidade: number){
        if(setVelocidade >= 200){
            console.log('Vc atingiu a velocidade maxima de 200km/h')
        }else {
            this._velocidade += setVelocidade;
        }
    }

    acelerar(valor: number){

        if(valor <= 0){
            console.log("Valor de aceleracao invalido")
        }
        this.velocidade = this._velocidade + valor;

    }

    frear(valor: number){
        if(valor <= 0){
            console.log("Valor de feragem invalido")
        }
        this.velocidade = this._velocidade - valor;
    }
}

const carro = new Carro('Ferrari', 100);
console.log("Velocidade atual: ", carro.velocidade,"km/h")

console.log("Acelerando... ")
carro.acelerar(100);

console.log("Freando... ")
carro.frear(20);
console.log("Velocidade atual: ", carro.velocidade,"km/h")

console.log("Acelerando... ")
carro.velocidade = 20;
console.log("Velocidade atual:", carro.velocidade, "km/h")


