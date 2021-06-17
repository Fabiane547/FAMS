import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Mainstyle';

export default function Cadastro({navigation}) {
 
const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

const Cadastro= () => {
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
      <Text h3> Cadastre-se</Text>
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
  title="Cadastro"
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
   marginTop:"10",
   justifyContent: "center",
   alignItems:"center"

  }


})