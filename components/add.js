import { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput, number, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

export default function Add({ onClose, text }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const saveQuote = () => {
    if (quote) {
      AsyncStorage.setItem('zitat', quote);
      setQuote('');
      alert('Zitat gespeichert');
    } else {
      alert('Bitte ausfüllen');
    }
};

const showQuote = () => AsyncStorage.getItem('zitat')

  const cancelQuote = () => {
    onClose();
  } 
  
return (

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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    bottom: 20
  },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      bottom: 35
    },
    saveQuote: {
      position: 'absolute',
      top: 110,
      left: 28,
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
      top: 110,
      left: 138,
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