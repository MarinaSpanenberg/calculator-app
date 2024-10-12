import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import ResultsStyles from "../styles/ResultsStyles";

export default function Results({ route }){
    const {firstNumber, secondNumber, operationName, operationSymbol, result} = route.params;
    const navigation = useNavigation();

    return(
        <View style={ResultsStyles.container}>
        <Text style={ResultsStyles.textHeader}>Trabalho 01 - Cálculos</Text>    
        <Text style={ResultsStyles.textValues}>Valor 1:  
            <Text style={{fontWeight: 'normal'}}> {firstNumber}</Text>
        </Text>
        <Text style={ResultsStyles.textValues}>Valor 2: 
            <Text style={{fontWeight: 'normal'}}> {secondNumber}</Text>
        </Text>
        <Text style={ResultsStyles.textValues}>Operação:  
            <Text style={{textTransform: 'capitalize', fontWeight: 'normal'}}> {operationName}</Text>
        </Text>
        <Text style={ResultsStyles.textValues}>Cálculo: 
            <Text style={{fontWeight: 'normal'}}> {`${ firstNumber } ${ operationSymbol } ${ secondNumber }`}</Text>
        </Text>    
        <Text style={ResultsStyles.textValues}>Resultado: 
            <Text style={{fontWeight: 'normal'}}> {result}</Text>
        </Text>
        <TouchableOpacity 
            style={ResultsStyles.goBackButton}
            onPress={() => navigation.goBack()}
        >
            <Text style={ResultsStyles.goBackText}>Voltar</Text>
        </TouchableOpacity>
        </View>
    );

}