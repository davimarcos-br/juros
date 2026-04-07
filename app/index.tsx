import { useRouter } from 'expo-router';
import styled from 'styled-components/native';


export const Btn = styled.TouchableOpacity`
  width: 80%;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  border: 1px solid #000;
  margin: 5px;
`;

// Cria o texto estilizado
export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;


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
       <Btn onPress={() => router.push('/base')}>
        <TextButton>Novo calculo...</TextButton>
       </Btn>
       <Btn>
        <TextButton>Histórico de calculos...</TextButton>
       </Btn>
    </Container>
  </>
  );
}

