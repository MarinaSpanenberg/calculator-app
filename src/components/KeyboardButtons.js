//Componente que adiciona os botões da calculadora na tela
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import KeyboardStyles from "../styles/KeyboardStyle";

export default function KeyboardButtons({ handleClick, calculate }){
    const [selectedOperation, setSelectedOperation] = useState('');

    const buttons = [
        {
            id: 1,
            name: 'SOMAR',
            operation: '+',
        },
        {
            id: 2,
            name: 'SUBTRAIR',
            operation: '-',
        },
        {
            id: 3,
            name: 'MULTIPLICAR',
            operation: '*',
        },
        {
            id: 4,
            name: 'DIVIDIR',
            operation: '/',
        },
    ];
   
    return(
    <View style={KeyboardStyles.container}>    
        <Text style={KeyboardStyles.text}>Informe a operação:</Text>
        <View style={KeyboardStyles.buttonsContainer}>
             {buttons.map((button, index) =>  
            <TouchableOpacity  
                style={KeyboardStyles.buttons} 
                 key={index} 
                 onPress={() => {
                    setSelectedOperation(button.name);
                    handleClick(button);
                 }}
                > 
                 <Text style={KeyboardStyles.buttonsText}>{button.operation}</Text> 
              </TouchableOpacity>              
        )}
        </View> 

        <Text 
            style={KeyboardStyles.selectedOperation}    
        >
        Operação escolhida: {selectedOperation} </Text> 

        <View>
            
            <TouchableOpacity 
                style={KeyboardStyles.calculateButton}
                onPress={calculate}
            >

                <Text style={KeyboardStyles.calculateText}>Efetuar cálculo</Text>
            </TouchableOpacity> 
        </View>    
    </View>
    );
}
    
