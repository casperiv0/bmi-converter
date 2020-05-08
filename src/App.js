import React, { Component } from 'react';
import { InputLabel, FormControl, Input, Button } from "@material-ui/core"

class App extends Component {

  constructor() {
    super()

    this.state = {
      weight: 0,
      height: 0,
      bmi: 0
    }
  }

  handleHeight = (e) => {
    this.setState({
      height: e.target.value
    });
  };

  handleWeight = (e) => {
    this.setState({
      weight: e.target.value
    });
  };

  getBmi = () => {
    const { weight, height } = this.state;

    this.setState({
      bmi: (weight / (height*height)).toFixed(2)
    })

    console.log(this.state.bmi);
    
  }

  render() {
    const { weight, height,bmi } = this.state
    return (
      <div className="App" >
        <FormControl fullWidth>
          <InputLabel>Enter your Weight in kilograms</InputLabel>
          <Input type="number" value={weight} onChange={this.handleWeight} />
        </FormControl>
        <div className="margin-top">
          <FormControl fullWidth>
            <InputLabel>Enter your height in meters</InputLabel>
            <Input type="number" value={height} onChange={this.handleHeight} />
          </FormControl>
        </div>

        <div className="margin-top">
          <Button onClick={this.getBmi} fullWidth variant="contained" color="primary">
            Get BMI
          </Button>
        </div>

        {/* Result */}
        <div>
          <h1>Your BMI is: {bmi} </h1>
        </div>
      </div>
    );
  };
};

export default App;
