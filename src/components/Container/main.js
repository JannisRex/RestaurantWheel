// @flow
import React, { Children } from 'react'
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children }: {children?: typeof(Children), color: string}) => (
  <View style={styles.container}>
    {children}
  </View>
)
export default Container

