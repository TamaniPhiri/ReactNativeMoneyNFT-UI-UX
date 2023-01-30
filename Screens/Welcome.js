import { View, Text,SafeAreaView, StyleSheet, ImageBackground,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import bg from './9.png'
import {Feather} from 'react-native-vector-icons';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.imageBg}>

        {/*Header*/}
      <Text style={{fontSize:36, color:'#fff', marginBottom:5, fontWeight:'800'}}>Welcome</Text>

        {/*Form Container*/}
        <View style={styles.form}>

          {/*Email input*/}
          <View style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center', marginVertical:5}}>
            <View style={{alignContent:'center',justifyContent:'center', marginLeft:10}}>
              <Feather name="mail" color='#fff' width={24} height={24} style={{marginBottom:8, justifyContent:'center', alignItems:'center'}}/>
            </View>
            <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#fff'} keyboardType={'email-address'}/>
          </View>

          {/*Password Input*/}
          <View style={{width:'100%', alignItems:'center', flexDirection:'row',justifyContent:'center'}}>
            <View style={{alignContent:'center',justifyContent:'center', marginLeft:10}}>
              <Feather name="lock" color='#fff' width={24} height={24} style={{marginBottom:8, justifyContent:'center', alignItems:'center'}}/>
            </View>
            <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'#fff'} secureTextEntry={true}/>
          </View>

          {/*Buttons Login*/}
          <TouchableOpacity style={{width:'80%', alignItems:'center', justifyContent:'center'}} onPress={()=>navigation.navigate('Home')}>
            <View style={{marginTop:20, width:'80%', alignItems:'center', justifyContent:'center', backgroundColor:'#fff', borderRadius:10}}>
              <Text style={{padding:10, fontSize:20, fontWeight:'600',color:"#7EA0B7"}}>Log in</Text>
            </View>
          </TouchableOpacity>

          {/*SignUp option*/}
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
            <Text style={{color:'#fff', fontSize:14, textDecorationLine:'underline', marginRight:5, fontWeight:'600'}}>Already have an account?</Text>
            <Text style={{fontWeight:'600', color:'#36494E'}}>Sign in</Text>
          </View>
        </View>
        
      </ImageBackground>    
    </View>
  )
}

export default Welcome;

const styles= StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBg:{
    flex:1,
    justifyContent:"center",
    width:'100%',
    alignItems: 'center',
  },
  form:{
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:'#7EA0B7',
    width:'90%',
    padding:30,
    borderRadius:20
  },
  input:{
    backgroundColor:'#7EA0B7',
    width:'100%',
    marginHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#fff',
    marginBottom:10,
    fontSize:14,
    color:'#fff'
  }
});