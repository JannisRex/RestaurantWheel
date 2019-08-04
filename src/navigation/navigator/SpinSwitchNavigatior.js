// @flow
import { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import SpinScreen from '../../screens/spin/main'
import DetailScreen from '../../screens/detail/main'

type Props = {
  NewsScreen: Component<any>,
  DetailScreen: Component<any>
}

const PeopleStackNavigation = createStackNavigator<Props>(
  {
    SpinScreen: {
      screen: SpinScreen,
      navigationOptions: {
        header: null
      }
    },
    DetailScreen: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'SpinScreen'
  }
)

export default createAppContainer(PeopleStackNavigation)
