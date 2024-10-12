//Componente para as regras de negócio
import Prompt from "../components/Prompt";
import KeyboardButtons from "../components/KeyboardButtons";
import { Alert, Text, View } from "react-native";
import { useState } from "react";
import CalculatorStyles from "../styles/CalculatorStyles";
import { useNavigation } from "@react-navigation/native";

export default function Calculator(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operation, setOperation] = useState({ name: '', operation: '' });
    const [result, setResult] = useState(null);

    const navigation = useNavigation();

    const handleClick = (operation) => {
        setOperation(operation);
    }

    const calculate = () => {
        let res;
        switch (operation.operation) {
            case '+':
                res = firstNumber + secondNumber;
                break;
            case '-':
                res = firstNumber - secondNumber;
                break;  
            case '*':
                res = firstNumber * secondNumber;
                break;       
            case '/':
                res = firstNumber / secondNumber;
                if (secondNumber === 0) {
                    return <Alert>Divisão por zero não é permitida!</Alert>;
                }    
                break; 
            default:
                break;
        }
        setResult(res);

        navigation.navigate('Results',{
            firstNumber,
            secondNumber,
            operationName: operation.name,
            operationSymbol: operation.operation,
            result: res,
        });
};

    return(
        <View style = {CalculatorStyles.container}>
            <Text style = {CalculatorStyles.text}>Trabalho 01 - Cálculos</Text>
            <Prompt
                firstNumber={firstNumber}
                setFirstNumber={setFirstNumber}
                secondNumber={secondNumber}
                setSecondNumber={setSecondNumber}
            />    

            <KeyboardButtons
                handleClick={(button) => setOperation(button)}
                calculate={calculate}
            /> 
        </View>      
    );

}

