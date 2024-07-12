import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import homeStyles from '../styles/homeStyles';
import { Ionicons } from '@expo/vector-icons';
import { addToCart } from '../data/requirements';

const HomeScreen = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const { product } = route.params || {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={homeStyles.dressListContainer}>
      <FlatList
        ListHeaderComponent={            
        <View style={homeStyles.headingContainer}>
            <Text style={homeStyles.headingText}>OUR STORY</Text>
            
            <View style={homeStyles.titleIconsContainer}>
                <TouchableOpacity style={homeStyles.iconCircle}>
                        <Ionicons
                        name='list-outline'
                        size={25}
                        style={{color: 'grey'}}
                        />
                </TouchableOpacity>

                <TouchableOpacity style={homeStyles.iconCircle}>
                        <Ionicons
                        name='filter'
                        size={25}
                        style={{color: 'orange'}}
                        />
                </TouchableOpacity>
            </View>
        </View>
        }
        data={products}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={homeStyles.dressContainer}
            onPress={() => navigation.navigate('Product Details', { product: item })}
          >  
            <ImageBackground source={{ uri: item.image }} style={homeStyles.dressImage} resizeMode='contain'>
              <TouchableOpacity style={homeStyles.addButtonContainer} onPress={() => addToCart(item)}>
                <Ionicons 
                name='add-circle-outline' 
                style={homeStyles.addButton}
                />
              </TouchableOpacity>
            </ImageBackground>
            
            <Text style={homeStyles.titleText}>{item.category}</Text>
            <Text style={homeStyles.subTitleText}>{item.title}</Text>
            <Text style={homeStyles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
