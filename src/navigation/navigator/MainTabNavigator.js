import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../../lib/TabBarIcon'
import SpinScreen from '../../screens/spin/main'
import CustomSpinScreen from '../../screens/customSpin/main'

const BottomTabNavigator = createBottomTabNavigator({

  ScreenA: {
    screen: SpinScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          class='Ionicons'
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'} />
      )
    }
  },

  ScreenB: {
    screen: CustomSpinScreen,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          class='Entypo'
          focused={focused}
          name='aircraft' />
      )
    }
  }
})

export default createAppContainer(BottomTabNavigator)
