import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import commonStyle, {MarginVertical} from '../Styles/AppStyles';
import authSystem from '../OAuth';
import {useSelector} from 'react-redux';

const Profile = () => {
  let userInfo = useSelector(state => state.auth.profile);

  return (
    <View style={commonStyle.container}>
      <View style={styles.nameDpContainer}>
        <View style={styles.dpContainer}>
          <Image
            resizeMode="contain"
            source={
              userInfo.profile === undefined
                ? require('../assets/images/user.png')
                : {uri: userInfo.profile}
            }
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </View>

        <MarginVertical size={8} />

        <Text style={[commonStyle.boldTitle]}>{`👋 Hi! ${userInfo.name}`}</Text>
      </View>

      <Text onPress={() => authSystem.signOut()} style={commonStyle.button}>
        Sign out
      </Text>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  nameDpContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    paddingVertical: 10,
    // backgroundColor: '#fff',
    borderRadius: 15,
  },
  dpContainer: {
    height: 120,
    width: 120,
    borderRadius: 100,
    overflow: 'hidden',
    // borderWidth: 1,
    backgroundColor: '#fff',
  },
});
