import { format, parse } from 'date-fns';

import { MaskedText } from "react-native-mask-text";


import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { appStore } from './stores/appStore';
import { Btn, BtnScreem, TextButton } from './styles/global';

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


export default function DateAdd(){
  return(<Component />)
} 
  

export const Component = observer(() => {
  const router = useRouter();
   
  const [valid, setValid] = useState(false)
  const [digit, setDigit] = useState(true)

  const [data, setData] = useState(format(new Date(), formatString));
  const handleKeyPress = (key: string) => {
    setData(prev => prev + key);
  };
  
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
    appStore.dtPayment= parse(data, formatString, new Date());
    console.log(format(appStore.dtPayment, 'dd/MM/yyyy'))
    //appStore.dtPayment =  parse(Data, 'dd/mm/yyyy', new Date()) 
    //console.log(format(appStore.dtPayment, 'dd/mm/yyyy'))
    router.push('/valorReal1')
  };

  
  return (
  <>
  <Stack.Screen
        options={{
          title: 'Vencimento do documento',
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
     
        <MaskedText  mask="99/99/9999">
        {data}
        </MaskedText>  
    
    </Wrapper>
    <HorizontalRule/>
    </Container>
    
    <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
    />
    <ContainerBtns>
      <Btn disabled={!valid} onPress={handleAction}>
        <TextButton>{appStore.counterInfo}</TextButton>
      </Btn>
    </ContainerBtns>
    </>
  );
})

