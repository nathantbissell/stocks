import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify'
import Chart from './Chart'
import 'react-toastify/dist/ReactToastify.css'
import './Stocks.css'

export default class Stocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3,
      previousValues: [],
      day: 0,
      previousDays: [],
      quantity: 1,
      balance: 10,
      gameOver: false,
      lowFunds: false
    }
  }

  buyStock = () => {
    const { balance, value } = this.state
    if (balance < 25) {
      this.toggleLowFunds()
    }
    if (balance - value >= 0) {
      this.setState({
        quantity: this.state.quantity + 1,
        balance: balance - value
      })
    }
    this.triggerGameOver()
  }

  sellStock = () => {
    const { balance, value } = this.state
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
        balance: balance + value
      })
    }
    this.triggerGameOver()
    if (balance > 1500) {
      this.qualityBanner()
    }
    if (balance >= 2000) {
      this.winBanner()
    }
  }

  advanceDay = () => {
    const { value, day, previousDays, previousValues } = this.state
    value
      ? this.setState({
          value: Math.floor(Math.random() * 101 + 0),
          previousValues: [...previousValues, value],
          previousDays: [...previousDays, day],
          day: day + 1
        })
      : this.triggerGameOver()
    console.log('previousDay value' + previousDays)
  }

  triggerGameOver = () => {
    const { balance, value } = this.state
    if (value === 0 || balance <= 0) {
      this.setState({
        gameOver: true
      })
    }
  }
  toggleLowFunds = () =>
    toast.error('Warning! Low on funds!', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  qualityBanner = () =>
    toast.info("You're almost there!", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  winBanner = () =>
    toast.success('You won! Congrats!', {
      position: toast.POSITION.TOP_CENTER
    })

  resetGame = () => {
    this.setState({
      value: 3,
      previousValues: [],
      day: 0,
      previousDays: [],
      quantity: 1,
      balance: 10,
      gameOver: false
    })
  }

  render() {
    const {
      value,
      quantity,
      balance,
      day,
      previousValues,
      previousDays
    } = this.state

    return !this.state.gameOver ? (
      <React.Fragment>
        <div className='container'>
          <div className='jumbotron'>
            <h3 className='d-flex justify-content-center' id='label'>
              Current
            </h3>
            <hr />
            <div className='dayLabel' id='label'>
              <i className='far fa-calendar-alt' /> Day : {day}
            </div>
            <div className='quantityLabel' id='label'>
              <i className='fas fa-coins' /> Quantity : {quantity}
            </div>

            <div className='valueLabel' id='label'>
              <i className='fas fa-chart-line' /> Value : {value}
            </div>
            <div className='balanceLabel' id='label'>
              <i className='fas fa-money-bill' /> Balance : {balance}
            </div>
          </div>
          <Chart
            previousValues={previousValues}
            previousDays={previousDays}
            value={value}
            day={day}
          />

          <div className='jumbotron'>
            <button
              className='buyStockButton m-3 d-block'
              onClick={this.buyStock}
            >
              Buy
              <i className='m-1 fas fa-shopping-cart' />
            </button>
            <button
              className='sellStockButton m-3 d-block'
              onClick={this.sellStock}
            >
              Sell
              <i className='m-1 fas fa-dollar-sign' />
            </button>

            <button
              className='advanceButton m-3 d-block'
              onClick={this.advanceDay}
            >
              Advance
              <i className='m-1 fas fa-arrow-alt-circle-right' />
            </button>
          </div>
        </div>
        <ToastContainer data={this.state} />
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
        <div className='d-flex justify-content-center'>
          <button className='resetButton m-2' onClick={this.resetGame}>
            Reset
            <i className='m-1 fas fa-undo' />
          </button>
        </div>
      </React.Fragment>
    ) : (
      <div className='game-over'>
        <h1>Game Over!</h1>
        <button className='resetButton m-2 ' onClick={this.resetGame}>
          Reset
          <i className='m-1 fas fa-undo' />
        </button>
      </div>
    )
  }
}
