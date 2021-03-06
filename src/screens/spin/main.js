import React, { Component } from 'react'
import { View } from 'react-native'
import { DynamicScrollView, Wheel, Settings } from '../../components/index'
import Swiper from 'react-native-swiper'
import styles from './styles'


class SpinScreen extends Component {
  render() {
    return (
      <DynamicScrollView>
        <Swiper
          showsPagination={false}
          index={0}>
          <View style={styles.container}>
            <Wheel />
          </View>
          <View style={styles.container}>
            <Settings />
          </View>
        </Swiper>
      </DynamicScrollView>
    )
  }
}


export default SpinScreen
