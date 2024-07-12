import { StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const screenWidth = Dimensions.get('window').width;
export default function CartStyles () {
    const insets = useSafeAreaInsets();
    
return(
StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50,
    },
    headerNameContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 15,
        marginBottom: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Swifted Regular',
    },
    navButtonContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        height: 40,
        width: 40,
    },
    headerIconsContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkOutButton: {
        backgroundColor: 'black',
        height: 50,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
    },
    cartItemImage: {
        height: 150,
        width: 100,
        objectFit: 'contain',
    },
    checkoutHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30,
    },
    checkoutHeaderText: {
        fontSize: 30,
        fontFamily: 'Swifted Regular',
    },
    underlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      line: {
        height: 1,
        width: '20%',
        backgroundColor: 'black',
      },
      diamond: {
        width: 12,
        height: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        transform: [{ rotate: '45deg' }],
        marginHorizontal: 10,
      },
      cartItemDetails: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingStart: 5,
      },
      cartItemPrice: {
        fontSize: 20,
        color: 'orange',
        fontFamily: 'Helvetica Regular',
      },
      cartItemTitle: {
        fontSize: 15,
        fontFamily: 'Helvetica Light',
      },
      cartItemCategory: {
        fontSize: 20,
        fontFamily: 'Helvetica Regular',
      },
      removeIcon: {
        alignSelf: 'flex-end'
      },
      footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      footerText: {
        fontSize: 20,
        fontFamily: 'Helvetica Regular',
      },
      checkOutButton: {
        backgroundColor: 'black',
        height: 50,
        width: screenWidth,
        position: 'absolute',
        bottom: insets.bottom,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      checkOutButton: {
        backgroundColor: '#000000',
        flex: 1,
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: insets.bottom,
    },
    checkoutText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
    },
    checkoutTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
};