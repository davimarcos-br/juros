import { isAfter, isValid, parse } from 'date-fns';


import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { appStore } from './stores/appStore';
import { Btn, BtnScreem, ErroMsg, Masked, Placeholder, TextButton } from './styles/global';

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


export default function DateAdd() {
  return (<Component />)
}


export const Component = observer(() => {
  const router = useRouter();

  const [valid, setValid] = useState(true)
  const [digit, setDigit] = useState(true)

  const [data, setData] = useState('');
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
    setValid(isValid(parse(data, formatString, new Date())))
    if (!valid) return

    const dt = parse(data, formatString, new Date())
    if (isAfter(appStore.dtPayment, dt)) {
      appStore.addParcela(dt)
      appStore.created()
      router.push('/manage')

    } else setValid(false)


  };

  const handleHeader = () => {
          return appStore.status === 'Creating'?
          (<BtnScreem
              onPress={() => router.push('/home')}
            >
              <Ionicons name="close-outline" size={25} />
            </BtnScreem>
          ):
          (<BtnScreem
              onPress={() => router.push('/manage')}
            >
              <Ionicons name="arrow-back" size={25} />
            </BtnScreem>
          )
        }
    
  

  const isDisabled = data.length !== 8;
  const isPlaceholderVisible = data == '';

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vencimento do documento',
          headerTitleAlign: 'center',

          headerLeft: handleHeader
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
          {isPlaceholderVisible ?
            <Placeholder>DD/MM/AAAA</Placeholder>
            :
            <Masked mask="99/99/9999">
              {data}
            </Masked>}

        </Wrapper>
        <HorizontalRule />
      </Container>

      <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
      />
      <ContainerBtns>
        <Btn disabled={isDisabled} onPress={handleAction}>
          <TextButton>Concluir</TextButton>
        </Btn>
      </ContainerBtns>
    </>
  );
})

