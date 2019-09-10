import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='home'>
          <div className='home-overlay'>
            <div className='home-objective'>
              <h1>Bull Market</h1>
              <h4>
                Objective:{' '}
                <em>Fill the balance meter before the value hits 0</em>
              </h4>
              <h6>Designed by NBMT inc</h6>
            </div>
            <div className='home-desc'>
              <ul>
                <li>You have the option to buy or sell stock.</li>
                <li>If you're done making trades, advance to the next day.</li>
                <li>
                  The stock value will increase or decrease randomly each time
                  you advance a day.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
