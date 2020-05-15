import React, { Component } from 'react';
import { InputLabel, FormControl, Input, Button, Typography } from "@material-ui/core"


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

  getBmi = (e) => {
    e.preventDefault();
    const { weight, height } = this.state;
    const bmi = (weight / ((height * height)  / 10000 )).toFixed(2)

    

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
        <form  onSubmit={this.getBmi}>
        <FormControl fullWidth>
          <InputLabel>Enter your Weight in kilograms</InputLabel>
          <Input type="number" value={weight} onChange={this.handleWeight} />
        </FormControl>
        <div className="margin-top">
          <FormControl fullWidth>
            <InputLabel>Enter your height in centimeters</InputLabel>
            <Input type="number" value={height} onChange={this.handleHeight} />
          </FormControl>
        </div>

        <div className="margin-top">
          <Button type="submit" fullWidth variant="contained" color="primary">
            Get BMI
          </Button>
        </div>
        </form>

        {/* Result */}
        <div style={{marginTop: "20px"}}>
          <Typography color="inherit" variant="h2">Your BMI is: {bmi} </Typography>
          <Typography color="inherit" variant="h3">State: <span style={{color: color}} > {state} </span> </Typography>
        </div>
      </div>
    );
  };
};

export default App;
