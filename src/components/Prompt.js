// Componente que mostra as entradas do usuário
import { useFonts } from "expo-font";
import { Text, TextInput, View } from "react-native";
import PromptStyles from "../styles/PromptStyles";

export default function Prompt({ firstNumber, setFirstNumber, secondNumber, setSecondNumber }){
    
    return(
        <View style={PromptStyles.container}>
        <Text style={PromptStyles.text}>Informe o primeiro valor</Text>
        <TextInput
            style={PromptStyles.input}
            keyboardType="numeric"
            value={firstNumber} 
            onChangeText={value => setFirstNumber(parseFloat(value))}
        />
        
        <Text style={PromptStyles.text}>Informe o segundo valor</Text>
        <TextInput
            style={PromptStyles.input}
            keyboardType="numeric"
            value={secondNumber}
            onChangeText={value => setSecondNumber(parseFloat(value))}
        />
        </View>
    );
}
