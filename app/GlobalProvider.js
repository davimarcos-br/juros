import React, { createContext, useContext, useState } from 'react';

class ClasseGlobal {
  constructor() {
    this.value = 0;
  }
}

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Inicializa o estado com uma nova instância se necessário, 
  // ou usa uma existente
  const [instancia] = useState(new ClasseGlobal()); 

  return (
    <GlobalContext.Provider value={instancia}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);