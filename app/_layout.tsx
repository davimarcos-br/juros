import { Stack } from 'expo-router';




export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Calculadora de juros' }} />
        <Stack.Screen name="base" options={{ title: 'Base de calculos' }} />
      </Stack>
     
  );
}
