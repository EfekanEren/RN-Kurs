import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, Button, Pressable, View, TouchableOpacity, TextInput, onChangeText, onChangeNumber, text, number} from 'react-native';
import Add from './components/add';
import Quote from './components/quote';

const data = [
  {text: '"Das Schönste, was wir erleben können, ist das Geheimnisvolle."',
  author: 'Albert Einstein'},
  {text: 'Das Leben wäre tragisch, wenn es nicht lustig wäre.',
  author: 'Stephen Hawking'},
  {text: 'Ein klassisches Werk ist ein Buch, das die Menschen loben, aber nie lesen.',
  author: 'Ernest Hemingway'}
];

export default function App() {

const [index, setIndex] = useState(0);
const [isAddVisible, setAddVisible] = useState(false);
const quote = data[index];

const toggleAddVisibility = () => {
  setAddVisible(!isAddVisible);
};


let prevIndex = index - 1;
if(prevIndex < 0) prevIndex = data.length - 1;

  return (
    // JSX --> UI
    <View style={styles.container}>

      <Image
        source={require('./assets/DEWEZET.png')}
        style={styles.logo}
      />

      {isAddVisible && <Add onClose={toggleAddVisibility} />}
      
      <TouchableOpacity style={styles.addQuote} onPress={toggleAddVisibility}>
      <Text style={styles.addQuoteText}>&#x2b;</Text>
      </TouchableOpacity>

      <Quote text={quote.text} author={quote.author}/>

      <TouchableOpacity
        onPress={() => setIndex((index + 1) % data.length)}
          style={styles.next}>
      <Text style={styles.nextText}>Nächstes Zitat</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

/*   const useStateArray = useState(0);
  const index = useStateArray[0];
  const quote = data[index];
  const setIndex = useStateArray[1]; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 65, // Passen Sie die Breite nach Bedarf an
    height: 65, // Passen Sie die Höhe nach Bedarf an
    position: 'absolute',
    alignSelf: 'center',
    top: 85
  },
  dewezet: {
    fontSize: 26,
    fontFamily: '',
    marginLeft: -250,
  },
  next: {
    position: 'absolute',
    borderRadius: 5,
  //borderColor: '#ffde00',
    padding: 10,
    bottom: 60,
    backgroundColor: '#ffde00'
  },
  nextText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14
  },
  addQuote: {
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
  addQuoteText: {
    fontSize: 24,
    fontWeight: '500',
    padding: 10,
    bottom: 5,
    textAlign: 'center',
  }
});