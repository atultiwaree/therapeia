import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

export const commonColor = {
    "MAIN" : "#F1EFE7",
    "BLACK" : "#282828"
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
    color : "#282828",
    fontWeight : "600",
    fontSize : responsiveFontSize(2.3),
    textAlign : 'center'
  },

  blueText: {
    color: 'blue',
  },
  redText: {
    color: 'red',
  },
});

export default commonStyle;
