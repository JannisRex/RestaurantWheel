// @flow strict
import { Platform } from 'react-native'
const isIOS = Platform.OS === 'ios'

export default {
  COLOR_TEXT: 'rgb(255, 255, 240)',
  FONT_FAMILY_TITLE: 'impact',
  FONT_FAMILY_CAPTION: 'lato_lightitalic',
  FONT_FAMILY_TEXT_ANDROID: 'Roboto',
  FONT_FAMILY_TEXT_IOS: 'San Francisco',
  FONT_FAMILY_TEXT: isIOS ? 'San Francisco' : 'Roboto',
  FONT_SIZE_TINY: 15,
  FONT_SIZE_SMALL: 22,
  FONT_SIZE_MEDIUM: 28,
  FONT_SIZE_LARGE: 35,
  FONT_SIZE_LARGER: 42,
  FONT_SIZE_TESTING: 55,
  FONT_WEIGHT_THIN: '100',
  FONT_WEIGHT_LIGHT: '300',
  FONT_WEIGHT_MEDIUM: '600',
  FONT_WEIGHT_HEAVY: '800',

  COLOR_WHITE: 'rgb(255, 255, 255)',
  COLOR_IVORY: 'rgb(255, 255, 240)',
  COLOR_HONEYDEW: 'rgb(240, 255, 240)',
  COLOR_LIGHTGRAY: 'rgb(159,161,163)',
  COLOR_BACKGROUND: 'rgb(55, 58, 60)',
  COLOR_HEADER: 'rgb(35, 38, 40)',
  COLOR_BUTTON_DARK: '#2E1114',
  COLOR_BUTTON_LIGHT: '#7395AE',
  COLOR_TINT: '#2f95dc'
}
