import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../../Styles/AppStyles';

import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { counsellingData, treatmentType } from '../../../assets/data';



const WhatWorks = () => {
  const EachCategoryBox = ({item}) => {

    return (
      <TouchableOpacity
        style={[
          commonStyle.button,
          {
            width: responsiveWidth(85),
            backgroundColor: commonColor.BLACK,
            flexDirection : 'row',
            justifyContent : 'space-around',
            alignItems : 'center'
          },
        ]}
     >



        <View style = {styles.deeperImages}>
        <Image  source={item.path} resizeMethod='resize' resizeMode='contain' style = {{width : "100%", height : "100%"}}/>
        </View>


        <Text
          style={[
            commonStyle.boldTitle,
            {
              fontFamily: 'Poppins-SemiBold',
              fontSize: responsiveFontSize(2.2),
              marginTop: responsiveWidth(2),
              color: '#fff',
              width : responsiveWidth(60),
              textAlign : 'left'
            },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyle.container}>
      <Text
        style={[
          commonStyle.boldTitle,
          {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
        ]}>
        What brings you in Today
      </Text>

      <FlatList
        data={treatmentType}
        renderItem={({item, index}) => <EachCategoryBox item={item} />}
        style={{
          marginTop: responsiveWidth(10),          
        }}
        contentContainerStyle = {{justifyContent : 'center', alignItems : 'center'}}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default WhatWorks;

const styles = StyleSheet.create({
    deeperImages : {
        height : responsiveWidth(19),
        width : responsiveWidth(9),
        resizeMode : "contain"
    }
});
