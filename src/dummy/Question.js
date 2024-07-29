import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyle, { commonColor } from '../../Styles/AppStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { howToCommunicate } from '../../assets/data';




const Question = () => {


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
                  width: responsiveWidth(80),
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
        How do you like to communicate with your therapist ?
      </Text>


      <FlatList
        data={
          howToCommunicate
        }
        renderItem={({item, index}) => <EachCategoryBox item={item} />}
        style={{
          marginTop: responsiveWidth(10),
        }}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        keyExtractor={item => item.id}
      />

    

    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
