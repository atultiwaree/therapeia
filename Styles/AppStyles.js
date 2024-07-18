import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

export const commonColor = {
    "MAIN" : "#F1EFE7",
    "BLACK" : "#282828",
    "LIGHT_BORDER" : "#AFABAB"
}

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColor.MAIN,
    padding : responsiveWidth(2)
  },
  everyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldTitle : {
    color : commonColor.BLACK,
    fontSize : responsiveFontSize(2.6),
    textAlign : 'center',
    fontFamily : 'Poppins-Medium'
  },

  blueText: {
    color: 'blue',
  },
  redText: {
    color: 'red',
  },
});

export default commonStyle;
