import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import homeStyles from '../styles/homeStyles';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

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
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            
            <Image source={{ uri: item.image }} style={homeStyles.dressImage} />
            <Text style={homeStyles.titleText}>{item.title}</Text>
            <Text style={homeStyles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
