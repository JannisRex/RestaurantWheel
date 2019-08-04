import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../../lib/TabBarIcon'

import SpinScreen from '../../screens/spin/main'
import CustomSpinScreen from '../../screens/customSpin/main'

const StackA = createStackNavigator({
  SpinScreen: SpinScreen
})

StackA.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      class='Ionicons'
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const StackB = createStackNavigator({
  CustomSpinScreen: CustomSpinScreen
})

StackB.navigationOptions = {
  tabBarLabel: 'inOut',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      class='Entypo'
      focused={focused}
      name='aircraft'
    />
  )
}

export default createAppContainer(createBottomTabNavigator({
  SpinScreen,
  CustomSpinScreen
}))
