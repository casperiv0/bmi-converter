import React, { useState } from "react";
import { InputLabel, FormControl, Input, Button, Typography, Link } from "@material-ui/core";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [color, setColor] = useState("");
  const [state, setState] = useState("");

  function getBmi(e) {
    e.preventDefault();
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (height === "0" || weight === "0") {
      setState("");
      setBmi("Wow! I can't do that!");
      return;
    }

    setBmi(bmi);

    if (bmi <= 18.5) {
      setState("Underweight");
      setColor("orange");
      return;
    }

    if (bmi >= 18.5 && bmi <= 25) {
      setState("Normal");
      setColor("green");
      return;
    }

    if (bmi >= 25 && bmi <= 30) {
      setState("Overweight");
      setColor("orange");
      return;
    }

    if (bmi > 31) {
      setState("Obesity");
      setColor("red");
      return;
    }
  }

  return (
    <div className="App">
      <Link
        target="_blank"
        variant="body2"
        href="https://github.com/Dev-CasperTheGhost/bmi-converter"
      >
        Source Code
      </Link>
      <form style={{ marginTop: "20px" }} onSubmit={getBmi}>
        <FormControl fullWidth>
          <InputLabel>Enter your Weight in kilograms</InputLabel>
          <Input
            required
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.currentTarget.value)}
          />
        </FormControl>
        <div className="margin-top">
          <FormControl fullWidth>
            <InputLabel>Enter your height in centimeters</InputLabel>
            <Input
              required
              type="number"
              value={height}
              onChange={(e) => setHeight(e.currentTarget.value)}
            />
          </FormControl>
        </div>

        <div className="margin-top">
          <Button type="submit" fullWidth variant="contained" color="primary">
            Get BMI
          </Button>
        </div>
      </form>

      {/* Result */}
      <div style={{ marginTop: "20px" }}>
        <Typography color="inherit" variant="h2">
          Your BMI is: {bmi}
        </Typography>
        <Typography color="inherit" variant="h3">
          State: <span style={{ color }}> {state} </span>
        </Typography>
      </div>
    </div>
  );
};

export default BMICalculator;
