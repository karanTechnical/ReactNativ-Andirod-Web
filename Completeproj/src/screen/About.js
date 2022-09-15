import { Linking, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Karan Technical</Text>
      <Text style={styles.paraStyle}>I am Full stack developer😉 </Text>
  
  <View>
    <Image style={styles.imgStyle}
      source={{uri: "https://images.pexels.com/photos/698547/pexels-photo-698547.jpeg?cs=srgb&dl=pexels-min-an-698547.jpg&fm=jpg"}}
    />
  </View>
  <View style={styles.aboutLayut}>
    <Text style={styles.aboutSubHeader}>About Me</Text>
    <Text style={[styles.paraStyle, styles.aboutPara]}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 
    
    </Text>
  </View>
  <Text style={styles.mainHeader}> Follow Me on Social Network</Text>
  <View style={styles.menuContainer}>
    <TouchableOpacity 
    style={styles.buttonStyle}
      onPress={()=> Linking.openURL("https://en.wikipedia.org/wiki/Instagram")}>
        <Image
          style={styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}
        />
      </TouchableOpacity>
      <TouchableOpacity 
    style={styles.buttonStyle}
      onPress={()=> Linking.openURL("https://www.youtube.com/")}>
        <Image
          style={styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png"}}
        />
      </TouchableOpacity>
      <TouchableOpacity 
    style={styles.buttonStyle}
      onPress={()=> Linking.openURL("https://discord.com/")}>
        <Image
          style={styles.iconStyle}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png"}}
        />
      </TouchableOpacity>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer:{
    display:'flex',
    alignItems:"center",
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,

  },
  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,

  },
  aboutLayut:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutSubHeader:{
    fontSize:18,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    alignSelf:"center",
  },
  aboutPara:{
    color:"#ffff"

  },
  menuContainer:{
width:"100%",
flexDirection:"row",
justifyContent:"space-evenly",
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1
  }
})

export default About

