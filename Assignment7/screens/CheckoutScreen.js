import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '../styles/styles';
import { CartProvider, useCart } from '../data/cart';

export default function CheckoutScreen({ navigation }) {
  const { cart, removeItemFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.product}>{item.name} - ${item.price}</Text>
            <Button
              title="Remove from Cart"
              onPress={() => removeItemFromCart(item)}
            />
          </View>
        )}
      />
      <Button
        title="Complete Purchase"
        onPress={() => alert('Purchase Completed!')}
      />
      <Text style={styles.total}>
        Est. Total: ${cart.reduce((total, item) => total + item.price, 0)}
      </Text>
    </View>
  );
}
