import React from 'react';
import styled from 'styled-components/native';

import Ionicons from '@expo/vector-icons/Ionicons';

// --- Estilização (Styled Components) ---
const KeyboardContainer = styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #ececec;
  
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Key = styled.TouchableOpacity`
  width: 30%;
  height: 60px;
  //background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  
`;

const KeyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;


// --- Componente ---
interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
  onConfirm: () => void;
}

const NumericKeyboard: React.FC<NumericKeyboardProps> = ({ onKeyPress, onDelete, onConfirm }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <KeyboardContainer>
      {/* Renderiza as linhas 1-3, 4-6, 7-9 */}
      {[0, 3, 6].map((rowStart) => (
        <Row key={rowStart}>
          {keys.slice(rowStart, rowStart + 3).map((key) => (
            <Key key={key} onPress={() => onKeyPress(key)}>
              <KeyText>{key}</KeyText>
            </Key>
          ))}
        </Row>
      ))}

      {/* Linha final: Apagar, 0, Confirmar */}
      <Row>
        <Key onPress={onDelete}>
        <Ionicons name="close" size={32}  />
        </Key>
        <Key onPress={() => onKeyPress('0')}>
          <KeyText>0</KeyText>
        </Key>
        <Key onPress={onDelete}>
        <Ionicons name="backspace" size={32}  />
        </Key>
      
      </Row>
    </KeyboardContainer>
  );
};

export default NumericKeyboard;
