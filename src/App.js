//basic interface

//<link rel="stylesheet" type="text/css" href="styles.css"></link>
//import React, { Component } from 'react';
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
<link rel="stylesheet" type="text/css" href="styles.css"></link>



function App() {


    <div className="container">
      <h1 className="title">My App</h1>
      <button className="button">Click Me</button>
    </div>
  

  const [distance, setDistance] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [intensity, setIntensity] = useState(0.7); // Default to 70%
  const [pace, setPace] = useState(null);
  
  
  
  
  const handleCalculatePace = () => {
  // Convert goal time to seconds
  const goalTimeInSeconds = calculateTimeInSeconds(goalTime);
  
  
  
  
  // Ensure distance and goal time are valid numbers
  if (isNaN(distance) || isNaN(goalTimeInSeconds)) {
  alert('Please enter valid numbers for distance and goal time.');
  return;
  }
  
  
  
  
  // Calculate the pace based on user input
  const calculatedPace = (goalTimeInSeconds / distance);
  setPace(calculatedPace.toFixed(2)); // Display pace with two decimal places
  };
  
  
  
  
  const calculateTimeInSeconds = (timeString) => {
  // Convert time in HH:MM:SS format to seconds
  //const [minutes, seconds, hundredths] = timeString.split(':' || '.').map(Number);
  const [minutes, seconds, hundredths] = timeString.split(/:|\./).map(Number);
  return minutes * 60 + seconds + hundredths/100;
  };
  
  
  
  
  /*return (
  <div>
  <h1>Swim Pace Calculator</h1>
  <div>
  <label>Swim Race Distance (yards):</label>
  <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
  </div>
  <div>
  <label>Goal Time (MM:SS.HH):</label>
  <input type="text" value={goalTime} onChange={(e) => setGoalTime(e.target.value)} />
  </div>
  <div>
  <label>Intensity Level:</label>
  <select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
  <option value="0.7">70%</option>
  <option value="0.8">80%</option>
  <option value="0.9">90%</option>
  <option value="1.0">100%</option>
  </select>
  </div>
  <button onClick={handleCalculatePace}>Calculate Pace</button>
  {pace !== null && <p>Pace: {pace} seconds per yard</p>} //??
  </div>
  );
  */
  return (
    <div className="container"> {/* Apply the "container" class */}
      <h1 className="title">My App</h1> {/* Apply the "title" class */}
      <button className="button" onClick={handleCalculatePace}>Calculate Pace</button> {/* Apply the "button" class */}
      {pace !== null && <p className="pace">Pace: {pace} seconds per yard</p>}
    </div>
  );
  }
  


