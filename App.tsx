import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './src/ChatList';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
});
