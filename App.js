import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/Mainstyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro_de_produtos from './screens/Cadastro';
import Cadastro_de_categoarias from './screens/Cadastro_de_categoarias';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro_de_produtos " component={Cadastro_de_produtos } />
      <Stack.Screen name="Cadastro_de_categoarias" component={Cadastro_de_categoarias} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}




