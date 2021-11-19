import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,CheckBox,Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Mainstyle';

export default function Cadastro({navigation}) {

const [nome, setNome] = useState(null)
const [qntd, setqntd] = useState(null)
const [errornome,setErrornome] = useState(null)
const [errorqntd,setErroqntd] = useState(null)


const validar = () => {
  let error = false
  setErrornome(null)
  setErrorqntd(null)

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(nome).toLowerCase())){ 
    setErrornome("Preencha o nome corretamente")
    error = true
  }
  if (cpf == null){
    setErrorqnt("Preencha com a qntd")
    error = true
}
  return !error
}

const salvar = () => {
  if (validar()) {
  console.log("Salvou") 
  }

}

  return (
    <View style={[styles.container, specifcStyle.specificContainer]}>
      <Text h3> Cadastre o produto</Text>

<Input
      placeholder="Nome"
      onChangeText={value =>setNome(value)}
      errorMessage={errorNome}
      />

<Input
      placeholder="qntd"
      onChangeText={value =>{
        setqntd(value)
        setErrorqntd(null)
      }}
      keyboardType="number-pad"
      returnKeyType="done"
      errorMessage={errorqntd}
      />

<CheckBox
   title= "Eu aceito os termos de uso"
   checkedIcon="check"
   uncheckedIcon="square-o"
   checkedColor="green"
   uncheckedColor="red"
   checked={isSelected}
   onPress={() => setSelected(!isSelected)}
   />

     <Button
      icon={
        <Icon
          name="check"
          size={15}
          color="white"
       />
  }
  title="Salvar"
  buttonStyle= {specifcStyle.button}
  onPress={() => salvar()}
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