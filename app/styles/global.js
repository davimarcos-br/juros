import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';

export const BtnScreem = styled.TouchableOpacity`
  width: 30px;
  padding: 2px;
  align-items: center;
  
  margin: 5px;
`;

export const Btn = styled.TouchableOpacity`
  width: 90%;
  border-radius: 5px;
  padding: 10px;
    align-items: center;
  border: 1px solid #000;
  margin: 5px;
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
