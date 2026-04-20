import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { FlatList, StyleSheet } from 'react-native';
import { appStore } from '../stores/appStore';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 5px;


  
`;

const Parcela = styled.View`
    
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;
    padding: 6px 15px;
    
    
    border-radius: 10px;
    
    

`;

const Valor = styled.Text`
width: 80%;
font-size: 25px;
font-weight: bold;
color: black;
`;

const Vencimento = styled.Text`
    font-size: 14px;  
    color: #290491;
    padding: 5px 20px;
    justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #FFF;
  margin-top: 10px;
  border: #797481 1px solid;
  
`;

const Separador = styled.View`
    height: 1;
    width: '100%';
    
    background: #CED0CE;
`;
  

const ItemSeparator = () => (
<Separador /> );

const DeleteButton = styled.TouchableOpacity`
    //background-color: #c0bcc5;   
    padding: 7px 10px;
    border-radius: 5px;
`

const Texto = styled.Text`
  color: white;
    
    font-size: 14px;  
    color: #290491;
    
`;
  


const renderParcela = ({ item, index }) => (
    <Texto>{format(item.vencimento, 'dd/MM/yyyy')}  {index}  </Texto>
);



const Lista = observer(() => {
    const parcelas = appStore.parcelas.map(parcela => parcela.toString())
    console.log('renderizando lista')
    console.log(parcelas)

    const renderItem = ({ item }) => (
        <Parcela>
            <Valor>{item.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</Valor>
            
            <DeleteButton onPress={() => console.log('Deletar parcela')}>     
             <Ionicons name="trash-outline" size={20} />
            </DeleteButton> 
            <Vencimento>{format(item.vencimento, 'dd/MM/yyyy')}</Vencimento>
            <Texto>Dias({item.diasAtraso})</Texto>
            <Texto>Juros({(item.permanencia+item.multa).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })})</Texto>
        </Parcela>
    );

    return (
        // Dentro do seu componente/render
        <Container>
        <FlatList
            data={appStore.parcelas}
            renderItem={renderItem}
            keyExtractor={(item, index) => +index} // Se houver, use o id
            ItemSeparatorComponent={ItemSeparator}
        />
        </ Container>
    )
})

//styles para o componente
const styles = StyleSheet.create({
  container: { flex: 1,paddingTop: 50 },
  card: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    border: '1px solid #fff',

    // Sombra para iOS 
  },
  info: { flex: 1 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  detalhes: { fontSize: 14, color: '#666', marginVertical: 4 },
  valor: { fontSize: 16, fontWeight: 'bold', color: '#2ecc71' },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 3,
  },
  deleteText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
});

export default Lista;