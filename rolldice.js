import React, { Component } from 'react'
import Die from './die.js'
import './rolldice.css'
class Rolldice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  }
  constructor(props) {
    super(props)
    this.state = { die1: 'one', die2: 'one', rolling: false }
    this.roll = this.roll.bind(this)
  }
  roll() {
    const newdie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newdie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({ die1: newdie1, die2: newdie2, rolling: true })
    //wait one second then rolling to false
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }
  render() {
    return (
      <div>
        <div className='rolldice'>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <div>
          <button
            className='buttn'
            onClick={this.roll}
            disabled={this.state.rolling}
          >
            {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
          </button>
        </div>
      </div>
    )
  }
}
export default Rolldice
