import { useRouter } from 'expo-router';

import styled from 'styled-components/native';
import { TextButton } from './styles/global';


const Btn = styled.TouchableOpacity`
  width: 90%;
  border-radius: 5px;
  padding: 10px;
    align-items: center;
  border: 1px solid #000;
  margin: 5px;

  
`;
const Container = styled.View`
  flex: 1;
  background-color: #fcfcfc;
  justify-content: center;
  align-items: center;
  padding: 20px;
`; 

export default function Home() {
  const router = useRouter();
  return (
  <> 
    <Container>
       <Btn onPress={() => router.push('/data')}>
        <TextButton>Novo calculo...</TextButton>
       </Btn>
       <Btn >
        <TextButton>Histórico de calculos...</TextButton>
       </Btn>
    </Container>
  </>
  );
}

