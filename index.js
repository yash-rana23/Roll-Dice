import React from 'react'
import ReactDom from 'react-dom'
import Rolldice from './rolldice.js'
import './inex.css'
class App extends React.Component {
  render() {
    return (
      <div class='app'>
        <Rolldice face='five' />
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))
