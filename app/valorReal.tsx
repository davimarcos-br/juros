import { Ionicons } from '@expo/vector-icons';

import { Stack, useRouter } from 'expo-router';
import React from 'react';
import MaskInput, { createNumberMask } from 'react-native-mask-input';
import styled from 'styled-components/native';
import NumericKeyboard from './components/keyboard';
import { global } from './stores/global';
import { Btn, BtnScreem } from './styles/global';

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

export default function ValorReal() {
  const router = useRouter();

  const [Valor, setValor] = React.useState('');

  const handleKeyPress = (key: string) => {
    setValor(prev => prev + key);
  };

  const handleDelete = () => {
    setValor(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setValor('');
  };

  const realMask = createNumberMask({
    prefix: ['R', '$', ' '],
    separator: ',',
    delimiter: '.',
    precision: 2,
  });

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

          <Mask
            value={Valor}
            onChangeText={(masked, unmasked) => {
              setValor(masked); // you can use the unmasked value as well

              // assuming you typed "9" all the way:
              console.log(masked); // (99) 99999-9999
              console.log(unmasked); // 99999999999
            }}
            mask={realMask}
            keyboardType="numeric"
            placeholder="R$ 0,00"

            // Remove sublinhado no Android
            underlineColorAndroid="transparent"
          />
        </Wrapper>
        <HorizontalRule />
      </Container>

      <NumericKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onClear={handleClear}
      />
      <ContainerBtns>
        <Btn onPress={() => console.log(global.dtPagamento)}>
          Avançar
        </Btn>
      </ContainerBtns>
    </>
  );
}

