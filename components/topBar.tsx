import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Whats up tweaker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopBar;
