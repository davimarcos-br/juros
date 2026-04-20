import { MaskedText } from "react-native-mask-text";

import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';

export const BtnScreem = styled.TouchableOpacity`
  width: 30px;
  padding: 2px;
  align-items: center;
  
  margin: 5px;
`;

export const Flex1 = styled.View`
  flex: 1;    
`;

export const Btn = styled.TouchableOpacity`
  width: 90%;
  border-radius: 5px;
  padding: 10px;
    align-items: center;
  border: 1px solid #000;
  margin: 5px;

  background-color: ${props => props.disabled? 'transparent' : ' #e3e3e5'};
`;

export const Masked = styled(MaskedText)`
  //width: 300px;
  //margin: 5px;
  
  font-size: 35px;
  text-decoration: none;
  text-align: center;
`;

export const ErroMsg = styled.Text`  
  font-size: 14px;
  color: red;
`;


export const Placeholder = styled.Text`
  //width: 300px;
  //margin: 5px;
  
  font-size: 30;
  color: #999;
  text-decoration: none;
  text-align: center;
`;

// Cria o texto estilizado
export const TextButton = styled.Text`
  font-size: 16px;
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
