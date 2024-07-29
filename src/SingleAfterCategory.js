import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  afterCommunityCategory,
  anxietyDataResources,
  counsellingData,
  intervationData,
  mediTationMethod,
  therapistEnrollMent,
  treatmentType,
} from '../assets/data';
import {navigate} from '../Navigation/RootNavigation';

const SingleAfterCategory = ({route}) => {
  const handleEach = id => {
    if (route?.params?.category === 'community') {
      navigate('intervation', {category: 'community'});
    }
    if(route?.params?.category === "therapist") {
      navigate('intervation', {category: 'therapist'});
    }
  };

  const EachCategoryBox = ({item}) => {
    console.log(route?.params?.category);

    return (
      <TouchableOpacity
        style={[
          commonStyle.button,
          {
            width: responsiveWidth(85),
            backgroundColor: commonColor.BLACK,
          },
        ]}
        onPress={() => handleEach(item.id)}>
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
        { route?.params?.category === 'therapist' ? "Enrollment pathway" : "Interventions"}
      </Text>

      <FlatList
        data={
          route?.params?.category === 'community'
            ? afterCommunityCategory
            : route?.params?.category === 'meditation'
            ? mediTationMethod
            : route?.params?.category === 'therapist'
            ? therapistEnrollMent
            : intervationData
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

export default SingleAfterCategory;

const styles = StyleSheet.create({
  deeperImages: {
    height: responsiveWidth(19),
    width: responsiveWidth(9),
    resizeMode: 'contain',
  },
});
