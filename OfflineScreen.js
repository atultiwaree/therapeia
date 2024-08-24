// OfflineScreen.js
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import commonStyle, { commonColor } from './Styles/AppStyles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';


const OfflineScreen = ({onRetry}) => (
  <View style={[ styles.container]}>
    <Text style={commonStyle.boldTitle}>
      You are offline. Please check your internet connection.
    </Text>
    
    <LottieView
            source={require('./assets/offline.json')}
            style={{height: responsiveWidth(25), width: responsiveWidth(25)}}
            autoPlay
          />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000, // Ensure the offline screen appears above other content
    backgroundColor: commonColor.MAIN,
    padding: responsiveWidth(2),
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default OfflineScreen;
