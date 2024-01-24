import { useState } from 'react';
import { Modal, StyleSheet, View, Button, Text, TextInput, number, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

export default function Add({ onClose, visible }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const incorrectInputAlert = () => {
    Alert.alert(
      'Eingabe Überprüfen',
      'Geben Sie bitte ein Zitat und den jeweiligen Autoren an',
      [
        {
          text: 'Ok',
          style: 'default',
        }
      ]
    )
  }

  const inputSavedAlert = () => {
    Alert.alert(
      'Erfolg',
      'Ihr Zitat wurde gespeichert',
      [
        {
          text: 'Ok',
          style: 'default',
        }
      ]
    )
  }

  const saveQuote = () => {
    if (quote) {
      AsyncStorage.setItem('zitat', quote);
      setQuote('');
      inputSavedAlert();
      cancelQuote(); /* Dies ist die Funktion, die normalerweise für den Abbruch-Button verwendet wird.
                      Wird hier jedoch auch aufgerufen, um nach dem speichern die Modal-Ansicht zu schließen. */
    } else {
      incorrectInputAlert();
    }
};

const showQuote = () => AsyncStorage.getItem('zitat')

  const cancelQuote = () => {
    onClose();
  } 
  
return (

<Modal visible={visible} animationType='slide'>
<View>
<Text style={styles.header}>Neues Zitat</Text>

<TextInput
  value={quote}
  style={styles.input}
  onChangeText={(text) => setQuote(text)}
  placeholder="Zitat hier eingeben"
/>

<TextInput
  value={author}
  style={styles.input}
  onChangeText={(author) => setAuthor(author)}
  placeholder="Autor Name"
/>

<TouchableOpacity style={styles.saveQuote} onPress={saveQuote}>
  <Text style={styles.SaveQuoteText} >Speichern</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.cancelQuote} onPress={cancelQuote}>
  <Text style={styles.CancelQuoteText} ><MaterialIcons name="cancel" size={18} color="black" /></Text>
</TouchableOpacity>

</View>
</Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 278,
  },
  input: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    top: 300,
    left: 90,
  },
    saveQuote: {
      position: 'absolute',
      top: 450,
      left: 118,
      backgroundColor: '#ffde00',
      borderWidth: 0,
      borderRadius: 5,
      borderColor: 'black',
      height: 30,
      width: 100
    },
    SaveQuoteText: {
      fontSize: 14,
      top: 6.5,
      fontWeight: '600',
      textAlign: 'center',
    },
    cancelQuote: {
      position: 'absolute',
      top: 450,
      left: 230,
      backgroundColor: '#ffde00',
      borderWidth: 0,
      borderRadius: 5,
      borderColor: 'black',
      height: 30,
      width: 35
    },
    CancelQuoteText: {
      fontSize: 14,
      top: 6.5,
      fontWeight: '400',
      textAlign: 'center',
    },
});