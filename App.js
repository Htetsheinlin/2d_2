import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('1'); // Default value for c is '1'
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    // Parse input values as floats
    const aFloat = parseFloat(a);
    const bFloat = parseFloat(b);
    const cFloat = parseFloat(c);

    // Check if input values are valid numbers
    if (isNaN(aFloat) || isNaN(bFloat) || isNaN(cFloat)) {
      setResult('Please enter valid numbers');
    } else {
      // Perform the calculation
      const calculatedResult = ((aFloat - (aFloat * 0.185)) - (bFloat * 80)) * (cFloat / 100);
      setResult(`Result: ${calculatedResult.toFixed(2)}`);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div>
        <label htmlFor="a">Enter total sell price</label>
        <br></br>
        <input type="text" id="a" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div>
        <label htmlFor="b">Enter total pauk thee</label>
        <br></br>
        <input type="text" id="b" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div>
        <label htmlFor="c">Select your percentage</label>
        <br></br>
        <select id="c" value={c} onChange={(e) => setC(e.target.value)}>
          <option value="2.5">2(SG+KG)</option>
          <option value="2">3.5(NT+K)</option>
          <option value="12.25">12(YLK+KWYM+AS)</option>
          
          <option value="0.75">0.75(KWYM,YT)</option>
          <option value="1">1(KG,K)</option>
          <option value="1.5">1.5(YLK,SG)</option>
          <option value="1">1(NT)</option>
          <option value="10">10(AS)</option>

          <option value="17.5">17.5(ALL)</option>
          
        </select>
      </div>
      <br></br>
      <button onClick={handleCalculate}>$</button>
      <br></br>
      <div>{result}</div>
    </div>
  );
}

export default App;
