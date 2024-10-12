import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#102536',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeader: {
      padding: 10,
      marginBottom: 10,
      color: '#E8D9DB',
      fontSize: 30,
      fontWeight: 'bold',
    },
    textValues: {
      fontSize: 30,
      marginHorizontal: 10,
      alignSelf: 'flex-start',  
      color: '#E8D9DB',
      fontWeight: 'bold',
    },
    goBackButton: {
      alignItems: 'center', 
      backgroundColor: '#850037',
      borderColor: '#4A001E',
      padding: 15,
      margin: 10,
      borderRadius: 10,
      borderBottomWidth: 4,   
      width: 320,  
  },
  goBackText: {
      color: '#E8D9DB',
      fontWeight: 'bold',   
  },
  });