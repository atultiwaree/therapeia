import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { commonColor } from "../../Styles/AppStyles";

const DividerWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={[styles.text, {fontWeight: 500,}]}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    paddingHorizontal : responsiveWidth(16)
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: commonColor.BLUE, // Adjust to your desired color,
    
  },
  text: {
    marginHorizontal: 10,
    fontFamily : 'Rubik',
    color: commonColor.BLUE,
    
    
  },
});

export default DividerWithText;
