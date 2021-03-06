// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { NavigationScreenProp } from 'react-navigation'
import { DynamicScrollView } from '../../components/index'
import TabBarIcon from '../../lib/TabBarIcon'
import styles from './styles'
import theme from '../../config/theme.style'

const isIOS = Platform.OS === 'ios'

// colors for different states of isOpened
const colorGreen = '#7CFC00'
const colorRed = '#8b0000'

type Props = {
  navigation: NavigationScreenProp<any>,
  getParam: Function,
  pickedRestaurant: pickedRestaurant
}

type State = {
  browserResult: {} | null,
  isOpened: boolean
}

class DetailScreen extends Component<Props, State> {
  static navigationOptions = ({ navigation }: {navigation: NavigationScreenProp<any>}) => {
    return {
      title: (navigation.state.params.itemTitle).slice(1, -1),
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
  constructor() {
    super()

    this.state = {
      browserResult: null,
      isOpened: false
    }
  }

_handleLinkPress = async () => {
  const { navigation } = this.props
  const pickedRestaurant = navigation.getParam('detailData', {})
  const url = pickedRestaurant.website

  let browserResult = await WebBrowser.openBrowserAsync(url)
  this.setState({ browserResult })
}

_checkIfOpened = (time: string): void => {
  // convert time:string to time:date (probaly just MM-HH-DD-MM-YYYY)
  console.log('checking if opened @currentTime: ' + time)

  const someBool = true

  if (someBool) {
    this.setState({
      isOpened: true
    })
  }
}

_renderFoodIcon = () => {
  // some logic for
  // picking correct Icon
  return (
    <TabBarIcon
      class='Ionicons'
      name={isIOS ? 'ios-pizza' : 'md-pizza'}
    />
  )
}

componentDidMount() {
  this._checkIfOpened()
}

render() {
  const { navigation } = this.props
  const pickedRestaurant = navigation.getParam('detailData', null)
  const titleText = JSON.stringify(pickedRestaurant.title)

  return !pickedRestaurant ?
    <View><Text> something bad happened... </Text></View> :

    <DynamicScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>type: {(JSON.stringify(pickedRestaurant.sector).slice(1, -1))}</Text>
          <Text style={styles.bodyText}>food: {(JSON.stringify(pickedRestaurant.food).slice(1, -1))}</Text>
          {this._renderFoodIcon()}
          <Text style={styles.bodyText} onPress={this._handleLinkPress}>link: http://www.website.com</Text>
          <Text style={styles.bodyText}>phone: {(JSON.stringify(pickedRestaurant.phone).slice(1, -1))}</Text>
          <Text style={styles.bodyText}>street: {(JSON.stringify(pickedRestaurant.adress).slice(1, -1))}</Text>
          { this.state.isOpened ?
            <Text style={[styles.bodyText, { color: colorGreen }]}>open</Text> :
            <Text style={[styles.bodyText, { color: colorRed }]}>not opened</Text> }
        </View>
      </View>
    </DynamicScrollView>
}
}

export default DetailScreen
