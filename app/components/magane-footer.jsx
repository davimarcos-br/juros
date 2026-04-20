
import { observer } from 'mobx-react-lite';

import React from 'react';
import styled from 'styled-components/native';
import { appStore } from '../stores/appStore';


const Container = styled.View`
  flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    
`;


const Texto = styled.Text`
font-size: 25px;
font-weight: bold;
color: #ff0000;
width: 100%;
text-align: right
`;


const Label = styled.Text`
    font-size: 16px;  
    color: #200c7b;
    width: 100%;
    text-align: right;
`;
const Separador = styled.View`
    height: 1;
    width: '100%';    
    background: #CED0CE;
`;

  
const Footer = observer(() => {
    return (
        // Dentro do seu componente/render
        <>
        <Container>
          <Label>Valor Total</Label>
          
          <Texto>{appStore.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</Texto>
          
        </ Container>
       
        </>
        
    )
})


export default Footer;