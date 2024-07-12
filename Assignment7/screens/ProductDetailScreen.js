import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import detailStyles from '../styles/detailsStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { addToCart } from '../data/requirements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const detailsStyles = detailStyles();


  // const addToCart = async () => {
  //   try {
  //     const cartData = await AsyncStorage.getItem('cart');
  //     const cart = cartData ? JSON.parse(cartData) : [];
  //     const productExists = cart.find(item => item.id === product.id);
  //     if (!productExists) {
  //       cart.push(product);
  //       await AsyncStorage.setItem('cart', JSON.stringify(cart));
  //       alert('Added to Cart');
  //     } else {
  //       alert('Product is already in the cart');
  //     }
  //   } catch (error) {
  //     console.error('Failed to add to cart', error);
  //   }
  // };

  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView style={{flex: 3, marginBottom: 55, paddingTop: 20}}>
      <View style={detailsStyles.container}>
        <Image source={{ uri: product.image }} style={detailsStyles.productImage} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:5}}>
          <Text style={detailsStyles.categoryText}>{product.category}</Text>
          <TouchableOpacity style={detailsStyles.cartButton}>
            <Ionicons name='share-outline' size={25} color="black" />
          </TouchableOpacity>
          </View>
          <Text style={detailsStyles.titleText}>{product.title}</Text>
          <Text style={detailsStyles.price}>${product.price}</Text>
          <Text style={detailsStyles.titleText}>MATERIALS</Text>
          <Text style={detailsStyles.descriptionText}>{product.description}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={detailsStyles.addToCartButton} onPress={() => addToCart(product)}>
          <View style={detailsStyles.buttonTextContainer}>
          <Ionicons name='add' size={25} color="white" />
          <Text style={detailsStyles.addToCartText}>ADD TO BASKET</Text>
          </View>

          <Ionicons name='heart-outline' size={25} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default ProductDetailScreen;
