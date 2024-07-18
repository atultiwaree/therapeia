import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/Authentication/Login';


const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{statusBarColor : "#F1EFE7", statusBarStyle : "dark"}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})