import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';
import productDetails from '../data/productDetails';
import { useCart } from '../data/cart';

export default function DetailsScreen({ route }) {
  const { productId } = route.params;
  const product = productDetails[productId];
  const { addItemToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.product}>Price: ${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.title}>Materials</Text>
      {product.materials.map((material, index) => (
        <Text key={index} style={styles.material}>{material}</Text>
      ))}
      <Text style={styles.title}>Delivery</Text>
      <Text style={styles.delivery}>{product.delivery}</Text>
      <Button
        title="Add to Basket"
        onPress={() => addItemToCart(product)}
      />
    </View>
  );
}
