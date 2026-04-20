import { useRouter } from 'expo-router';
import styled from 'styled-components/native';
import Extrato from './components/extrato';


export const Container = styled.View`
  flex: 0;
  background-color: #ececec;
  justify-content: center;
  align-items: center;
  
`;
export const ContainerBtns = styled.View`

  background: #FFF;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-shadow: 0 -1px 0  rgba(0, 0, 0, 0.1) ;
`;

 const Btn = styled.TouchableOpacity`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
    align-items: center;
  border: 1px solid #000;
  margin: 5px;
`;


export default function Manage() {
  const router = useRouter();


  return (<>
      <Extrato />
      </>
  );
}

