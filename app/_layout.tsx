import { } from '@react-navigation/elements';
import { Stack } from 'expo-router';





export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
                  name='home' 
                  options={{
                    headerShown: false,
                    title: 'Gerenciado de Multas',
                    headerTitleAlign: 'center',
                  }}
        />
      </Stack>
  );
}
