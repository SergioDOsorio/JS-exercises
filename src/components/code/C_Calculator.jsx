import React from "react";

function C_Calculator(){
return (
    <p>
        function appendToDisplay(value) &#123;
        <br />
        &nbsp;&nbsp;if (document.getElementById('display').value.length &lt; 8)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('display').value += value;
        <br />
        &#125;
        <br />
        &nbsp;&nbsp;function clearDisplay() &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('display').value = '';
        <br />
        &#125;
        <br />
        &nbsp;&nbsp;function calculate() &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;var displayValue = document.getElementById('display').value;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;var result = eval(displayValue);
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('display').value = result;
        <br />
        &#125;
        <br />
    </p>
)
}

export default C_Calculator;