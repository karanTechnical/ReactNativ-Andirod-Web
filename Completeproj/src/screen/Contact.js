import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from "expo-checkbox";



const Contact = ({navigation}) => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")
const [agree, setAgree] = useState(false)

const submit =()=>{
  if(!name && !email && !phone && !message ){
    Alert.alert("please fill all the fields");

  }else{
    Alert.alert (`Thank You ${name}`);
    navigation.navigate("Home");
  }
}

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader} >Level up your knowledge</Text>

      <Text style={styles.description}>You can reach us anythime via kran@gamil.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder = {"Enter your Name"}
          value= {name }
          onChangeText = {(userData)=> setName(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder = {"demo@karanTech.com"}
          value= { email}
          onChangeText = {(email)=> setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Mobile</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder = {"+60..."}
          value= {phone }
          onChangeText = {(phone)=> setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How Can We Help You?</Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLineStyle]}
          placeholder = {"Tell us About your self"}
          value= {message }
          onChangeText = {(MSG)=> setMessage(MSG)}
          numberOfLines = {5}
          multiline= {true}
        />
      </View>
      {/* checkbox area  */}
     
     <View style={styles.wrapper} >
      <Checkbox
        value={agree}
        onValueChange={()=> setAgree(!agree)}
        color = {agree ? "#4630eb" : undefined}
      />
      <Text style={styles.wrapperText}> I have read and agreed with the trim condition</Text>
     </View>
                 {/* submit button area  */}
                 <TouchableOpacity
                 style={[styles.buttonStyle, 
                 {
                  backgroundColor: agree ? "#4630eb" : "grey",

                 },
                 
                 ]}
                 disabled={!agree}
                 onPress = {submit}>
                  <Text style={styles.buttonText}> Contact Us</Text>
                 </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height:"100%",
    paddingHorizontal:30,
    backgroundColor:"#fff"

  },
  labels:{
 fontWeight:"bold",
 color:"#7d7d7d",
 paddingBottom:5,
 lineHeight:25,
  },
  mainHeader:{
    fontSize:20,
    color:"#344055",
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:15,
    textTransform:'capitalize',

  },
  description:{
    fontSize:20,
    color:"#7d7d7d",
    paddingBottom:20,
    lineHeight:25,
  },
  inputContainer:{
   marginTop:20,
  }, 
  inputStyle:{
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:2,
  },
  multiline:{
    paddingVertical:4,
  },
  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:30,
  },
  buttonText:{
    color:"#eee",
  },
  wrapper:{
    display:"flex",
    flexDirection:"row",
    marginTop:20,

  },
  buttonText:{
    marginLeft:10,
    color:"#7d7d7d",
  }
})

export default Contact

