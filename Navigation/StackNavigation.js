import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../src/Authentication/Login';
import SignUp from '../src/Authentication/SignUp';
import Back from './Back';
import {commonColor} from '../Styles/AppStyles';
import SignIn from '../src/Authentication/Signin';
import PrivacyPolicy from '../src/PrivacyPolicy';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#F1EFE7',
        statusBarStyle: 'dark',
        orientation: 'portrait',
        // headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: commonColor.MAIN,
        },
        headerLeft: () => <Back />,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
