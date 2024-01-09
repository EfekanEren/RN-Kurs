import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

const data = [
  {text: 'Guten Tag',
  author: 'Thomas'},
  {text: 'Guten Abend',
  author: 'Max'},
  {text: 'Gute Nacht',
  author: 'Jonas'}
];

export default function App() {

const [index, setIndex] = useState(0);
const quote = data[index];

let prevIndex = index - 1;
if(prevIndex < 0) prevIndex = data.length - 1;

  return (
    // JSX --> UI
    <View style={styles.container}>
      
      <Text>{quote.text}</Text>
      <Text>&mdash; {quote.author}</Text>
      
      <Button title="Nächstes Zitat"
        onPress={() => setIndex((index + 1) % data.length)}></Button>
      
      <Button title="Voriges Zitat"
        onPress={() => setIndex((prevIndex)) }></Button>
      
      <StatusBar style="auto" />
    
    </View>



/*   const useStateArray = useState(0);
  const index = useStateArray[0];
  const quote = data[index];
  const setIndex = useStateArray[1]; */

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
