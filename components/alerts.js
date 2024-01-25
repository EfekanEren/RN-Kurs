import { Alert, Vibration } from 'react-native';

export const Alerts = {
  incorrectInputAlert: () => {
    Alert.alert(
      'Eingabe Überprüfen',
      'Geben Sie bitte ein Zitat und den jeweiligen Autoren an',
      [
        {
          text: 'Ok',
          style: 'default',
        }
      ]
    );

    Vibration.vibrate([100]);
  },

  inputSavedAlert: () => {
    Alert.alert(
      'Erfolg',
      'Ihr Zitat wurde gespeichert',
      [
        {
          text: 'Ok',
          style: 'default',
        }
      ]
    );

    Vibration.vibrate([100]);
  }
}
