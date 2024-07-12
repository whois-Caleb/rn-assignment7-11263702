import { StyleSheet,  } from "react-native";
    ``
export default homeStyles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerNameContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 5,
        marginBottom: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Swifted Regular',
    },
    headerIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: 'white',
    },
    headingText: {
        color: 'black',
        fontSize: 25,
        marginLeft: 5,
        padding: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Swifted Regular',
    },
    dressDetailsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5,
        padding: 5,
        marginBottom: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Regular',
    },
    subTitleText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 10,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Light',
    },
    price: {
        color: 'orange',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Helvetica Regular',
    },
    titleIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    dressListContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingBottom: 10,
    },
    dressContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
        marginBottom: 20,
        objectFit: 'contain',
        width: 180,
        height: 280,
    },
    dressImage: {
        height: 180,
        width: 160,
    },
    addButtonContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    addButton: {
        color: 'black',
        fontSize: 25,
        marginRight: 5,
        marginBottom: 5,
    },
});