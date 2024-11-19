import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import commonStyle, {commonColor} from '../../Styles/AppStyles';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import { navigate } from '../../Navigation/RootNavigation';

const CategoryCard = ({item, index}) => {
  const isEven = index % 2 === 0;

  const handleEachCategory = index => {
    
    if (index === 0) {
      navigate('counselling');
    }

    if(index === 1) {
      navigate("plans")
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

  return (
    <View style={[styles.card, {}]}>
      {isEven ? (
        <>
          {/* Text First */}
          <View style={[styles.textContainer, {marginRight: 10}]}>
            <Pressable onPress={() => handleEachCategory(index)} style={[commonStyle.categoryButton]}>
              <Text style={[commonStyle.categoryButtonText]}>
                {item.titles}
              </Text>
            </Pressable>

            <Text
              style={[
                commonStyle.fontBoldTitle,
                {
                  color: commonColor.CATEGORY_TITLE,
                  fontSize: responsiveFontSize(1.6),
                  fontWeight: 300,
                },
              ]}>
              Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.
            </Text>
          </View>

          <Image source={item.path} style={styles.image} resizeMode="contain" />
        </>
      ) : (
        <>
          {/* Image First */}
          <Image source={item.path} style={styles.image} resizeMode="contain" />

          <View style={[styles.textContainer, {marginLeft: 10}]}>
            <Pressable style={[commonStyle.categoryButton]}>
              <Text style={[commonStyle.categoryButtonText]}>
                {item.titles}
              </Text>
            </Pressable>

            <Text
              style={[
                commonStyle.fontBoldTitle,
                {
                  color: commonColor.CATEGORY_TITLE,
                  fontSize: responsiveFontSize(1.6),
                  fontWeight: 300,
                },
              ]}>
              Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#002D4C', // Dark blue background
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    // marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EAF0F7', // Light text color
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 120,
  },
});
