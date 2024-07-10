import 'react-native-gesture-handler';
import * as React from 'react';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';
import CartScreen from './screens/CartScreen.js';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    'Swifted Regular': require('./assets/fonts/Swifted DEMO.otf'),
    'Didot Regular': require('./assets/fonts/Didot.otf'),
    'Helvetica Regular': require('./assets/fonts/Helvetica.ttf'),
    'Helvetica Light': require('./assets/fonts/helvetica-light.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Home" component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={30}
              color="black"
              style={{marginLeft: 10}}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => ( 
            <View style={homeStyles.headerNameContainer}>
            <Text style={homeStyles.headerText}>Open</Text> 
            <Text style={homeStyles.headerText}>Fashion</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={homeStyles.headerIconsContainer}>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="bag-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                  onPress={() => navigation.navigate('Cart')}
                />
              </TouchableOpacity>
            </View>
          ),
          })
        }
        />
        <Drawer.Screen 
        name="ProductDetail" component={ProductDetailScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={30}
              color="black"
              style={{marginLeft: 10}}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => ( 
            <View style={homeStyles.headerNameContainer}>
            <Text style={homeStyles.headerText}>Open</Text> 
            <Text style={homeStyles.headerText}>Fashion</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={homeStyles.headerIconsContainer}>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="bag-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                  onPress={() => navigation.navigate('Cart')}
                />
              </TouchableOpacity>
            </View>
          ),
          })
        }
        />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
