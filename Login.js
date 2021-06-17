import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Mainstyle';

export default function Login({navigation}) {
 
const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

const entrar= () => {
  navigation.reset({
       index: 0,
       routes:[{name: "Principal"}]

  })
}

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }
  return (
    <View style={[styles.container, specifcStyle.specificContainer]}>
      <Text h3>Entre na FAM Soluções!</Text>
      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value =>setEmail(value)}
      keyboardType="email-address"
      />
      <Input
      placeholder="Sua senha"
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText={value =>setPassword(value)}
      secureTextEntry={true}
      />

     <Button
      icon={
        <Icon
          name="check"
          size={15}
          color="white"
       />
  }
  title="Entrar"
  buttonStyle= {specifcStyle.button}
  onPress={() => entrar()}
/>

    <Button
      icon={
        <Icon
          name="user"
          size={15}
          color="white"
       />
  }
  title="Cadastrar"
  buttonStyle= {specifcStyle.button}
  onPress={() => cadastrar()}
/>

    </View>
  );
}

const specifcStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
   width: "100%",
   marginTop: "10",

  }


})
