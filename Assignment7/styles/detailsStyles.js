import { StyleSheet } from "react-native";

export default detailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productImage: {
        height: 300,
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
        fontFamily: 'Swifted Regular',
    },
})