import { observer } from 'mobx-react-lite';

import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components/native';
import { appStore } from '../stores/appStore';


const Container = styled.View`
  flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;
    padding: 6px 15px;
    border-radius: 10px;
`;


const Texto = styled.Text`
font-size: 20px;
font-weight: bold;
color: black;
`;


const Label = styled.Text`
    font-size: 14px;  
    color: #200c7b;
`;
const Separador = styled.View`
    height: 1;
    width: '100%';    
    background: #CED0CE;
`;

  
const Header = observer(() => {
    return (
        // Dentro do seu componente/render
        <>
        <Container>
          <Label>Previsão do pagamento</Label>
          <Label>Valor do documento</Label>
          <Texto>{appStore.dtPayment ? format(appStore.dtPayment, 'dd/MM/yyyy') : ''}</Texto>
          <Texto>{appStore.docValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</Texto>
          
        </ Container>
       
        </>
        
    )
})


export default Header;