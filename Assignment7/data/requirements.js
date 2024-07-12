import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = async (product) => {
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