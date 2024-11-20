import {StyleSheet, Text, View, TouchableOpacity, Image, Pressable} from 'react-native';
import React from 'react';
import commonStyle, {
  commonColor,
  commonSize,
  MarginVertical,
} from '../../../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ActionTherapist from '../../Components/ActionTherapist';
import {navigate} from '../../../Navigation/RootNavigation';

const AIScreen = () => {
  return (
    <View style={[commonStyle.container, {paddingHorizontal : responsiveWidth(2)}]}>
      <Text
        style={[
          commonStyle.fontBoldTitle,
          {textAlign: 'center', fontSize: responsiveFontSize(2.3)},
        ]}>
        Talk to, Your AI Therapist
      </Text>

      {/* <View style={{width: '100%', alignItems: 'center'}}> */}
      {/* <ActionTherapist
          heading={'Ella'}
          title={'Your AI Therapist'}
          path={require('../../../assets/images/robot.png')}
          type = {"AIWindow"}
        /> */}
      {/* </View> */}

      <MarginVertical size={20} />

      <Image
        source={require('../../../assets/images/robot.png')}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />

      <MarginVertical size={20} />

      <Text
        style={[
          commonStyle.fontBoldTitle,
          {fontWeight: 500, fontSize: responsiveFontSize(3), textAlign : 'center'},
        ]}>
        Hi I'm{' '}
        <Text onPress={() => console.log('fuck off')} style={{fontWeight: 600, color : '#E74E4E'}}>
        Ella{'\n'}
        </Text>
        Your AI Assistant
      </Text>

      <MarginVertical size={12} />

      <Pressable style={[commonStyle.button]} onPress={() => navigate("chatwindow")}>
        <Text
          style={[
            commonStyle.fontBoldTitle,

            {
              textAlign: 'center',
              color: '#fff',
            },
          ]}>
          Get Started
        </Text>
      </Pressable>

    </View>
  );
};

export default AIScreen;

const styles = StyleSheet.create({
  image: {
    width: '82%',
    height: responsiveWidth(60),
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
});
