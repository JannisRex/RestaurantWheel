const url = 'http://157.230.31.202'

export const FetchQuotes = () => {
  return fetch(url + '/quotesALL')
    .then(response => response.json())
}
