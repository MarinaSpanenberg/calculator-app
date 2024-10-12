import Calculator from './src/pages/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Results from './src/pages/Results';
import { useFonts } from 'expo-font';
import useEffect from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Calculator'>
        <Stack.Screen name='Calculator' component={Calculator} options={{headerShown: false}}/>
        <Stack.Screen name='Results' component={Results} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}



