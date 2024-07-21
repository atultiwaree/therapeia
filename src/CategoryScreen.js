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
import {responsiveWidth} from 'react-native-responsive-dimensions';

const CategoryScreen = () => {
  const EachCategoryBox = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.box}>
        <Image
          source={item.path}
          resizeMethod="resize"
          resizeMode="contain"
          style={{width: '80%'}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyle.container}>
      <FlatList
        data={counsellingCategory}
        renderItem={props => <EachCategoryBox {...props} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        style={{
          marginTop: responsiveWidth(10),
        }}
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
    backgroundColor: commonColor.BACKGROUND_GREY,
    margin: responsiveWidth(2),
    marginVertical: responsiveWidth(6),
    borderRadius: commonSize.BORDER_RADIUS,
    ...commonStyle.everyCenter,
  },
});
