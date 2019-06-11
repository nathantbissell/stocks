import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Stocks.css'

class Stocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      day: 1,
      quantity: 0,
      balance: 100,
      gameOver: false
    }
  }

  buyStock = () => {
    if (this.state.balance - this.state.value >= 0) {
      this.setState({
        quantity: this.state.quantity + 1,
        balance: this.state.balance - this.state.value
      })
    }
  }

  sellStock = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
        balance: this.state.balance + this.state.value
      })
    }
  }

  advanceDay = () => {
    this.setState({
      value: Math.floor(Math.random() * 100),
      day: this.state.day + 1
    })
  }

  render() {
    const { value, quantity, balance, day, gameOver } = this.state
    return (
      <React.Fragment>
        <div className='container p-5 m-auto'>
          <div className='dayLabel' id='label'>
            Day : {day}
          </div>
          <div className='quantityLabel' id='label'>
            Quantity : {quantity}
          </div>
          <div className='valBal d-flex justify-content-center'>
            <div className='valueLabel' id='label'>
              Value : {value}
            </div>
            <div className='balanceLabel' id='label'>
              Balance : {balance}
            </div>
          </div>
        </div>
        <div className='buttonContainer d-flex justify-content-center'>
          <button className='buyStockButton m-2' onClick={this.buyStock}>
            Buy
            <i class='m-1 fas fa-shopping-cart' />
          </button>
          <button className='sellStockButton m-2' onClick={this.sellStock}>
            Sell
            <i class='m-1 fas fa-dollar-sign' />
          </button>

          <button className='advanceButton m-2 ' onClick={this.advanceDay}>
            Advance
            <i className='m-1 fas fa-arrow-alt-circle-right' />
          </button>
        </div>
        <ProgressBar now={60} />
      </React.Fragment>
    )
  }
}

export default Stocks
