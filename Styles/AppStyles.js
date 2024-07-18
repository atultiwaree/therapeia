import {StyleSheet, View} from 'react-native';
import {responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

export const commonColor = {
    "MAIN" : "#F1EFE7",
    "BLACK" : "#282828",
    "LIGHT_BORDER" : "#AFABAB"
}

export const commonSize = {
  "BORDER_WIDTH" : responsiveWidth(0.8),
  "BORDER_RADIUS" : responsiveWidth(2)
}


export const MarginVertical = ({size}) => {
    return <View style = {{marginTop : responsiveWidth(size)}}/>
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
    fontFamily : 'Poppins-SemiBold'
  },

  blueText: {
    color: 'blue',
  },
  redText: {
    color: 'red',
  },
  textInput : {
    borderWidth: commonSize.BORDER_WIDTH,
    borderColor: commonColor.LIGHT_BORDER,
    borderRadius: commonSize.BORDER_RADIUS,
    fontFamily : 'Poppins-Medium',
    paddingHorizontal : responsiveWidth(4),
    width: responsiveWidth(80),
    alignSelf : 'center',
    marginVertical : responsiveWidth(2)
  }
});

export default commonStyle;
