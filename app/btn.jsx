// Envolva seu App com <GlobalProvider> no index.js ou App.js
const MeuBotao = () => {
    const servico = useGlobal();
    
    return (
      <Button 
        title="Modificar" 
        onPress={() => {
          servico.value += 1;
          console.log(servico.value);
        }} 
      />
    );
  };