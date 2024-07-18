import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './Navigation/StackNavigation'

const Main = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View style = {{flex : 1, backgroundColor : "#F1EFE7"}}>
      <StackNavigation/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})