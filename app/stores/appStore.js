// AppStore.js
import { differenceInDays, isValid } from 'date-fns';
import { makeAutoObservable } from 'mobx';


class AppStore {
  // Estado Observable
  username = "Convidado";
  counter = 0;
  multa = 0
  mora = 0
  _dtPayment = ''
  _docValue = 0
  _parcelas = []

  constructor( mora = 0.8 , multa = 0.02) {
    // makeAutoObservable transforma as propriedades em observáveis
    // e os métodos em ações automaticamente (MobX 6+)
    makeAutoObservable(this)
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

  set docValue(value){
      this._docValue = value
  }

  get docValue(){
      return this._docValue
  }

  dias(vencimento) {
    if (!isValid(vencimento)) return
    return differenceInDays(this._dtPayment, vencimento)
  }

  addParcela(vencimento) {
    let dias = this.dias(vencimento)

    if (dias < 0) return

    let multa = 0
    let permanencia =  0
    let total = 0

    multa = this._docValue * this.multa;
    permanencia = this.mora * dias
    total =  this.valorOriginal + multa + permanencia;
  
    const registro = {
        vencimento: vencimento,
        multa: +multa.toFixed(2),
        permanencia: +permanencia.toFixed(2),
        total: +total.toFixed(2),
        diasAtraso: dias
    };

    this._parcelas.push(registro);
    }

  get parcelas() {
  return this._parcelas;
  }

  get total(){
    const total = this._parcelas.reduce((a, parcela) => {
        return a + parcela.total;
      }, 0); // 0 é o valorInicial
      
    return +total.toFixed(2)
}

  // Ações (Actions) - Modificam o estado
  setUsername(newUsername) {
    this.username = newUsername;
  }

  incrementCounter = () => {
    this.counter += 1;
  }

  // Computed Value (Valor calculado automaticamente)
  get counterInfo() {
    return `${this.username} clicou ${this.counter} vezes`;
  }
}

// Exporta uma única instância (Singleton)
export const appStore = new AppStore();
