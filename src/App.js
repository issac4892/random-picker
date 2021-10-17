import './App.css';
import React from 'react';
import After from './components/after'
import Before from './components/before'

class App extends React.Component {
  state = {
    picknotdone: true,
    arr: [],
    num: 0,
  }
  onChange = async (number) => {
    this.setState({
      num: number
    })
  }
  changeArr = async (array) => {
    this.setState({
      arr: array
    })
  }
  done = async () => {
    this.setState({
      picknotdone: false
    })
  }
  notDone = async () => {
    this.setState({
      picknotdone: true
    })
  }
  render() {
    const { picknotdone, arr, num } = this.state
    return (
        <div>
          {picknotdone ? (
              <Before change={this.onChange} changearr={this.changeArr} done={this.done}/>
          ) : (
              <After arr={arr} num={num} change={this.onChange} changearr={this.changeArr} done={this.notDone}/>
          )}
        </div>
    )
  }
}

export default App;
