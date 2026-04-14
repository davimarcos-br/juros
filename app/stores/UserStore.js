// stores/UserStore.js
import { makeAutoObservable } from 'mobx';

class UserStore {
  // Propriedade observável
  name = 'Usuário Convidado';

  constructor() {
    // Torna 'name' reativo e métodos actions automaticamente
    makeAutoObservable(this);
  }

  // Ação para alterar o valor
  setName(newName) {
    this.name = newName;
  }
}

// Exporta uma única instância (Singleton)
export const userStore = new UserStore();
