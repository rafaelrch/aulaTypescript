export {}

class Produto{
    private _preco: number;

    /**
     *
     */
    constructor(_preco: number) {
        this._preco = _preco;
    };

    public get getPreco() {
        return this._preco
    };

    public set setPreco(setPreco: number){
        if(setPreco < 0){
            this._preco = 0;
        }else{
            this._preco = setPreco;
        }
    };

    exibirInfo(){
        return `R$${this._preco}`
    }

}

const produto = new Produto(30);
console.log('Preço atual:', produto.exibirInfo())
produto.setPreco = 50;
console.log('Preço atualizado:', produto.exibirInfo())