function SwimPaceCalculator() {
  const [distance, setDistance] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [intensity, setIntensity] = useState(0.7); // Default to 70%
  const [paceResult, setPaceResult] = useState(null);


  // Function to calculate swim pace
  const calculatePace = () => {
    // Convert goal time to seconds

    const goalTimeInSeconds = convertGoalTimeToSeconds(goalTime);


    //laps
    const laps = (distance/ 25)


    // Calculate pace for 25-yard split
    const pace25Yard = (goalTimeInSeconds / laps); //changed
     let low25Yard =0;
     let high25Yard =0;
     let low50Yard =0;
     let high50Yard =0;
     let low100Yard =0;
     let high100Yard =0;


    if (intensity == "0.7"){
      low25Yard=pace25Yard+2.5
      high25Yard=pace25Yard+5
    }


    if (intensity == "0.8"){
      low25Yard=pace25Yard+.75
      high25Yard=pace25Yard+2.5
    }


    if (intensity == "0.9"){
      low25Yard=pace25Yard+.25
      high25Yard=pace25Yard+.75
    }


    if (intensity == "1.0"){
      low25Yard=pace25Yard-.25
      high25Yard=pace25Yard+.25
    }




    // Calculate pace for 50-yard split
    const pace50Yard = pace25Yard * 2;


    if (intensity == "0.7"){
      low50Yard=pace50Yard+4.75
      high50Yard=pace50Yard+8
    }


    if (intensity == "0.8"){
      low50Yard=pace50Yard+1.75
      high50Yard=pace50Yard+4.75
    }


    if (intensity == "0.9"){
      low50Yard=pace50Yard+.5
      high50Yard=pace50Yard+1.75
    }


    if (intensity == "1.0"){
      low50Yard=pace50Yard-.5
      high50Yard=pace50Yard+.5
    }
   


    //Calculate pace for 100-yard split
    const pace100Yard = pace25Yard * 4;


    if (intensity == "0.7"){
      low100Yard=pace100Yard+8
      high100Yard=pace100Yard+16
    }


    if (intensity == "0.8"){
      low100Yard=pace100Yard+3.5
      high100Yard=pace100Yard+8.5
    }


    if (intensity == "0.9"){
      low100Yard=pace100Yard+1
      high100Yard=pace100Yard+3.5
    }


    if (intensity == "1.0"){
      low100Yard=pace100Yard-1
      high100Yard=pace100Yard+1
    }
    // Set the calculated paces in the state
    setPaceResult({ pace25Yard, pace50Yard, pace100Yard, low25Yard, high25Yard, low50Yard, high50Yard, low100Yard, high100Yard });
  };


 // Function to convert HH:MM:SS time to seconds
 const convertGoalTimeToSeconds = (timeString) => {
  //const [minutes, seconds, hundredths] = timeString.split(':' || '.').map(Number);
  const [minutes, seconds, hundredths] = timeString.split(/:|\./).map(Number);
  
  return  minutes * 60 + seconds + hundredths/100;


};

  return (
//calcs
    <div>
      <h1>PacePal</h1>
      <h2>Swim Pace Calculator</h2>
      <h3>Enter Metrics</h3>
      <div>
        <label>
          Swim Race Distance (yards):
          <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Goal Time (MM:SS.HH):
          <input type="text" value={goalTime} onChange={(e) => setGoalTime(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Intensity Level:
          <select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
            <option value="0.7">70%</option>
            <option value="0.8">80%</option>
            <option value="0.9">90%</option>
            <option value="1.0">100%</option>
          </select>
        </label>
      </div>
      <button onClick={calculatePace}>Calculate Pace</button>
      
      {paceResult !==null && (
  <div>
    <h4>Calculated Paces</h4>
    <p>25-Yard Split Range: {paceResult.low25Yard.toFixed(2)} - {paceResult.high25Yard.toFixed(2)} seconds </p>
    <p>50-Yard Split Range: {paceResult.low50Yard.toFixed(2)} - {paceResult.high50Yard.toFixed(2)} seconds </p>
    {distance > 100 && (
      <p>100-Yard Split Range: {paceResult.low100Yard.toFixed(2)} - {paceResult.high100Yard.toFixed(2)} seconds</p>
    )}
  </div>
)}
 <SwimPaceTable paceResult={paceResult} />
 <h6>Designed by Natalie Klaas and Avery Dixon</h6>
    </div>


  );

  
 
}



function SwimPaceTable({ paceResult }) {
  if (paceResult) {
    const low25 = paceResult.low25Yard.toFixed(2);
    const high25 = paceResult.high25Yard.toFixed(2);
    const low50 = paceResult.low50Yard.toFixed(2);
    const high50 = paceResult.high50Yard.toFixed(2);
    const low100 = paceResult.low100Yard.toFixed(2);
    const high100 = paceResult.high100Yard.toFixed(2);

    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
    };

    const cellStyle = {
      border: '1px solid #ccc',
      padding: '8px',
      textAlign: 'center',
    };

    const headerCellStyle = {
      background: '#D3D3D3',
      border: '1px solid #ccc',
      padding: '8px',
      textAlign: 'center',
    };

    return (
      <div>
        <h5>Pace Table</h5>
        Maximum and minimum pace in seconds for each split distance
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}></th>
              <th style={headerCellStyle}>25 Yards</th>
              <th style={headerCellStyle}>50 Yards</th>
              <th style={headerCellStyle}>100 Yards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={headerCellStyle}>low</th>
              <td style={cellStyle}>{low25}</td>
              <td style={cellStyle}>{low50}</td>
              <td style={cellStyle}>{low100}</td>
            </tr>
            <tr>
              <th style={headerCellStyle}>high</th>
              <td style={cellStyle}>{high25}</td>
              <td style={cellStyle}>{high50}</td>
              <td style={cellStyle}>{high100}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    // Handle the case where paceResult is null
    return <div>No pace results available</div>;
  }
}


export default SwimPaceCalculator;
