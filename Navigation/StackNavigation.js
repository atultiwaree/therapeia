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
import {counsellingCategory} from '../assets/data';
import Counselling from '../src/SubCategories/Counselling';
import WhatWorks from '../src/SubCategories/deeper/WhatWorks';
import Intervation from '../src/SubCategories/deeper/Intervation';
import AIScreen from '../src/SubCategories/ActionScreen/AIScreen';
import RealTherapist from '../src/SubCategories/ActionScreen/RealTherapistScreen';
import ChatWindow from '../src/ChatWindow';

import SingleAfterCategory from '../src/SingleAfterCategory';
import Maps from '../src/SubCategories/ActionScreen/Map';
import Question from '../src/dummy/Question';
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

              <Stack.Screen
                name="counselling"
                component={Counselling}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

              <Stack.Screen
                name="whatWorks"
                component={WhatWorks}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

              <Stack.Screen
                name="intervation"
                component={Intervation}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

              <Stack.Screen
                name="chatwindow"
                component={ChatWindow}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

              <Stack.Screen
                name="aiscreen"
                component={AIScreen}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

             <Stack.Screen
                name="map"
                component={Maps}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />


              <Stack.Screen
                name="singleAfterCategory"
                component={SingleAfterCategory}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

            <Stack.Screen
                name="question"
                component={Question}
                options={{
                  title: '',
                  headerShadowVisible: false,
                }}
              />

              <Stack.Screen
                name="realtherapist"
                component={RealTherapist}
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
                  headerShown: false,
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
