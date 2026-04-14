import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { global } from './stores/global';
import { Btn, BtnScreem, TextButton } from './styles/global';


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

export default function DatePay() {
  const router = useRouter();

  const date = new Date();
  
  const [Data, setData] = React.useState(date.toLocaleDateString('en-GB'));

  const handleKeyPress = (key: string) => {
    setData(prev => prev + key);
  };

  const handleDelete = () => {
    setData(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setData('');
  };

  const actionBtn = () => {
    global.dtPagamento = Data
    router.push('/valorReal')
  }

  return (
  <>
  <Stack.Screen
        options={{
          title: 'Data do pagamento',
          headerTitleAlign: 'center',
  
           headerLeft: () => (
            <BtnScreem 
              onPress={() => router.push('/home')}>
              <Ionicons name="arrow-back" size={25} />
            </BtnScreem>
          ),
        }}
      />
        <Container>
        <Wrapper>
        <Label>
            Previsão do pagamento
        </Label>
      
     <Mask
      value={Data}
      onChangeText={(masked, unmasked) => {
        setData(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={Masks.DATE_DDMMYYYY}
      placeholder="dd/mm/aaaa"
      underlineColorAndroid="transparent" 
    />  
    </Wrapper>
    <HorizontalRule/>
    </Container>
    
    <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
    />
    <ContainerBtns>
      <Btn onPress={actionBtn}>
        <TextButton>Avançar</TextButton>
      </Btn>
    </ContainerBtns>
    </>
  );
}

