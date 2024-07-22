import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {navigate} from './RootNavigation';

const CategoryBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('profile')}>
      <Image
        style={{height: responsiveWidth(10), width: responsiveWidth(10)}}
        source={require('../assets/icons/setting.png')}
      />
    </TouchableOpacity>
  );
};

export default CategoryBack;
