import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Initial() {
  return (
    <View style={styles.container}>
      <Text>Initial</Text>
    </View>
  );
}
