// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, Dimensions, View } from 'react-native'
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

const letter = ' aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ<>'

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

_handleFinishLoading = async () => {
  await this.setState({ isLoading: false }, this.setState({ restaurantPicked: false }))
  await this._handleSpinTo()
}


_handleButtonPress = () => {
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
    // this.refs.slot.spinTo('fastfood')
    const slotName = JSON.stringify(this.state.pickedRestaurant.food)
    this.refs.slot.spinTo(slotName)
  } catch (e) {
    console.log(e)
    this.refs.slot.spinTo('ERROR')
  }
}

render() {
  const deviceWidth = Dimensions.get('window').width
  const charCount = 8
  const slotWidth = Math.floor((deviceWidth - 50) / charCount)

  return (
    <>
    <View style={[styles.container, { marginTop: 10 }]}>
      <Button
        onPress={this._handleButtonPress}
        title='Get Restaurant'
        color={theme.COLOR_BUTTON_DARK} />
    </View>
      <View
        style={[styles.container, { flex: 3 }]}>
        <View onStartShouldSetResponder={this._handleRestaurantPress}>
          <SlotMachine
            ref='slot'
            initialAnimation={false}
            padding={charCount}
            defaultChar={' '}
            text='<BUTTON>'
            range={letter}
            height={45}
            width={slotWidth} />
        </View>
      </View>
  </>
  )
}
}
export default withNavigation(getRestaurant)
