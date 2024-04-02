import React from 'react';
import '../../App.css'
import { useState } from 'react';

function Ex_BRPreviewer() {
    const [showMessage, setShowMessage] = useState(false);

    function changeBorder(property, unitAssigned, idValue) {
        let value = document.getElementById(idValue).value;
        let unit = document.getElementById(unitAssigned).value;
        let newValue = value + unit;
        document.getElementById('border-example').style[property] = newValue;
    }

    function copyCode() {
        const obj = window.getComputedStyle(document.getElementById("border-example"));
        const TL = obj.getPropertyValue('border-top-left-radius');
        const TR = obj.getPropertyValue('border-top-right-radius');
        const BL = obj.getPropertyValue('border-bottom-left-radius');
        const BR = obj.getPropertyValue('border-bottom-right-radius');
        const code = 'border-top-left-radius: ' + TL + ';\n' + 'border-top-right-radius: ' + TR + ';\n' + 'border-bottom-left-radius: ' + BL + ';\n' + 'border-bottom-right-radius: ' + BR + ';';
        navigator.clipboard.writeText(code);
        setShowMessage(true);
        setTimeout(() => { setShowMessage(false) }, 3000);
    }

    return (
        <>
            <p>The border-radius property can have multiple values changed. Preview how the shape looks while
                changing these values.</p>
            <ul>
                User stories
                <li>User can see a box which has a border-radius property applied to it</li>
                <li>User can change the 4 border-radius values that are applied to the box (top-left, top-right,
                    bottom-left, bottom-right)</li>
                <li>User can copy the resulting CSS to the clipboard</li>
            </ul>
            <hr />
            <h2>Example</h2>
            <div className="border-radius-previewer">
                <div>
                    <label htmlFor="input-top-left">top-left</label>
                    <div>
                        <input type="number" max="100" id="input-top-left" onInput={() => changeBorder('border-top-left-radius', 'unit-top-left', 'input-top-left')} />
                        <select name="unit-top-left" onChange={() => changeBorder('border-top-left-radius', 'unit-top-left', 'input-top-left')} id="unit-top-left"  >
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                        </select>
                    </div>
                    <label htmlFor="input-top-right">top-right</label>
                    <div>
                        <input type="number" max="100" id="input-top-right" onInput={() => changeBorder('border-top-right-radius', 'unit-top-right', 'input-top-right')} />
                        <select id="unit-top-right" onChange={() => changeBorder('border-top-left-radius', 'unit-top-left', 'input-top-left')}>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                        </select>
                    </div>
                    <label htmlFor="input-bottom-left">bottom-left</label>
                    <div>
                        <input type="number" max="100" id="input-bottom-left" onInput={() => changeBorder('border-bottom-left-radius', 'unit-bottom-left', 'input-bottom-left')} />
                        <select id="unit-bottom-left" onChange={() => changeBorder('border-top-left-radius', 'unit-top-left', 'input-top-left')}>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                        </select>
                    </div>
                    <label htmlFor="input-bottom-right">bottom-right</label>
                    <div>
                        <input type="number" max="100" id="input-bottom-right" onInput={() => changeBorder('border-bottom-right-radius', 'unit-bottom-right', 'input-bottom-right')} />
                        <select id="unit-bottom-right" onChange={() => changeBorder('border-top-left-radius', 'unit-top-left', 'input-top-left')}>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            
                        </select>
                        {showMessage && <p className='message'>Code copied o clipboard</p>}
                    </div>
                </div>
                <div className="center">
                    <div id="border-example" className="border-example">
                    </div>
                    <button onClick={copyCode}>Copy code</button>
                </div>


            </div>
        </>
    )
}

export default Ex_BRPreviewer;