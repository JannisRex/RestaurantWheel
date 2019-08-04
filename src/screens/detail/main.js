// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { DynamicScrollView } from '../../components/index'
import styles from './styles'
import theme from '../../config/theme.style'

type Props = {
  navigation: NavigationScreenProp<any>,
  getParam: Function,
  pickedRestaurant: pickedRestaurant
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
    const pickedRestaurant = navigation.getParam('detailData', {})
    const titleText = JSON.stringify(pickedRestaurant.title)

    return !pickedRestaurant ?
      <View><Text> something bad happened... </Text></View> :

      <DynamicScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>{(JSON.stringify(pickedRestaurant.sector).slice(1, -1))}</Text>
            <Text style={styles.bodyText}>{(JSON.stringify(pickedRestaurant.food).slice(1, -1))}</Text>
            <Text style={styles.bodyText}>{(JSON.stringify(pickedRestaurant.website).slice(1, -1))}</Text>
            <Text style={styles.bodyText}>{(JSON.stringify(pickedRestaurant.phone).slice(1, -1))}</Text>
            <Text style={styles.bodyText}>{(JSON.stringify(pickedRestaurant.address).slice(1, -1))}</Text>
            <Text style={styles.bodyText}>open/not opened</Text>
          </View>
        </View>
      </DynamicScrollView>
  }
}

export default DetailScreen
