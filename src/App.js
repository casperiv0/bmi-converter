import React, { Component } from 'react';
import { InputLabel, FormControl, Input, Button } from "@material-ui/core"

class App extends Component {

  constructor() {
    super()

    this.state = {
      weight: 0,
      height: 0,
      bmi: 0,
      state: "",
      color: ""
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
    const bmi = (weight / (height * height)).toFixed(2)

    if (height === 0) {
      return this.setState({
        bmi: "Wow! I can't do that!"
      });
    };

    this.setState({
      bmi: bmi
    })
    
    if (bmi <= 18.5) {
      return this.setState({
        state: "Underweight",
        color: "orange"
      });
    };
    
    if (bmi >= 18.5 && bmi <= 25) {
      return this.setState({
        state: "Normal",
        color: "green"
      });
    }


    if(bmi >= 25 && bmi <= 30) {
      return this.setState({
        state: "Overweight",
        color: "orange"
      });
    }

    if (bmi > 31) {
      return this.setState({
        state: "Obesity",
        color: "red"
      });
    };

  }

  render() {
    const { weight, height, bmi, state, color } = this.state
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
          <h2>State: <span style={{color: color}} > {state} </span> </h2>
        </div>
      </div>
    );
  };
};

export default App;
