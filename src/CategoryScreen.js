import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import commonStyle, {commonColor, commonSize} from '../Styles/AppStyles';
import {counsellingCategory} from '../assets/data';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {navigate} from '../Navigation/RootNavigation';

const CategoryScreen = () => {
  const handleEachCategory = index => {
    if (index === 0) {
      navigate('counselling');
    }

    if( index === 2 ) {
      navigate("counselling", { category : "educate" })
    }

    if( index === 6 ) {
      navigate("singleAfterCategory", { category : "community" })
    }

    if(index === 4) {
      navigate("singleAfterCategory", { category : "meditation" })
    }


    if(index === 7) {
      navigate("singleAfterCategory", { category : "therapist" })
    }

  };

  const EachCategoryBox = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => handleEachCategory(item.id)}>
        <Image
          source={item.path}
          resizeMethod="resize"
          resizeMode="contain"
          style={{
            width: '70%',
            height: responsiveWidth(20),
          }}
        />

        <Text
          style={[
            commonStyle.boldTitle,
            {
              fontFamily: 'Poppins-SemiBold',
              fontSize: responsiveFontSize(2.0),
              marginTop: responsiveWidth(2),
            },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyle.container}>
      <FlatList
        data={counsellingCategory}
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
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  box: {
    height: responsiveWidth(33),
    width: responsiveWidth(33),
    padding: responsiveWidth(2),
    ...commonStyle.everyCenter,
    backgroundColor: commonColor.BACKGROUND_GREY,
    margin: responsiveWidth(2),
    marginVertical: responsiveWidth(6),
    borderRadius: commonSize.BORDER_RADIUS,
    borderWidth: 1,
  },
});
