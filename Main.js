import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import StackNavigation from './Navigation/StackNavigation'
import FlashMessage from "react-native-flash-message";


const Main = () => {


  return (
    <View style = {{flex : 1, backgroundColor : "#F1EFE7"}}>
      <StackNavigation/>
      <FlashMessage position="top" />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})