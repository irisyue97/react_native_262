import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export const LienHeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0082c8',
        justifyContent: 'center'
    },
    input: {
        height: 44,
        paddingHorizontal: 6,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5
    },
    button: {
        height: 46,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#036fa9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
    image: {
        width: 140, height: 140,
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    categoriesName: {
        paddingBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    imageBg: {
        width: '100%', height: '100%',
        position: 'relative',
    },
    textBody: {
        zIndex: 2,
        position: 'absolute',
        top:150,
        left: 5,
        width: SCREEN_WIDTH - 10
    },
})