import { useRouter } from 'expo-router';

import styled from 'styled-components/native';
import { Btn, TextButton } from './styles/global';


export const Container = styled.View`
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
       <Btn onPress={() => router.push('/datePay1')}>
        <TextButton>Novo calculo...</TextButton>
       </Btn>
       <Btn >
        <TextButton>Histórico de calculos...</TextButton>
       </Btn>
    </Container>
  </>
  );
}

