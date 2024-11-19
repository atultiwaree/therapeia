import {Platform, StyleSheet, View} from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const commonColor = {
  MAIN: '#f4f4f4',
  BLACK: '#282828',
  LIGHT_BORDER: '#fff',
  BACKGROUND_GREY: '#e7e9f1',
  WHITE: '#fff',
  BLUE: '#0b3954',
  CATEGORY_BTN_TXT: '#cce4fb',
  CATEGORY_TITLE : '#E5E5E5'
};

export const commonSize = {
  BORDER_WIDTH: responsiveWidth(0.4),
  BORDER_RADIUS: responsiveWidth(2),
  BTN_FONT_SIZE: responsiveFontSize(2.1),
};

export const MarginVertical = ({size}) => {
  return <View style={{marginTop: responsiveWidth(size)}} />;
};

// export const ImageComponent = ({}) => {
//   return (
//     <View>
//       <></>
//     </View>
//   )
// }

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColor.MAIN,
    padding: responsiveWidth(2),
  },
  everyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldTitle: {
    color: commonColor.BLACK,
    fontSize: responsiveFontSize(2.6),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  blueText: {
    color: 'blue',
  },
  redText: {
    color: 'red',
  },
  textInput: {
    borderWidth: commonSize.BORDER_WIDTH,
    borderColor: commonColor.LIGHT_BORDER,
    borderRadius: commonSize.BORDER_RADIUS,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: responsiveWidth(4),
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginVertical: responsiveWidth(2),
    padding: Platform.OS === 'ios' ? responsiveWidth(4) : null,
  },
  button: {
    padding: responsiveWidth(3),
    backgroundColor: commonColor.BLUE,
    borderRadius: commonSize.BORDER_RADIUS,
    marginTop: responsiveWidth(8),
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: commonSize.BTN_FONT_SIZE,
    color: commonColor.BLACK,
    overflow: 'hidden',
    fontSize: responsiveFontSize(2.1),
  },

  fontBoldTitle: {
    fontFamily: 'Rubik',
    fontSize: responsiveFontSize(2.3),
    fontWeight: 500,
    color: commonColor.BLUE,
  },

  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2.65,
    elevation: 7,
  },

  label: {
    fontFamily: 'Rubik',
    fontSize: responsiveFontSize(2.1),
    fontWeight: 500,
    color: commonColor.BLUE,
    marginBottom: responsiveWidth(2),
  },

  input: {
    height: 50,
    borderWidth: commonSize.BORDER_WIDTH,
    borderColor: commonColor.BLUE,
    borderRadius: commonSize.BORDER_RADIUS,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    fontSize: 24,
    color: '#2c5364',
  },

  categoryButton: {
    padding: responsiveWidth(2),
    backgroundColor: commonColor.BLUE,
    borderRadius: responsiveWidth(3),
    marginVertical: responsiveWidth(4),
    textAlign: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#7596b0",
  },

  categoryButtonText: {
    color: commonColor.CATEGORY_BTN_TXT,
    fontFamily: 'Rubik',
    fontSize: responsiveFontSize(2),
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default commonStyle;
