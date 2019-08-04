// @flow
import React, { Children } from 'react'
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children, color }: {children?: typeof(Children), color: string}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    {children}
  </View>
)
export default Container

