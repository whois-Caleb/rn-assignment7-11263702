import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToCart } from '../data/requirements';
import CartStyles from '../styles/cartStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import detailStyles from '../styles/detailsStyles';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const cartStyles = CartStyles();
  const detailsStyles = detailStyles();
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        const parsedData = cartData ? JSON.parse(cartData) : [];
        // Filter out items without an id or fix them as needed
        const validData = parsedData.filter(item => item.id !== undefined);
        setCartItems(validData);
      } catch (error) {
        console.error('Failed to load cart items', error);
      }
    };

    const focusListener = navigation.addListener('focus', loadCartItems);
    return focusListener;
  }, [navigation]);

  const removeFromCart = async (id) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Failed to remove from cart', error);
    }
  };

  return (
    <View style={cartStyles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
        <View style={cartStyles.checkoutHeader}>
          <Text style={cartStyles.checkoutHeaderText}>CHECKOUT</Text>
          <View style={cartStyles.underlineContainer}>
            <View style={cartStyles.line} />
            <View style={cartStyles.diamond} />
            <View style={cartStyles.line} />
          </View>
        </View>
        }

        renderItem={({ item }) => (
          <ScrollView>
          <View style={cartStyles.cartItem}>
            <Image source={{ uri: item.image }} style={cartStyles.cartItemImage} />
                <View style={cartStyles.cartItemDetails}>
                <Text style={cartStyles.cartItemCategory}>{item.category}</Text>
                <Text style={cartStyles.cartItemTitle}>{item.title}</Text>
                <Text style={cartStyles.cartItemPrice}>${item.price}</Text>
              </View>
            
            <Ionicons name='close-circle-outline' size={25} color="red" style={cartStyles.removeIcon} onPress={() => removeFromCart(item.id)} />
          </View>
          </ScrollView>
        )}

        ListFooterComponent={
        <View style={cartStyles.footerContainer}>
          <Text style={cartStyles.footerText}>EST. TOTAL: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </Text>
        </View>
        }

      /> 
      <TouchableOpacity style={cartStyles.checkOutButton}>
      <View style={cartStyles.checkoutTextContainer}>
      <Ionicons name='bag-outline' size={25} color="white" />
      <Text style={cartStyles.checkoutText}>CHECKOUT</Text>
      </View>
    </TouchableOpacity>
      
    </View>
  );
};

export default CartScreen;
