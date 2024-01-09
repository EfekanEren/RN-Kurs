import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Quote(props) {
return (
    <>
    <Text>{props.text}</Text>
    <Text>&mdash; {props.author}</Text>
    </>
  );
}