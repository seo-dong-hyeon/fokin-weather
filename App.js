import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
      </View>
      <View style={styles.blueView}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 모든 공간을 사용
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    width: "100%",
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue",
  },
});
