// @flow
import type { pickedRestaurant } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'
import { cologneRestaurants } from '../../assets/data/cologneRestaurants'
import styles from './styles'

type Props = {}

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


_handleOnPress = () => {
  this._getRandomEntry(cologneRestaurants)
}

_renderRestaurant = () => {
  const { pickedRestaurant } = this.state

  if (pickedRestaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.name)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.sector)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.food)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.website)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.phone)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.address)}</Text>
        <Text style={styles.text}>{JSON.stringify(pickedRestaurant.times)}</Text>
      </View>
    )
  }

  return <Text>Use Button</Text>
}

render() {
  return (
    <>
    <View style={[styles.container, { marginTop: 10 }]}>
      <Button
        onPress={this._handleOnPress}
        title='Get Restaurant'
        color='#4e2026' />
    </View>

      <View style={styles.container}>
        {this._renderRestaurant()}
      </View>
  </>
  )
}
}
export default getRestaurant
