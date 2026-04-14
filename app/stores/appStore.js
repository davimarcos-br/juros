// AppStore.js
import { makeAutoObservable } from 'mobx';

class AppStore {
  // Estado Observable
  username = "Convidado";
  counter = 0;
  multa = 0
  mora = 0
  _dtPayment = null
  _amount = 0

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
