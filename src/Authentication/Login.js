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

const EachBoxComponent = ({item, index, loader, setLoader}) => {
  const dispatch = useDispatch();
  const [localLoader, setLocalLoader] = useState(false); // Local loading state

  const handleEachPress = useCallback(async index => {
    if (index === 2) {
      navigate('Signin');
    }

    if (index === 0) {
      console.log('Google signin');
      setLocalLoader(true); // Show local loader

      try {
        let userInformation = await authSystem.googleSignIn();
        dispatch(addUser(userInformation));
        dispatch(setEmail({email : userInformation.email}))

        
      } catch (error) {
        console.error(error);
      } finally {
        setLocalLoader(false); // Hide local loader
      }
    }
  }, []);

  return (
    <Pressable
      style={[
        styles.eachBox,
        {flexDirection: 'row', gap: responsiveWidth(4)},
        commonStyle.everyCenter,
      ]}
      onPress={() => handleEachPress(index)}>
      {localLoader ? (
        <ActivityIndicator color={'#282828'} size={'small'} />
      ) : (
        <>
          <View style={styles.eachBoxImage}>
            <Image
              source={item.path}
              resizeMethod="resize"
              resizeMode="contain"
              style={{width: '100%'}}
            />
          </View>

          <Text style={styles.eachBoxText}>{item.title}</Text>
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
          renderItem={props => (
            <EachBoxComponent
              {...props}
              setLoader={setGlobalLoader} // No longer used, local loader manages itself
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: responsiveWidth(2)}} />
          )}
          style={{marginTop: responsiveWidth(16)}}
        />

        <MarginVertical size={8} />

        <Text
          style={[
            commonStyle.boldTitle,
            {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
          ]}>
          Don't have account?{' '}
          <Text onPress={() => navigate('Signup')} style={{color: '#548235'}}>
            Sign Up
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
