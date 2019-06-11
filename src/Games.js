import React, {
  useState,
  useReducer,
  useContext,
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import './App.css'

// const Context = React.createContext()

// const appReducer = (state, action) => {
//   switch (action.type) {
//     case 'sell': {
//       return
//     }
//   }
// }

const StockList = () => {
  const [stocks, setStocks] = useState([
    {
      text: 'Apple',
      value: 2,
      quantity: 0,
      isChosen: false
    },
    {
      text: 'Ford',
      value: 1,
      quantity: 0,
      isChosen: false
    },
    {
      text: 'Bitcoin',
      value: 3,
      quantity: 0,
      isChosen: false
    }
  ])
}

// const buyStock = index => {
//   const newStocks = [...stocks]
//   // create copy of our stocks array
//   newStocks[index].quantity++
//   setStocks(newStocks)
// }

const advanceDay = ({ StockList }) => {}

function Sell() {
  // const [value, sellStock] = useState(1)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Quantity: {count}</h1>
      {/* <h2>Value: {value}</h2> */}
      {/* <button onClick={() => sellStock(value)}>Sell</button> */}
      <button onClick={() => setCount(count + 1)}>Buy More</button>
    </div>
  )
}

function Select() {}

const Games = () => (
  <GameWrapper>
    <header>
      <h1 className='title'>Choose Your Stock</h1>
      <div className='button-choice m-5 p-2' />
    </header>

    <div className='container'>
      <h2 className='daily-stats'>
        Price History: <h4>value</h4>
      </h2>
      <h2 className='daily-stats'>
        Pre-market price: <h4>value</h4>
      </h2>
      <h2 className='daily-stats'>
        Post-market price: <h4>value</h4>
      </h2>
    </div>
    <Sell />
  </GameWrapper>
)

const GameWrapper = styled.div`
  background-color: black;
`

export default Games
