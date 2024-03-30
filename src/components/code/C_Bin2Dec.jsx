import React from "react";
import '../../App.css'

function C_Bin2Dec() {
    return (
        <div>
            <p>
                function dec2bin() &#123;
                <br />
                &nbsp;&nbsp;let decimal = document.getElementById('decimal').value;
                <br />
                &nbsp;&nbsp;let bin = document.getElementById('toBin');
                <br />
                &nbsp;&nbsp;let binary = parseInt(decimal, 10).toString(2);
                <br />
                &nbsp;&nbsp;bin.value = binary;
                <br />
                &#125;
            </p>
            <p>
                function bin2dec() &#123;
                <br />
                &nbsp;&nbsp;let binary = document.getElementById('binary').value;
                <br />
                &nbsp;&nbsp;let isBinary = true;
                <br />
                &nbsp;&nbsp;let dec = document.getElementById('toDec');
                <br />
                &nbsp;&nbsp;for (let i = 0; i &lt; binary.length; i++) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;if (binary[i] !== "0" &amp;&amp; binary[i] !== "1") &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isBinary = false;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;if (!isBinary) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('error-message').style.display = "flex";
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;dec.value = "";
                <br />
                &nbsp;&nbsp;&#125; else &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;let decimal = parseInt(binary, 2);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;dec.value = decimal;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('error-message').style.display = "none";
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
            </p>
        </div>
    )
}

export default C_Bin2Dec;