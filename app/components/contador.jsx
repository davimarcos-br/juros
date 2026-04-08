import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import styled from 'styled-components/native';
  const BtnConteiner = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 20px 1px;
    border-radius: 10px;
    margin-top:5px ;
    border: 1px solid #000;
  
  `

  const Label = styled.Text`
  font-size: 18px;

`;
  const Separador = styled.View`
  height: 50px;
   
  `;

const Contador = () => {
  // Define o estado inicial como 0
  const [contador, setContador] = useState(0);

  // Função para incrementar
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para decrementar (opcional)
  const decrementar = () => {
    setContador(contador - 1);
  };


  return (
    <>
        <Separador />
        <Label>
            Número de parcelas 
        </Label>
  
        <BtnConteiner>
            <Pressable style={styles.btn}  onPress={decrementar}>
                <Ionicons name="remove" size={40} color={'#000'} />
            </Pressable>
            <Text style={styles.texto}>{contador}</Text>
            <Pressable  onPress={incrementar}>
                <Ionicons name="add" size={40} color={'#000'} />
            </Pressable>
        </BtnConteiner>
   </>
  );
};

const styles = StyleSheet.create({
 
  texto: {
    fontSize: 40,
    paddingHorizontal: 25,
    paddingTop: 5,
    paddingBottom: 10,
    },

  botoesContainer: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 1, 
    border:1,
    borderColor: '#FFF'
    },
});

export default Contador;
