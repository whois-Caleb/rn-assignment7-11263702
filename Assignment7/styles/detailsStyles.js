import { StyleSheet } from "react-native";
import { addToCart } from "../data/requirements";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function detailStyles() { 
    const insets = useSafeAreaInsets();


    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productImage: {
        height: 200,
        width: '100%',
        paddingBottom: 10,
        objectFit: 'contain',
    },
    categoryText: {
        color: 'black',
        fontSize: 25,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Regular',
    },
    titleText: {
        color: 'black',
        fontSize: 20,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Light',
    },
    descriptionText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Light',
    },
    price: {
        color: 'orange',
        fontSize: 15,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Regular',
    },
    addToCartButton: {
        backgroundColor: '#000000',
        flex: 1,
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: insets.bottom,
    },
    addToCartText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
    },
    buttonTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    instructionsContainer: {
        padding: 15,
        paddingBottom: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 15,

    },
    instructionsText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Light',
    },
    shippingInfoContainer: {
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    shippingInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rateInfoContainer: {
        padding: 15,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rateInfoText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 10,
        marginTop: -15,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Regular',
    },
    shippingInfoText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Light',
    },
});
}