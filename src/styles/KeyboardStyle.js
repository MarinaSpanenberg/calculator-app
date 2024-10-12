import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#E8D9DB',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    buttons: {
        flex: 1,
        backgroundColor: '#102536',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 50,
        borderRightWidth: 2,
        borderBottomWidth: 3,
        borderColor: '#0C1C28',
    },
    buttonsText: {
        color: '#E8D9DB',
        fontSize: 25,
    },
    selectedOperation: {
        color: '#E8D9DB',
        fontWeight: 'bold', 
        marginBottom: 20,
    },
    calculateButton: {
        alignItems: 'center', 
        backgroundColor: '#850037',
        borderColor: '#4A001E',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderBottomWidth: 4,   
        width: 320,  
    },
    calculateText: {
        color: '#E8D9DB',
        fontWeight: 'bold',   
    },
})