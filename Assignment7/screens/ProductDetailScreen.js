import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      const cart = cartData ? JSON.parse(cartData) : [];
      const productExists = cart.find(item => item.id === product.id);
      if (!productExists) {
        cart.push(product);
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to Cart');
      } else {
        alert('Product is already in the cart');
      }
    } catch (error) {
      console.error('Failed to add to cart', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetailScreen;
