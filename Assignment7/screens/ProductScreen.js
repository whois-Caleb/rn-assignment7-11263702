import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from '../styles/styles';
import dresses from '../data/dresses';
import { useCart } from '../data/cart';

export default function ProductScreen({ navigation }) {
  const { addItemToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={dresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.product}>{item.name} - ${item.price}</Text>
            <Button
              title="Add to Cart"
              onPress={() => addItemToCart(item)}
            />
            <Button
              title="View Details"
              onPress={() => navigation.navigate('Details', { productId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}
