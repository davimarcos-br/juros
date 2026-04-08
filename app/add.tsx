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
  padding: 0 20px ;
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
  margin-bottom: 20px;
`;

const Wrapper = styled.View`

   justify-content: center;
  align-items: center;
  padding: 10px;
 
`;

export const HorizontalRule = styled.View`
  height: 1px;
  width: 60%;
  background-color: #ccc;
  margin: 0 auto
  
`;

export default function Parcela() {
  const router = useRouter();
  const [Data, setData] = React.useState('');
  return (
  <>
        <Container>
        <Wrapper>
        <Label>
            Data do Vencimento
        </Label>
      
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
    </Wrapper>
    <HorizontalRule/>
    </Container>
    
    <NumericKeyboard
        onKeyPress={Action}
        onDelete={Action}
        onConfirm={Action}
      />
    </>
  );
}

