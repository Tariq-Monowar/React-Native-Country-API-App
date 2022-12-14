import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import About from './components/About';


const App = ({params,route}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          
          options={({route})=>({
          headerTitle: route.params.names.common,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#0b1216",  
         }
        })}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
