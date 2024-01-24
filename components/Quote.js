import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Quote({author, text}) {
return (
    <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.author}>&mdash; {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
    text: {
    fontSize: 28,
    fontStyle: 'italic',
    color: 'black',
    margin: 50,
  },
    author: {
      fontSize: 18,
      textAlign: 'right'
  }
});