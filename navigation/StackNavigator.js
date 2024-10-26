import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import IMCScreen from '../screens/IMC';
import MedidaScreen from '../screens/Medida';
import MoedaScreen from '../screens/Moeda'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
}