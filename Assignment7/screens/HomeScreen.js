import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O U R S to ry</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
}
