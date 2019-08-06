const url = 'https://gist.github.com/JannisRex/17a6279edc7a191ca8e3ba563807b2d5'

export const FetchQuotes = () => {
  return fetch(url + '/menuALL')
    .then(response => response.json())
}
