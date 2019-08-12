// @flow strict
import { StyleSheet } from 'react-native'
import theme from '../../config/theme.style'

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_LARGER,
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.COLOR_IVORY
  },
  typeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  typeIcon: {
    height: 50,
    width: 50
  },
  typeText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_WHITE
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  bodyText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_WHITE
  }
})

export default styles
