import { observer } from 'mobx-react-lite';

import { format } from 'date-fns';
import styled from 'styled-components/native';
import { appStore } from '../stores/appStore';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f8fafc; // slate-50
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #e2e8f0;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #0f172a;
`;

const SummaryCard = styled.View`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 24px;
  border-left-width: 4px;
  border-left-color: #6366f1;
`;

const TotalValue = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: #0f172a;
`;

const InstallmentCard = styled.View`
  background-color: ${props => props.isLate ? '#fef2f2' : '#ffffff'};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border-left-width: 4px;
  border-left-color: ${props => props.isLate ? '#ef4444' : 'transparent'};
`;

const Badge = styled.View`
  background-color: #e0e7ff;
  padding: 4px 8px;
  border-radius: 99px;
  align-self: flex-start;
`;


const MainButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #0f172a;
  height: 56px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;


const Texto = styled.Text`
font-size: 20px;
font-weight: bold;
color: black;
`;


const Label = styled.Text`
    font-size: 14px;  
    color: #200c7b;
`;
const Separador = styled.View`
    height: 1;
    width: '100%';    
    background: #CED0CE;
`;

const FloatingActions = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  padding: 20px 24px 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-width: 1px;
  border-top-color: #e2e8f0;
`;

const Extrato = observer(() => {
    return (
        // Dentro do seu componente/render
        <>
            <Container>
                <ScrollView >
                    <SummaryCard>
                        <Title>VALOR TOTAL ACUMULADO</Title>
                        <TotalValue>R$ 42.850,00</TotalValue>
                    </SummaryCard>

                    <Title >Parcelas</Title>

                    {/* Exemplo Parcela em Dia */}
                    <InstallmentCard>
                        <Title >Parcela 01/12</Title>
                        <TotalValue >R$ 3.570,83</TotalValue>
                        <Badge><Title >EM DIA</Title></Badge>
                    </InstallmentCard>>
                </ScrollView>

            </ Container>

        </>

    )
})


export default Extrato;