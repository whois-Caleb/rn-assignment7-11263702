// import React, { useState, useEffect } from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen';
// import ProductScreen from '../screens/ProductScreen.js';
// import CheckoutScreen from '../screens/CheckoutScreen';
// import DetailsScreen from '../screens/DetailsScreen';
// import { Ionicons } from '@expo/vector-icons';
// import { View, Text } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { fetchFonts } from '../data/requirements.js';
// import styles from '../styles/styles.js';

// const Drawer = createDrawerNavigator();



// export default function DrawerNavigator() {
//   const [fontLoaded, setFontLoaded] = useState(false);
//   if (!fontLoaded) {
//     return (
//       <AppLoading
//           startAsync={fetchFonts}
//           onFinish={() => setFontLoaded(true)}
//           onError={console.warn}
//       />
//       );
//     };
//   return (
//     <Drawer.Navigator 
//     initialRouteName="Home"
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: 'white',
//       },
//       // headerTintColor: 'black',
//       // headerTitleStyle: {
//       //   fontFamily: 'Swifted Regular',
//       // },
//     }}
//     >
//       <Drawer.Screen 
//         name="Home" 
//         component={ProductScreen} 
//         options={({ navigation }) => ({
//           headerLeft: () => (
//             <Ionicons
//               name="menu-outline"
//               size={30}
//               color="black"
//               style={{marginLeft: 10}}
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//           headerTitle: () => ( 
//             <View>
//             <Text style={styles.title}>Open</Text> 
//             <Text style={styles.title}>Fashion</Text>
//             </View>
//           ),
//           headerRight: () => (
//             <View style={styles.navbarIconsContainer}>
//               <Ionicons
//                 name='search-outline'
//                 size={30}
//                 color='black'
//                 style={{marginRight: 10}}
//               />
//               <Ionicons
//                 name='bag-handle-outline'
//                 size={30}
//                 color='black'
//                 style={{marginRight: 10}}
//               />
//             </View>
//           )
//         })}
//       />
      
//       {/* <Drawer.Screen name="Product" component={ProductScreen} /> */}
//       <Drawer.Screen name="Checkout" component={CheckoutScreen} />
//       <Drawer.Screen name="Details" component={DetailsScreen} />
//     </Drawer.Navigator>
//   );
// }
