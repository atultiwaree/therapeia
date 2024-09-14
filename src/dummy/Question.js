import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import commonStyle, { commonColor } from '../../Styles/AppStyles';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { howToCommunicate } from '../../assets/data';

const Question = () => {

  const handlePress = (type) => {

    console.log(type)

    if(type === "Call"){
      Linking.openURL('tel:89787878787');
      return
    } else {
      Linking.openURL('sms:89787878787');
      return
    }


 

  };





  const EachCategoryBox = ({item}) => {

    console.log(item.title)

    return (
      <TouchableOpacity
        style={[
          commonStyle.button,
          {
            width: responsiveWidth(85),
            backgroundColor: commonColor.BLACK,
          },
        ]}
         onPress={() => handlePress(item.title)}
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
          ]}
        >
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
          { fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2) },
        ]}
      >
        How do you like to communicate with your therapist?
      </Text>

      <FlatList
        data={howToCommunicate}
        renderItem={({ item, index }) => <EachCategoryBox item={item} />}
        style={{
          marginTop: responsiveWidth(10),
        }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
