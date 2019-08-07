// @flow
import type { quoteData } from '../../../flow/index'
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Container } from '../../components/index'
import { FetchQuotes } from '../../service/index'
import styles from './styles'

type Props = {}

type State = {
  isLoading: boolean,
  quoteData: quoteData | null,
  selectedQuote: number | null
}

class CustomSpinScreen extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      quoteData: null,
      selectedQuote: null
    }
  }

  componentDidMount() {
    this._fetchQuotes()
  }

_fetchQuotes = () => {
  FetchQuotes()
    .then((data) => {
      this.setState({
        isLoading: false,
        quoteData: data
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

_handleButtonPress = () => {
  const { quoteData } = this.state

  if (quoteData === null) {
    return
  }

  let selectedQuote = Math.floor(Math.random() * quoteData.quotes.length)
  this.setState({ selectedQuote })
}

render() {
  const { quoteData, selectedQuote } = this.state
  return (
    <Container>
      <View style={styles.container}>
        <Button
          onPress={this._handleButtonPress}
          title='Quote'
          color='teal' />
      </View>

      <View style={styles.container}>

        {selectedQuote && quoteData ? <>
          <Text style={styles.quoteBody}>{JSON.stringify(quoteData.quotes[selectedQuote].quote)}</Text>
          <Text style={styles.quoteAuthor}>{'-' + (JSON.stringify(quoteData.quotes[selectedQuote].author)).slice(1, -1)}</Text>
          </> : null}

      </View>
    </Container>
  )
}
}

export default CustomSpinScreen
