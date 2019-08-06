// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'
import { cologneRestaurants } from '../../assets/data/cologneRestaurants'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import SlotMachine from 'react-native-slot-machine'
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

const letter = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'

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

// {styles.text}>{JSON.stringify(pickedRestaurant.name)}

_renderRestaurant = () => {
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => this.refs.slot.spinTo('RESTAURANT NAME')}>
      <SlotMachine
        ref='slot'
        initialAnimation={false}
        text='PRESS BUTTON'
        range={letter}
        height={45}
        width={30}
      />
    </View>
  )
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
