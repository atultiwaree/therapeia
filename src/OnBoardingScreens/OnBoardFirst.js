import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import commonStyle from '../../Styles/AppStyles';

const OnBoardFirst = () => {
  return (
    <View style={commonStyle.container}>
      <Image
        source={require('../../assets/images/YogaSeHoga.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Image
        source={require('../../assets/images/Welcome.png')}
        style={styles.welcome}
        resizeMode="contain"
        onLayout={event => {
          const {height} = event.nativeEvent.layout; // Get the height
          console.log(height);
        }}
      />

      <Image
        source={require('../../assets/images/Wave.png')}
        style={styles.waveLine}
        resizeMode="contain"
      />

      <Pressable
        style={[commonStyle.button, {width: '80%', alignSelf: 'center'}]}
        onPress={() => console.log('Next Pressed')}>
        <Text
          style={[
            commonStyle.fontBoldTitle,

            {
              textAlign: 'center',
              color: '#fff',
            },
          ]}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default OnBoardFirst;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  welcome: {
    width: '70%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  waveLine: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: '16%',
    top: '18%',
    width: '90%',
    // backgroundColor :"red",
    height: '100%',
  },
});
