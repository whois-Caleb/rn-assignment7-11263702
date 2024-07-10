import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeStyles from '../styles/homeStyles';
import detailsStyles from '../styles/detailsStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

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
    <View style={detailsStyles.container}>
      <Image source={{ uri: product.image }} style={detailsStyles.productImage} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:5}}>
      <Text style={detailsStyles.categoryText}>{product.category}</Text>
      <TouchableOpacity style={detailsStyles.cartButton} onPress={addToCart}>
        <Ionicons name='share-outline' size={25} color="black" />
      </TouchableOpacity>
      </View>
      <Text style={detailsStyles.titleText}>{product.title}</Text>
      <Text style={detailsStyles.price}>${product.price}</Text>
      <Text style={detailsStyles.descriptionText}>{product.description}</Text>
      
      
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
