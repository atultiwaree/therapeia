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
import commonStyle, {commonColor, commonSize, MarginVertical} from '../Styles/AppStyles';
import {counsellingCategory} from '../assets/data';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {navigate} from '../Navigation/RootNavigation';
import CategoryCard from './Components/CategoryCard';

const CategoryScreen = () => {



  // const EachCategoryBox = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.box}
  //       onPress={() => handleEachCategory(item.id)}>
  //       <Image
  //         source={item.path}
  //         resizeMethod="resize"
  //         resizeMode="contain"
  //         style={{
  //           width: '35%',
  //           height: responsiveWidth(20),
  //         }}
  //       />

  //       <Text
  //         style={[
  //           commonStyle.boldTitle,
  //           {
  //             fontFamily: 'Poppins-SemiBold',
  //             fontSize: responsiveFontSize(1.8),
  //             marginTop: responsiveWidth(2),
  //           },
  //         ]}>
  //         {item.title}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={commonStyle.container}>
      <FlatList
        data={counsellingCategory}
        renderItem={({item, index}) => <CategoryCard item={item} index = {index}/>}
        style={{
          marginTop: responsiveWidth(10),
        }}
        ItemSeparatorComponent={() => <MarginVertical size={10}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  box: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    padding: responsiveWidth(2),
    ...commonStyle.everyCenter,
    backgroundColor: commonColor.BACKGROUND_GREY,
    margin: responsiveWidth(2),
    marginVertical: responsiveWidth(6),
    borderRadius: commonSize.BORDER_RADIUS,
    borderWidth: 1,
  },
});
