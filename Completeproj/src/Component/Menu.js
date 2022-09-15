import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={()=>navigation.navigate('Course')}
    >
    <Image
    style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/stickers/344/training.png"}}
    />
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={()=>navigation.navigate('Student')}
    >
 <Image
    style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/external-itim2101-lineal-color-itim2101/344/external-students-online-education-itim2101-lineal-color-itim2101.png"}}
    />
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={()=>navigation.navigate('About')}
    >
   <Image
    style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/external-others-pike-picture/344/external-about-notary-service-agency-others-pike-picture.png"}}
    />
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={()=>navigation.navigate('Contact')}
    >
    <Image
    style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/color-glass/344/contact-card.png"}}
    />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    justifyContent:"space-evenly",
    textTransform:'uppercase',
    

  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
  }
})

export default Menu;

