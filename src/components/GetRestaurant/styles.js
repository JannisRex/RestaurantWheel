import { StyleSheet } from 'react-native'
import theme from '../../config/theme.style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  text: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.COLOR_IVORY,
    textAlign: 'center',
    paddingHorizontal: 10
  }
})

export default styles
