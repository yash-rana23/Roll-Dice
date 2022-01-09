import React from 'react'

class Game extends React.Component {
  constructor(props) {
    super()
    this.state = { no: 1 }

    this.handleclick = this.handleclick.bind(this)
  }

  handleclick = (e) => {
    let rand = Math.floor(Math.random() * 10)
    this.setState({ no: rand })
  }
  render() {
    return (
      <div>
        <h1>{this.state.no}</h1>
        {this.state.no === 7 ? (
          'You Win'
        ) : (
          <button onClick={this.handleclick}>Click me</button>
        )}
      </div>
    )
  }
}
export default Game
