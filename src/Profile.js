import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import commonStyle from '../Styles/AppStyles';
import authSystem from '../OAuth';

const Profile = () => {
  return (
    <View style={commonStyle.container}>
      {/* <View style={styles.nameDpContainer}>
        <View style={styles.dpContainer}>
          <Image
            resizeMode="contain"
            source={
              userImage === undefined
                ? require("../assets/images/user.png")
                : {uri: userImage}
            }
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </View>
        <Text style={styles.userName}>{`👋 Hi! ${userName}`}</Text>
      </View> */}


<Button title='Signout' onPress={() => authSystem.signOut()} />

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
