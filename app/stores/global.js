class Global{
    constructor() {
    // Inicializa um objeto vazio para guardar os dados
        this.dtPagamento = null
        this.valor = null
        this.vencimento = null
    }
}

export const global = new Global()