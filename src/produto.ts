class Produto {
    public nome: string;
    public preco: number;
    public quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorTotal() : number {
        return this.preco * this.quantidade;
    }

    public exibirDetalhes() : void {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor Total: R$ ${this.calcularValorTotal()}`);
    }
}