import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { appStore } from './stores/appStore';

export const Btn = styled.TouchableOpacity`
  width: 80%;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  border: 1px solid #000;
  margin: 5px;
`;

// Cria o texto estilizado
export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;


export const Container = styled.View`
  flex: 1;
  background-color: #ececec;
  justify-content: center;
  align-items: center;
  padding: 20px;
`; 
export const ContainerBtns = styled.View`
  background: #FFF;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 -1px 0  rgba(0, 0, 0, 0.1) ;
`; 

export default function Manage() {
  return (<Component />)
}

const Component = observer(() => {
  const router = useRouter();
  console.table(appStore.parcelas)

  const renderParcela = () => (
    <Text>teste</Text>
  );

  return (
  <>
    <Container>
      // Dentro do seu componente/render
<FlatList 
  data={appStore.parcelas} 
  renderItem={renderParcela} 
  keyExtractor={(item) => item.id.toString()} // Se houver, use o id
/>  
    </Container>
    <ContainerBtns>
       <Btn>
        <TextButton>Compartilhar...</TextButton>
       </Btn>
    </ContainerBtns>
    </>
  );
})

