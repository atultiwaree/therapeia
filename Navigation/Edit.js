import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Edit = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{height: responsiveWidth(10), width: responsiveWidth(10)}}
        source={require('../assets/icons/editing.png')}
      />
    </TouchableOpacity>
  );
  
};

export default Edit;
