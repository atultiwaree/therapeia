import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import commonStyle, {
  MarginVertical,
  commonColor,
  commonSize,
} from '../../Styles/AppStyles';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {logins} from '../../assets/data';
import {navigate} from '../../Navigation/RootNavigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import authSystem from '../../OAuth';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, setEmail} from '../../redux/reducers/Auth';
import {useNavigation} from '@react-navigation/native';
import DividerWithText from '../Components/Divider';

const EachBoxComponent = ({item, index, loader, setLoader}) => {
  const dispatch = useDispatch();
  const [localLoader, setLocalLoader] = useState(false); // Local loading state

  const handleEachPress = useCallback(async index => {
    if (index === 1) {
      navigate('Signin');
    }

    if (index === 0) {
      console.log('Google signin');
      setLocalLoader(true); // Show local loader

      try {
        let userInformation = await authSystem.googleSignIn();
        
        dispatch(addUser(userInformation));
        dispatch(setEmail({email: userInformation.email}));
      } catch (error) {
        console.error(error);
      } finally {
        setLocalLoader(false); // Hide local loader
      }
    }
  }, []);

  return (
    <Pressable
      style={[styles.eachBox, {flexDirection: 'row'}, commonStyle.everyCenter, commonStyle.shadowStyle]}
      onPress={() => handleEachPress(index)}>
      {localLoader ? (
        <ActivityIndicator color={'#282828'} size={'large'} />
      ) : (
        <>
          <View style={styles.eachBoxImage}>
            <Image
              source={item.path}
              resizeMethod="resize"
              resizeMode="contain"
              style={{width: '70%'}}
            />
          </View>

          <Text
            style={[
              styles.eachBoxText,
              commonStyle.fontBoldTitle,
              {
                fontSize: responsiveFontSize(1.8),
                width: responsiveWidth(50),
                paddingLeft: responsiveWidth(2),
              },
            ]}>
            {item.title}
          </Text>
        </>
      )}
    </Pressable>
  );
};

const Login = () => {
  const [globalLoader, setGlobalLoader] = useState(false);

  return (
    <View style={[commonStyle.container, commonStyle.everyCenter]}>
      <View style={styles.box}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Welcome.png')}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>

        <Text style={[commonStyle.fontBoldTitle, {textAlign: 'center'}]}>
          Step Closer to Self-Care
        </Text>

        <FlatList
          data={logins}
          renderItem={props => (
            <EachBoxComponent {...props} setLoader={setGlobalLoader} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: responsiveWidth(3)}} />
          )}
          style={{marginTop: responsiveWidth(14), paddingBottom : 10}}
        />

          <DividerWithText/>

        {/* <MarginVertical size={8} /> */}

        <Text
          style={[
            commonStyle.fontBoldTitle,
            {textAlign : 'center', color : commonColor.BLACK, fontSize : responsiveFontSize(2), fontWeight : 400},
          ]}>
          Don't have account?{' '}
          <Text onPress={() => navigate('Signup')} style={{color: commonColor.BLUE, fontWeight : 500}}>
            SignUp
          </Text>
        </Text>
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
    width: '92%',
  },
  imageContainer: {
    height: responsiveWidth(16),
    width: responsiveWidth(70),
    // borderWidth : 1,
    resizeMode: 'contain',
    ...commonStyle.everyCenter,
    alignSelf: 'center',
    marginBottom: responsiveWidth(14),
  },
  eachBox: {
    borderWidth: commonSize.BORDER_WIDTH,
    borderColor: commonColor.BLUE,
    borderRadius: commonSize.BORDER_RADIUS,
    flexDirection: 'row',
    width: responsiveWidth(72),
    alignSelf: 'center',
    paddingVertical: responsiveWidth(2),
    backgroundColor :"#fff",

  },
  eachBoxImage: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    ...commonStyle.everyCenter,
  },
});
