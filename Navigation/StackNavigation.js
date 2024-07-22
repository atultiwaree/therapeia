import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../src/Authentication/Login';
import SignUp from '../src/Authentication/SignUp';
import Back from './Back';
import {commonColor} from '../Styles/AppStyles';
import SignIn from '../src/Authentication/Signin';
import PrivacyPolicy from '../src/PrivacyPolicy';
import CategoryScreen from '../src/CategoryScreen';
import {useSelector} from 'react-redux';
import CategoryBack from './CategoryHeader';
import Profile from '../src/Profile';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const userInfo = useSelector(state => state.auth);

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
      {!userInfo.profile.loggedIn ? (
        <>
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
        </>
      ) : (
        <>
          {userInfo.profile.privacyPolicyStatus ? (
            <>
              <Stack.Screen
                name="categoryScreen"
                component={CategoryScreen}
                options={{
                  title: '',
                  headerShadowVisible: false,
                  headerRight: () => <CategoryBack />,
                  headerLeft: () => <></>,
                }}
              />
              <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="privacyPolicy"
                component={PrivacyPolicy}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
