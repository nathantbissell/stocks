import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Stocks.css'

class Stocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3,
      day: 0,
      quantity: 1,
      balance: 10,
      gameOver: false,
      lowFunds: false
    }
  }

  buyStock = () => {
    if (this.state.balance < 25) {
      this.toggleLowFunds()
    }
    if (this.state.balance - this.state.value >= 0) {
      this.setState({
        quantity: this.state.quantity + 1,
        balance: this.state.balance - this.state.value
      })
    }
    this.triggerGameOver()
  }

  sellStock = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
        balance: this.state.balance + this.state.value
      })
    }
    this.triggerGameOver()
    if (this.state.balance > 1500) {
      this.qualityBanner()
    }
    if (this.state.balance >= 2000) {
      this.winBanner()
    }
  }

  advanceDay = () => {
    this.setState({
      value: Math.floor(Math.random() * 101 + 0),
      day: this.state.day + 1
    })
    this.triggerGameOver()
  }

  triggerGameOver = () => {
    if (this.state.value === 0 || this.state.balance === 0) {
      this.setState({
        gameOver: true
      })
    }
  }
  toggleLowFunds = () => toast.error('Warning! Low on funds!')
  qualityBanner = () => toast.info("You're almost there!")
  winBanner = () => toast.success('You won! Congrats!')

  resetGame = () => {
    this.setState({
      value: 3,
      day: 0,
      quantity: 1,
      balance: 10,
      gameOver: false
    })
  }

  render() {
    const { value, quantity, balance, day, lowFunds } = this.state
    return !this.state.gameOver ? (
      <React.Fragment>
        <div className='container jumbotron'>
          <div className='dayLabel' id='label'>
            <i class='far fa-calendar-alt' /> Day : {day}
          </div>
          <div className='quantityLabel' id='label'>
            <i class='fas fa-coins' /> Quantity : {quantity}
          </div>

          <div className='valueLabel' id='label'>
            <i class='fas fa-chart-line' /> Value : {value}
          </div>
          <div className='balanceLabel' id='label'>
            <i className='fas fa-money-bill' /> Balance : {balance}
          </div>

          <ToastContainer />
        </div>
        <div className='buttonContainer d-flex justify-content-left'>
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
        <ProgressBar
          striped
          variant='success'
          now={value}
          label='VALUE'
          className='valueBar m-3'
        />
        <ProgressBar
          striped
          variant='info'
          now={quantity}
          label='QUANTITY'
          className='quantityBar m-3'
        />
        <ProgressBar
          striped
          variant='danger'
          now={balance / 20}
          label='BALANCE'
          className='balanceBar m-3'
        />

        <button className='resetButton m-2 ' onClick={this.resetGame}>
          Reset
          <i className='m-1 fas fa-undo' />
        </button>
      </React.Fragment>
    ) : (
      <div>
        <p>Game Over!</p>
        <button className='resetButton m-2 ' onClick={this.resetGame}>
          Reset
          <i className='m-1 fas fa-undo' />
        </button>
      </div>
    )
  }
}

export default Stocks
