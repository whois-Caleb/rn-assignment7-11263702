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
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView style={{flexGrow: 3, marginBottom: 55, paddingTop: 20, paddingBottom: 15}}>
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
          <Text style={detailsStyles.descriptionText}>
          We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products
          </Text>
          <View style={detailsStyles.instructionsContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/Do Not Bleach.png')}/>
              <Text style={detailsStyles.instructionsText}>Do not use bleach</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/Do Not Tumble Dry.png')}/>
              <Text style={detailsStyles.instructionsText}>Do not tumble dry</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/Do Not Wash.png')}/>
              <Text style={detailsStyles.instructionsText}>Dry clean with tetrachloroethlene</Text>
            </View>
            <View style={{flexDirection: 'row', paddingBottom: 15}}>
              <Image source={require('../assets/Iron Low Temperature.png')}/>
              <Text style={detailsStyles.instructionsText}>Iron at a maximum of 110C/230F</Text>
            </View>
          </View>
          <View style={detailsStyles.shippingInfoContainer}>
          <Image source={require('../assets/Shipping.png')} />
            <View style={detailsStyles.rateInfoContainer}>
              
              <Text style={detailsStyles.rateInfoText}>Free Flat Rate Shipping</Text>
              <Text style={detailsStyles.shippingInfoText}>Estimated to be delivered on</Text>
            <Text style={detailsStyles.shippingInfoText}>09/11/2021 - 12/11/2021.</Text>
            </View>

            
          </View>
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
