import React from 'react';

import Home from './src/screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';
// import AppLoading from 'expo-app-loading';
import CourseDetail from './src/screen/CourseDetail';


// import { 
//   useFonts,
//   Nunito_600SemiBold,
//   Nunito_700Bold,
// } from '@expo-google-fonts/nunito'



export default function App() {

//   let [fontsLoaded] = useFonts({
//     Nunito_600SemiBold,
//   Nunito_700Bold,
//   });

//   if(!fontsLoaded){
//     <AppLoading/>
//   }

  const Stack = createNativeStackNavigator();
  return  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    

      <Stack.Screen name="Home" options={{
        headerShown:false,
      }}>
        {(props)=> <Home { ...props} chanelName={"karan Technical"} />}
        </Stack.Screen>

      {/* course Course */}
      <Stack.Screen name='Course' component={Course}
        options={{
          headerTitleStyle:{
            fontSize:25,
            // fontFamily:" Nunito_600SemiBold"
          },
          headerTitle:"Courses",
          headerTitleAlign:"center",
          // fontFamily:" Nunito_600SemiBold"

        }}
      />

       {/* course UserData */}
       <Stack.Screen name='Student' component={UserData} 
           options={{
          headerTitleStyle:{
            fontSize:25,
            // fontFamily:" Nunito_600SemiBold"
          },
         
          headerTitleAlign:"center"
        }}
       />

        {/* course About */}
      <Stack.Screen name='About' component={About} 
           options={{
          headerTitleStyle:{
            fontSize:25,
          },
   
          headerTitleAlign:"center"
        }}
      />

       {/* course Contact */}
       <Stack.Screen name='Contact' component={Contact} 
           options={{
          headerTitleStyle:{
            fontSize:25,
          },
         
          headerTitleAlign:"center"
        }}
       />
         {/*userDeatils*/}
         <Stack.Screen name='CourseDetail' component={CourseDetail} 
           options={{
          headerTitleStyle:{
            fontSize:25,
          },
         
          headerTitleAlign:"center"
        }}
       />

     
  
    </Stack.Navigator>
  </NavigationContainer>


}