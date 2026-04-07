class GerenciadorMultas {
    constructor(valorOriginal, dataBase = new Date(), mora = 0.8 , multa = 0.02) { // 2% padrão
        this.historicoMultas = []
        this.multa = multa
        this.mora = mora
        this.dataBase = dataBase
        this.valorOriginal = valorOriginal
    }

    diasCorridos(vencimento) {
        const d1 = vencimento
        const d2 = this.dataBase;
        
        // Define ambas as datas para o início do dia (00:00:00)
        d1.setHours(0,0,0,0);
        d2.setHours(0,0,0,0);
      
        const milissegundosPorDia = 24 * 60 * 60 * 1000;
        console.log(milissegundosPorDia)
        // Math.abs garante que o resultado seja positivo, independente da ordem
        let dias = Math.abs(Math.round((d2 - d1) / milissegundosPorDia)) - 1;
        console.log("Dias ",dias)
        return dias 
      }

    /**
     * Calcula e armazena a multa se a data atual for maior que o vencimento.
     */
    addParcela(dataVencimento) {
        const vencimento = new Date(dataVencimento);
        let dias = this.diasCorridos(vencimento)
        let multa = 0
        let permanencia =  0
        let total = 0

        console.log("perma", permanencia)
        console.log("mora", (this.mora* permanencia))
       
        if (this.dataBase > vencimento) {
            multa = this.valorOriginal * this.multa;
            permanencia = this.mora * dias
            total =  this.valorOriginal + multa + permanencia;
        }

        const registro = {
            vencimento: vencimento.toLocaleDateString('pt-BR'),
            multa: multa.toFixed(2),
            permanencia: permanencia.toFixed(2),
            totalAPagar: total.toFixed(2),
            diasAtraso: dias
        };

        this.historicoMultas.push(registro);
        console.log(registro)
        return registro;
    }

    getHistorico() {
        return this.historicoMultas;
    }
}

// --- Exemplo de Uso ---
const sistema = new GerenciadorMultas(2000); // Taxa de 5%

// Vencido
sistema.addParcela('2026-04-01')
// No prazo
sistema.addParcela('2025-10-05');

console.table(sistema.getHistorico())