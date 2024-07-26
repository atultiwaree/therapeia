import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../../Styles/AppStyles';

import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { counsellingData, intervationData, treatmentType } from '../../../assets/data';



const Intervation = () => {
  const EachCategoryBox = ({item}) => {

    return (
      <TouchableOpacity
        style={[
          commonStyle.button,
          {
            width: responsiveWidth(85),
            backgroundColor: commonColor.BLACK,
          },
        ]}
     >
        <Text
          style={[
            commonStyle.boldTitle,
            {
              fontFamily: 'Poppins-SemiBold',
              fontSize: responsiveFontSize(2),
              marginTop: responsiveWidth(2),
              color: '#fff',
              width : responsiveWidth(80),
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
        Interventions
      </Text>

      <FlatList
        data={intervationData}
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

export default Intervation;

const styles = StyleSheet.create({
    deeperImages : {
        height : responsiveWidth(19),
        width : responsiveWidth(9),
        resizeMode : "contain"
    }
});
