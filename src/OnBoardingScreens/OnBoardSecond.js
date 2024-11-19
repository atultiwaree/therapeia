import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import commonStyle, {MarginVertical} from '../../Styles/AppStyles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShownOnBoarding } from '../../redux/reducers/OnBoard';

const OnBoardSecond = () => {
  

  



  const dispatch = useDispatch();

  const handleSetShownOnBoard = () => {


    
    dispatch(setShownOnBoarding({shown : true}))


  }



  return (
    <View style={commonStyle.container}>
      <MarginVertical size={20}/>
      <Image
        source={require('../../assets/images/YogaSeHogaTwo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text
        style={[
          commonStyle.fontBoldTitle,
          {textAlign: 'center', marginVertical: 30},
        ]}>
        “Meditation is like a gym in which you develop the powerful mental
        muscles of calm and insight”
      </Text>

      <Image
        source={require('../../assets/images/WaveTwo.png')}
        style={styles.waveLine}
        resizeMode="contain"
      />
      <MarginVertical size={20} />
      <Pressable
        style={[commonStyle.button, {width: '80%', alignSelf: 'center'}]}
        onPress={() => handleSetShownOnBoard()}>
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

export default OnBoardSecond;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 300,
    marginTop: 20,
    alignSelf : 'center'
  },
  waveLine: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: responsiveWidth(18),
    width: '100%',
    // backgroundColor :"red",
    height: '100%',
  },
});
