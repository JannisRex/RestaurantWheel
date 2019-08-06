// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, View } from 'react-native'
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
    this.setState({ pickedRestaurant }, this._handleFinishLoading)
  }
}

_handleFinishLoading = () => {
  // JSON.stringify(this.state.pickedRestaurant.sector)
  this.refs.slot.spinTo('AAAAAAAA')
  this.setState({ isLoading: false }, this.setState({ restaurantPicked: false }))
}


_handleButtonPress = () => {
  this.refs.slot.spinTo('AAAAAAAA')
  this._getRandomEntry(cologneRestaurants)
}

_handleRestaurantPress = () => {
  const { pickedRestaurant } = this.state

  if (pickedRestaurant) {
    if (pickedRestaurant.name) {
      const restaurantName = JSON.stringify(pickedRestaurant.name)

      this.props.navigation.navigate('DetailScreen', {
        itemTitle: restaurantName,
        detailData: pickedRestaurant
      })
    }
  }
}

_handleSpinTo = () => {
  try {
    this.refs.slot.spinTo('AAAAAAAA')
    // this.refs.slot.spinTo(JSON.stringify(this.state.pickedRestaurant.food))
  } catch (e) {
    console.log(e)
    this.refs.slot.spinTo('ERROR')
  }
}

_renderRestaurant = () => {
  const charCount = 8

  return (
    <View
      style={[styles.container, { flex: 3, backgroundColor: 'tomato' }]}
      onStartShouldSetResponder={this._handleRestaurantPress}>
      <SlotMachine
        ref='slot'
        initialAnimation={false}
        padding={charCount}
        defaultChar={'A'}
        text='BUTTON'
        range={letter}
        height={45}
        width={35}
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
