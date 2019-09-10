import React, { Component } from 'react'
import { Line } from 'react-chartjs-2-update'

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: this.props.day,
        datasets: [
          {
            label: 'Yesterdays Stock Value',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: true,
            data: this.props.value
          }
        ]
      },
      options: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.previousValues !== prevProps.previousValues) {
      this.setState({
        datasets: [
          {
            label: 'Yesterdays Stock Value',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: this.props.previousValues
          }
        ],
        labels: this.props.previousDays
      })
    }
  }

  render() {
    return (
      <div className='chart'>
        <Line data={this.state} width={400} height={400} />
      </div>
    )
  }
}
