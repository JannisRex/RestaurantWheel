// @flow
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { DynamicScrollView } from '../../components/index'
import styles from './styles'
import theme from '../../config/theme.style'

type Props = {
  navigation: NavigationScreenProp<any>,
  getParam: Function,
}

class DetailScreen extends Component<Props> {
  static navigationOptions = ({ navigation }: {navigation: NavigationScreenProp<any>}) => {
    return {
      title: navigation.state.params.itemTitle,
      headerStyle: {
        backgroundColor: theme.COLOR_HEADER
      },
      headerTitleStyle: {
        color: theme.COLOR_IVORY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontFamily: theme.FONT_FAMILY_CAPTION
      }
    }
  }

  render() {
    const { navigation } = this.props
    const itemID = navigation.getParam('itemID', null)
    const detailData = navigation.getParam('detailData', [])

    const titleText = 'a'
    const bodyText = 'b'

    return !itemID ?
      <View><Text> something bad happened... </Text></View> :

      <DynamicScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
              {bodyText}
            </Text>
          </View>
        </View>
      </DynamicScrollView>
  }
}

export default DetailScreen
