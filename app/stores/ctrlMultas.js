import { makeAutoObservable } from 'mobx';

class CtrlMultasStore {
    historicoMultas = []
    _valorOriginal = 0
    constructor(mora = 0.8 , multa = 0.02) { // 2% padrão
        makeAutoObservable(this);
        this.multa = multa
        this.mora = mora
        this._dtPayment = new Date()   
    }

    set dtPayment(dtPayment){
        this._dtPayment = dtPayment
    }

    get dtPayment(){
        return this._dtPayment
    }

    set valorOriginal(valorOriginal){
        this._valorOriginal = valorOriginal 
    }

    diasCorridos(vencimento) {
        const d1 = vencimento
        const d2 = this.dataBase;
        
        // Define ambas as datas para o início do dia (00:00:00)
        d1.setHours(0,0,0,0);
        d2.setHours(0,0,0,0);
      
        const milissegundosPorDia = 24 * 60 * 60 * 1000;
        
        // Math.abs garante que o resultado seja positivo, independente da ordem
        let dias = Math.abs(Math.round((d2 - d1) / milissegundosPorDia)) - 1;
        
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

        if (this.dataBase > vencimento) {
            multa = this.valorOriginal * this.multa;
            permanencia = this.mora * dias
            total =  this.valorOriginal + multa + permanencia;
        }

        const registro = {
            vencimento: vencimento.toLocaleDateString('pt-BR'),
            multa: +multa.toFixed(2),
            permanencia: +permanencia.toFixed(2),
            total: +total.toFixed(2),
            diasAtraso: dias
        };

        this.historicoMultas.push(registro);
    }

    get historico() {
        return this.historicoMultas;
    }

    get total(){
        const total = this.historicoMultas.reduce((a, parcela) => {
            return a + parcela.total;
          }, 0); // 0 é o valorInicial
          
        return +total.toFixed(2)
    }
}


export const ctrlMultasStore = new CtrlMultasStore();