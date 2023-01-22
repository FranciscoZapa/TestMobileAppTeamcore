import {Alert, Platform, BackHandler} from 'react-native';

export const exitApplication = navigation => {
  Alert.alert(
    'Confirmar salida',
    '¿Estás seguro de que quieres salir de la aplicación?',
    [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Salir',
        onPress: () => {
          if (Platform.OS === 'android') {
            BackHandler.exitApp();
            navigation.navigate('Home');
          }
        },
      },
    ],
    {
      cancelable: false,
    },
  );
  return true;
};
