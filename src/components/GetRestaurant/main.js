// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'
import { cologneRestaurants } from '../../assets/data/cologneRestaurants'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import theme from '../../config/theme.style'
import styles from './styles'

type Props = {
  navigation: NavigationScreenProp<any>,
}

type State = {
  isLoading: boolean,
  restaurantPicked: boolean,
  pickedRestaurant: pickedRestaurant | null
}

class getRestaurant extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      restaurantPicked: false,
      pickedRestaurant: null
    }
  }

_getRandomEntry = (data: Array<Object>) => {
  const { restaurantPicked } = this.state

  if (!restaurantPicked) {
    this.setState({ restaurantPicked: true })

    const pickedRestaurant = data[Math.floor(Math.random() * data.length)]
    this.setState({ pickedRestaurant }, () => this._handleFinishLoading())
  }
}

_handleFinishLoading = () => {
  this.setState({ isLoading: false }, this.setState({ restaurantPicked: false }))
}


_handleButtonPress = () => {
  this._getRandomEntry(cologneRestaurants)
}

_handleRestaurantPress = () => {
  const { pickedRestaurant } = this.state
  const restaurantName = pickedRestaurant ? JSON.stringify(pickedRestaurant.name) : null

  this.props.navigation.navigate('DetailScreen', {
    itemTitle: restaurantName,
    detailData: pickedRestaurant
  })
}

_renderRestaurant = () => {
  const { pickedRestaurant } = this.state

  if (pickedRestaurant) {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this._handleRestaurantPress}>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.name)}</Text>
      </View>
    )
  }

  return <Text style={styles.text}>Use Button</Text>
}

render() {
  return (
    <>
    <View style={[styles.container, { marginTop: 10 }]}>
      <Button
        onPress={this._handleButtonPress}
        title='Get Restaurant'
        color={theme.COLOR_BUTTON_DARK} />
    </View>

      <View style={styles.container}>
        {this._renderRestaurant()}
      </View>
  </>
  )
}
}
export default withNavigation(getRestaurant)
