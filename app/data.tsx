import { format, isValid, parse } from 'date-fns';



import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { appStore } from './stores/appStore';
import { Btn, BtnScreem, Masked, TextButton } from './styles/global';

const formatString = "ddMMyyyy";


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

 
export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ErroMsg = styled.Text`
  
  font-size: 14px;
  color: red;
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


export default function DatePay1(){
  return(<Component />)
} 
  

const Component = observer(() => {
  const router = useRouter();
   
  const [valid, setValid] = useState(true)
  const [digit, setDigit] = useState(true)

  const [data, setData] = useState(format(new Date(), formatString));
  const handleKeyPress = (key: string) => {
    if (!isDisabled) return
    //setValid(isValid(parse(data, formatString, new Date())))
    setData(prev => prev + key);
  };



  const isDisabled = data.length !== 8;  
  
  const handleDelete = () => {
    setData(prev => prev.slice(0, -1));
    setValid(true)
    setDigit(true)
  };
  const handleClear = () => {
    setData('');
    setValid(true)
    setDigit(true)
  };

  const handleAction = () => {
      setValid(isValid(parse(data, formatString, new Date())))
      if (!valid)return

        appStore.dtPayment =  parse(data, formatString, new Date()) 
        //console.log(format(appStore.dtPayment, 'dd/mm/yyyy'))   
        router.push('/valor')


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
              <Ionicons name="close-outline" size={25} />
            </BtnScreem>
          ),
        }}
      />
        <Container>
        <Wrapper>
        <Label>
          
        </Label>
     
      {!valid && (
        <ErroMsg>
          Por favor, insira uma data válida.
        </ErroMsg>
      )}
        
        <Masked  mask="99/99/9999">
        {data}
        </Masked>  
    
    </Wrapper>
    <HorizontalRule/>
    </Container>
    
    <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
    />
    <ContainerBtns>
      <Btn disabled={isDisabled} onPress={handleAction}>
        <TextButton>Avançar</TextButton>
      </Btn>
    </ContainerBtns>
    </>
  );
})

