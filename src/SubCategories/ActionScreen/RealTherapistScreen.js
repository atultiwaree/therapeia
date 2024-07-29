import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../../../Styles/AppStyles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ActionTherapist from '../../Components/ActionTherapist';
import {realTherapistDetails} from '../../../assets/data';
import ChooseTherapist from '../../ActionSheet/ChooseTherapist';

const RealTherapist = () => {
  const EachCategoryBox = ({item}) => {
    return (

        <ActionTherapist
          heading={item.heading}
          title={item.title}
          path={item.path}
          type = {"real"}
        />
   
    );
  };

  return (
    <View style={commonStyle.container}>
      <Text
        style={[
          commonStyle.boldTitle,
          {fontFamily: 'Poppins-Medium', marginTop: responsiveWidth(2)},
        ]}>
        Select your therapist
      </Text>

      <FlatList
        data={realTherapistDetails}
        renderItem={({item, index}) => <EachCategoryBox item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        style={{
          marginTop: responsiveWidth(10),
        }}
        keyExtractor={item => item.id}
      />

      {/* <ChooseTherapist/> */}
    </View>
  );
};

export default RealTherapist;

const styles = StyleSheet.create({});
