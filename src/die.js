import React, { Component } from 'react'
import './die.css'
class Die extends Component {
  render() {
    return (
      <div className='Die'>
        <i
          className={`fas fa-dice-${this.props.face} ${
            this.props.rolling && 'rolling'
          }`}
        ></i>
      </div>
    )
  }
}
export default Die
