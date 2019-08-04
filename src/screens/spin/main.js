import React, { Component } from 'react'
import { View } from 'react-native'
import { GetRestaurant, Settings } from '../../components/index'
import Swiper from 'react-native-swiper'
import styles from './styles'


class SpinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          showsPagination={false}
          index={0}>
          <View style={styles.container}>
            <GetRestaurant />
          </View>
          <View style={styles.container}>
            <Settings />
          </View>
        </Swiper>
      </View>
    )
  }
}


export default SpinScreen
