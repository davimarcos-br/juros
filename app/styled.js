import styled from 'styled-components/native';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
  
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.SafeAreaView`
  padding: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #504d55
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #797481;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  width: 200px;
  margin: 5px;
  //border: #fff 1px solid;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;  
