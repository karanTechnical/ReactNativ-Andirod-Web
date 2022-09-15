import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../Component/Menu';

const Home = (props) => {
    const description = "We miss you, you will be alaways in our heartdolor sit amet conseture adip inciunt ut aliwua";
    return (
   <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
      <Image style={styles.headerImage}
      resizeMode="contain"
        source={require('../../assets/home.jpg')}
      />
      <Text style={styles.mainHeader}> Welcome</Text>
      <Text style={[styles.mainHeader,{
        fontSize:33, color:"#4c5dab",
        marginTop:0,
      }, ]}>{props.chanelName}</Text>
      <Text style={styles.paraStyle}>{description}</Text>
    </View>
    <View style={styles.menuStyle}>
    <View style={styles.lineStyle}></View>
     <Menu/> 
     <View style={[styles.lineStyle, {
      marginVertical:20,
     }]}></View>
     </View>
   </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
     height:"100%",
     display: 'flex',
     justifyContent:"space-between",
     paddingHorizontal:20,
     backgroundColor:"#fff",
     textAlign:'center',
  
  
    },
    homeTop:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:10,
    },
    headerImage:{
      height:undefined,
      width:"100%",
      aspectRatio:1,
      display:"flex",
      alignItems:"stretch",
      marginTop:50,
      borderRadius:20,
    },
    mainHeader:{
      fontSize:30,
      color:"#344055",
      textTransform:"uppercase",
  
    },
    paraStyle:{
      textAlign:"left",
      fontSize:19,
      color:"#7d7d7d",
      marginTop:30,
      paddingBottom:50,
      textAlign:"center",
    },
    lineStyle:{
      marginBottom:10,
      borderWidth:0.5,
      borderColor:"gray"
    }
  
  });
  

export default Home;

