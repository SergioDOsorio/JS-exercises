import React from 'react';
import '../../App.css'

function dec2bin(){
  let decimal = document.getElementById('decimal').value;
    let bin = document.getElementById('toBin');
    let binary = parseInt(decimal, 10).toString(2);
    bin.value = binary;
}

function bin2dec() {
  let binary = document.getElementById('binary').value;
  var isBinary = true;
  let dec = document.getElementById('toDec');
  for (let i = 0; i < binary.length; i++) {
      if (binary[i] !== "0" && binary[i] !== "1") {
          isBinary = false
          break;
      }
  }
  if (!isBinary) {
      document.getElementById('error-message').style.display = "flex"
      dec.value = "";
  }
  else {
      let decimal = parseInt(binary, 2);
      dec.value = decimal;
      document.getElementById('error-message').style.display = "none"
  }
}


function Ex_Bin2Dec() {
  return (
    <>
      <p>A system of binary and decimal converters:</p>
      <ul>
        User stories
        <li>User can enter up to 8 binary digits in one input field</li>
        <li>User must be notified if anything other than a 0 or 1 was entered</li>

      </ul>

      <hr />

      <h2>Example</h2>
      <div>
        <label htmlFor="decimal">Type the decimal to convert it to a Bianry value</label>
        <input type="number" id="decimal" placeholder="Decimal here" autoComplete="off" />
        <button onClick={dec2bin}>Convert</button>
        <input type="text" id="toBin" readOnly placeholder="Result" />

      </div>
      <br />
      <div>
        <label htmlFor="binary">Type a binary to convert it to a Decimal value</label>
        <input type="text" id="binary" placeholder="Binary here" maxLength="8" autoComplete="off" />
        <button onClick={bin2dec}>Convert</button>
        <input type="number" id="toDec" readOnly placeholder="Result" />
        <p className="error" id="error-message">Invalid value</p>
      </div>
    </>
  );
}

export default Ex_Bin2Dec;
