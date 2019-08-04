import React, { Component } from 'react'
import { View } from 'react-native'
import { getRestaurant, Settings } from '../../components/index'
import Swiper from 'react-native-swiper'


class SpinScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Swiper

        />
        <View>
          <getRestaurant />
        </View>
        <View>
          <Settings />
        </View>
      </View>
    )
  }
}


export default SpinScreen
