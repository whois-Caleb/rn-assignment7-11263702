import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToCart } from '../data/requirements';
import cartStyles from '../styles/cartStyles';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

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
        renderItem={({ item }) => (
          <View style={cartStyles.cartItem}>
            <Image source={{ uri: item.image }} style={cartStyles.cartItemImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
