import { useRouter } from 'expo-router';
import React from 'react';
import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';

const Action = () =>{
  
}

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
  justify-content: flex-end;
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

export const Mask = styled(MaskInput)`
  width: 300px;
 
  
  margin: 5px;
  
  font-size: 35px;
  text-decoration: none;
  text-align: center;

`; 
export const Label = styled.Text`
  font-size: 18px;
  border-bottom:1px;
`;

const Wrapper = styled.View`

   justify-content: center;
  align-items: center;
  padding: 10px;
 
`;

export default function Parcela() {
  const router = useRouter();
  const [Data, setData] = React.useState('');
  return (
  <>
        <Container>
        <Wrapper>
      
     <Mask
      value={Data}
      onChangeText={(masked, unmasked) => {
        setData(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      keyboardType="numeric" 
      placeholder="05/05/2005" 
    />  
    <Label>
        Data do Vencimento
    </Label>
    </Wrapper>
   
    </Container>
    <NumericKeyboard
        onKeyPress={Action}
        onDelete={Action}
        onConfirm={Action}
      />
    </>
  );
}

