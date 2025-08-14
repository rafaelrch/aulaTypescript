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

    depositar(valor: number){
        return this._saldo += valor;
    }

    sacar(valor: number){
        if(valor > this._saldo ){
            return 'Valor insuficiente'
        }else{
            return this._saldo -= valor
        }
    }
}

const conta = new ContaBancaria('Rafael', 2000);
console.log('Saldo: ', conta.saldo);

conta.depositar(500);
conta.sacar(200)

console.log('Novo saldo: ', conta.saldo);

conta.sacar(2500)
console.log('Novo saldo: ', conta.saldo);