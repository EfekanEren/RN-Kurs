import { useState } from 'react';
import { Alerts } from './alerts';
import { Modal, StyleSheet, View, Button, Text, TextInput, number, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

export default function Add({ onClose, visible }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const saveQuote = () => {
    if (quote) {
      AsyncStorage.setItem('zitat', quote);
      setQuote('');
      Alerts.inputSavedAlert();
      cancelQuote(); /* Dies ist die Funktion, die normalerweise für den Abbruch-Button verwendet wird.
                      Wird hier jedoch auch aufgerufen, um nach dem speichern die Modal-Ansicht zu schließen. */
    } else {
      Alerts.incorrectInputAlert();
    }
};

const showQuote = () => AsyncStorage.getItem('zitat')

  const cancelQuote = () => {
    onClose();
  }
  
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Modal visible={visible} animationType='slide'>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.innerContainer}>
            <Text style={styles.header}>Neues Zitat</Text>

            <TextInput
              value={quote}
              multiline
              style={[styles.input, styles.contentInput]}
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
              <Text style={styles.CancelQuoteText} ><MaterialIcons name="cancel" size={20} color="black" /></Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 200,
  },
  input: {
    height: 60,
    width: 270,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    top: 215,
    alignSelf: 'center'
  },
  contentInput: {
    height: 150,
    width: 300
  },
    saveQuote: {
      position: 'absolute',
      top: 510,
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: '#ffde00',
      borderWidth: 0,
      borderRadius: 5,
      borderColor: 'black',
      height: 40,
      width: 200
    },
    SaveQuoteText: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      top: 11
    },
    cancelQuote: {
      position: 'absolute',
      top: 100,
      right: 30,
      backgroundColor: '#ffde00',
      borderWidth: 0,
      borderRadius: 5,
      borderColor: 'black',
      height: 40,
      width: 40
    },
    CancelQuoteText: {
      top: 11,
      textAlign: 'center',
    },
});