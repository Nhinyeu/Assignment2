import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity,ScrollView, Image} from 'react-native';
import { validateEmail, validatePassword } from './src/validation';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

const App = () =>{
  const ShowMessage = (message, description, type) =>{
    showMessage({
      message: message,
      description: description,
      type: type,
      onPress: () => {
        hideMessage()
      },
  })
  }
  const [state,setState] = useState({
    email:'',
    password: '',
  });
  const [error, setErrors] = useState({email: '', password: ''})

  function onSubmit(){
    const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);
    setErrors({email: emailError, password: passwordError});
    if (emailError == null && passwordError == null){
      ShowMessage('Sucess','Login Sucess', 'success')
   }
   else{
    ShowMessage('Error','Wrong Password or Email', 'danger')
   }
  }

  return(
    <View style={styles.container}>
      <ScrollView style={styles.styleScroll}>
      <View style={styles.container2}>

      <View>
        <TouchableOpacity style={styles.back}>
          <Image source={require("./asset/back3.png")}/>
        </TouchableOpacity>
      </View>

      <View style={styles.Imagelogo}>
      <Image style={styles.ImagelogoLabbit} source={require('./asset/Labbit1.png')} />
      </View>

      <View style={styles.Imagelogo}>
      <Image style={styles.styleLogo} source={require('./asset/Logo.png')} />
      <Image style={styles.Loginto} source={require('./asset/Loginto.png')} />
      </View>

      <Text>Email</Text>
        <View style={styles.editTextInput1}>
        <TextInput style={styles.textEmail}
        onChangeText={text => setState({...state, email: text.toLocaleLowerCase()})}
        placeholder = 'Enter your Email'
        value = {state.email}
        />
        </View>
        <Text style={styles.textError}>{error.email}</Text>
        <Text>Password</Text>
        <View style={styles.editTextInput1}>
        <TextInput style={styles.textEmail}
        onChangeText={text => setState({...state, password: text})}
        placeholder= 'Enter your Password'
        value = {state.password}
        />
        </View>
        <Text style={styles.textError}>{error.password}</Text>
        <TouchableOpacity style = {styles.button} onPress = {() => onSubmit()}>
          <Text style={styles.textbuton}>Login</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage style={styles.styleMessError} position="top" textStyle={{textAlign:'center', fontSize:16}}  titleStyle={{textAlign:'center', fontSize:15}}  />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:'#FFD834'
  },
  styleScroll:{
    flex:1,
  },
  
  container2:{
    flex:1,
    padding:'10%',
    justifyContent:'flex-end',
    marginTop:0
  },
  editTextInput1: {
    flexDirection:'row',
    height:45,
    borderRadius:100,
    backgroundColor:'white',
    borderRadius:100,

  },

  textEmail:{
    fontSize: 16,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginLeft: 15
  },

  button:{
    flexDirection:'row',
    height:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF6D03',
    borderRadius:100,
  },
  textError: {
    color: 'red',
    paddingBottom: 5,
    paddingLeft: 5,
  },
  textbuton:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  back:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  Imagelogo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginRight:'8.5%',
    marginBottom: '10%'
    
  },
  Loginto:{
    alignItems: 'center',
    resizeMode: "stretch",
    top: 10,
    height: '10%',
    width: '53%',
    marginLeft:'13%'
  },
  styleLogo:{
    resizeMode: 'stretch',
    position:'relative',
    height:230,
    width:175,

  },
  ImagelogoLabbit:{

  },
  styleMessError:{
    position:'relative',
    marginTop: 8
    
  }
})
export default App;