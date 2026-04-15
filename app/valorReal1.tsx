import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import MaskInput from 'react-native-mask-input';
import { MaskedText } from 'react-native-mask-text';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { appStore } from './stores/appStore';
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
  background-color: rgb(204, 204, 204);
  margin: 0 auto
`;

export default function ValorReal1(){
  return(<Component />)
} 

const Component = () => {
  const router = useRouter();
   
  const [valid, setValid] = useState(false)
  const [digit, setDigit] = useState(true)
  
  
  const [Valor, setValor] = React.useState(0);

  const handleKeyPress = (key: string) => {
    setValor(prev => prev + key);
  };

  const handleDelete = () => {
    setValor(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setValor(0);
  };
  
  const handleAction = () => {
      //const valeu = +Valor/100
      appStore._amount= (+Valor/100).toFixed(2);
      console.log(appStore._amount)
      //appStore.dtPayment =  parse(Data, 'dd/mm/yyyy', new Date()) 
      //console.log(format(appStore.dtPayment, 'dd/mm/yyyy'))
      router.push('/dateAdd1')
    };
  
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Valor do Documento',
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
             
          </Label>
             <MaskedText type="currency"
  options={{
    prefix: 'R$',
    decimalSeparator: ',',
    groupSeparator: '.',
    precision: 2,
  }}
>
  {Valor}
</MaskedText> 
            
        </Wrapper>
        <HorizontalRule />
      </Container>

      <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
      />
      <ContainerBtns>
              <Btn  onPress={handleAction}>
                <TextButton>{appStore.dtPayment.toString()}</TextButton>
              </Btn>
        
      </ContainerBtns>
    </>
  );
}

