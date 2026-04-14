
import { useRouter } from 'expo-router'; // App.js
import { observer } from 'mobx-react-lite';
import { Button, StyleSheet } from 'react-native';
import { ctrlMultasStore } from './stores/ctrlMultas';

// O observer envolve o componente para reagir às mudanças

const BtnA1 =  observer(({ title, value }) => {
  const router = useRouter()
  function action() {
    ctrlMultasStore.dtPayment = value ;
    router.push('/valorReal')
  }
  return (
    <>
    <Button disabled = {!value}
      title={title}
      onPress={() => action()}
    />
    </>
  );
});


const BtnA2 =  observer(({ title, value }) => {
  const router = useRouter()
  function action() {
    ctrlMultasStore.dtPayment = value ;
    router.push('/valorReal')
  }
  return (
    <>
      <Button  
        title={ctrlMultasStore.dtPayment}
        onPress={() => action()}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});

export { BtnA1, BtnA2 };

