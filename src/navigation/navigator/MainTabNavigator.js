import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../../lib/TabBarIcon'
import SpinSwitchNavigatior from './SpinSwitchNavigatior'
import CustomSpinScreen from '../../screens/customSpin/main'
import theme from '../../config/theme.style'

const TabConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: theme.COLOR_HEADER
    },
    activeBackgroundColor: theme.COLOR_BUTTON_DARK,
    inactiveBackgroundColor: theme.COLOR_BACKGROUND,
    activeTintColor: theme.COLOR_IVORY,
    inactiveTintColor: theme.COLOR_HEADER
  }
}

const BottomTabNavigator = createBottomTabNavigator({

  ScreenA: {
    screen: SpinSwitchNavigatior,
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
}, TabConfig)

export default createAppContainer(BottomTabNavigator)
