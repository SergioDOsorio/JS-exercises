import React from "react";

function C_Bin2Dec() {
    return (
        <p>
            const [showMessage, setShowMessage] =useState(false);
            <br />
            function changeBorder(property, unitAssigned, idValue) &#123;
            <br />
            &nbsp;&nbsp;let value = document.getElementById(idValue).value;
            <br />
            &nbsp;&nbsp;let unit = document.getElementById(unitAssigned).value;
            <br />
            &nbsp;&nbsp;let newValue = value + unit;
            <br />
            &nbsp;&nbsp;document.getElementById('border-example').style[property] = newValue;
            <br />
            &#125;
            function copyCode() &#123;<br />
            &nbsp;&nbsp;const obj = window.getComputedStyle(document.getElementById("border-example"));<br />
            &nbsp;&nbsp;const TL = obj.getPropertyValue('border-top-left-radius');<br />
            &nbsp;&nbsp;const TR = obj.getPropertyValue('border-top-right-radius');<br />
            &nbsp;&nbsp;const BL = obj.getPropertyValue('border-bottom-left-radius');<br />
            &nbsp;&nbsp;const BR = obj.getPropertyValue('border-bottom-right-radius');<br />
            &nbsp;&nbsp;const code = 'border-top-left-radius: ' + TL + ';\n' +
            &nbsp;&nbsp;&nbsp;&nbsp;'border-top-right-radius: ' + TR + ';\n' +
            &nbsp;&nbsp;&nbsp;&nbsp;'border-bottom-left-radius: ' + BL + ';\n' +
            &nbsp;&nbsp;&nbsp;&nbsp;'border-bottom-right-radius: ' + BR + ';';<br />
            &nbsp;&nbsp;navigator.clipboard.writeText(code);<br />
            &nbsp;&nbsp;setShowMessage(true);<br />
            &nbsp;&nbsp;setTimeout(()  &#123; setShowMessage(false) &#125;, 3000);<br />
            &#125;
        </p>
    )
}

export default C_Bin2Dec;