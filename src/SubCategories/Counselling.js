import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {counsellingData} from '../../assets/data';
import { navigate } from '../../Navigation/RootNavigation';

const Counselling = () => {
  const EachCategoryBox = ({item}) => {


    return (
      <TouchableOpacity
        style={[
          commonStyle.button,
          {
            width: responsiveWidth(35),
            backgroundColor: commonColor.BLACK,
          },
        ]}
        onPress={() => navigate("whatWorks")}
     >

        <Text
          style={[
            commonStyle.boldTitle,
            {
              fontFamily: 'Poppins-SemiBold',
              fontSize: responsiveFontSize(2.0),
              marginTop: responsiveWidth(2),
              color: '#fff',
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
        data={counsellingData}
        renderItem={({item, index}) => <EachCategoryBox item={item}  />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        style={{
          marginTop: responsiveWidth(10),
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Counselling;

const styles = StyleSheet.create({});
