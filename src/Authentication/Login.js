import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../Styles/AppStyles';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {logins} from '../../assets/data';
import { navigate } from '../../Navigation/RootNavigation';


const handleEachPress = (index) => {
  
    if(index === 2) {
      navigate("Signup")
    }
}

const EachBoxComponent = ({item, index}) => {
  return (
    <Pressable
      style={[
        styles.eachBox,
        {flexDirection: 'row', gap: responsiveWidth(4)},
        commonStyle.everyCenter,
      ]}

      onPress={handleEachPress.bind(null, index)}
      
      >
      <View style={styles.eachBoxImage}>
        <Image
          source={item.path}
          resizeMethod="resize"
          resizeMode="contain"
          style={{width: '100%'}}
        />
      </View>

      <Text style={styles.eachBoxText}>{item.title}</Text>
    </Pressable>
  );
};

const Login = () => {
  return (
    <View
      style={[
        commonStyle.container,
        commonStyle.everyCenter,
      ]}>
      <View style={styles.box}>
        <Text style={commonStyle.boldTitle}>Welcome to</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>

        <Text style={[commonStyle.boldTitle, {fontFamily: 'Poppins-Regular'}]}>
          Step Closer to Self-Care
        </Text>

        <FlatList
          data={logins}
          renderItem={props => <EachBoxComponent {...props} />}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: responsiveWidth(2)}} />
          )}
          style={{marginTop: responsiveWidth(16)}}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
  image: {
    // height : responsiveWidth(20),
    width: '100%',
  },
  imageContainer: {
    height: responsiveWidth(16),
    width: responsiveWidth(60),
    // borderWidth : 1,
    resizeMode: 'contain',
    ...commonStyle.everyCenter,
    alignSelf: 'center',
    marginVertical: responsiveWidth(16),
  },
  eachBox: {
    borderWidth: commonSize.BORDER_WIDTH,
    borderColor: commonColor.LIGHT_BORDER,
    borderRadius: commonSize.BORDER_RADIUS,
    flexDirection: 'row',
    width: responsiveWidth(74),
    alignSelf: 'center',
    paddingVertical: responsiveWidth(4),
  },
  eachBoxImage: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    ...commonStyle.everyCenter,
  },
  eachBoxText: {
    fontFamily: 'Poppins-Medium',
    fontSize: responsiveFontSize(2.3),
    color: commonColor.BLACK,
    // borderWidth : 1,
    width: responsiveWidth(54),
  },
});
