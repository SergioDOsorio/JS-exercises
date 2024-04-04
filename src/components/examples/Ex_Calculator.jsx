import React from 'react';
import '../../App.css'

function Ex_Calculator() {

    function appendToDisplay(value) {
        if (document.getElementById('display').value.length < 8)
            document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        var displayValue = document.getElementById('display').value;
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    }
    return (
        <>
            <p>
                Calculators are not only one of the most useful tools available, but they are also a great way to understand UI and event processing in an application. In this problem, we will create a calculator that supports basic arithmetic calculations on integers.
            </p>
            <ul>
                User stories
                <li>User can see a display showing the current number entered or the result of the last operation.</li>
                <li>User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '='</li>
                <li>User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.</li>
            </ul>
            <hr />
            <div className='calculator'>
                <input type="text" id="display" className='display' readOnly ></input>
                <div>
                    <button className="button" onClick={() => appendToDisplay('7')}>7</button>
                    <button className="button" onClick={() => appendToDisplay('8')}>8</button>
                    <button className="button" onClick={() => appendToDisplay('9')}>9</button>
                    <button className="button-operator" onClick={() => appendToDisplay('/')}>/</button>
                </div>
                <div>
                    <button className="button" onClick={() => appendToDisplay('4')}>4</button>
                    <button className="button" onClick={() => appendToDisplay('5')}>5</button>
                    <button className="button" onClick={() => appendToDisplay('6')}>6</button>
                    <button className="button-operator" onClick={() => appendToDisplay('+')}>+</button>
                </div>
                <div>
                    <button className="button" onClick={() => appendToDisplay('1')}>1</button>
                    <button className="button" onClick={() => appendToDisplay('2')}>2</button>
                    <button className="button" onClick={() => appendToDisplay('3')}>3</button>
                    <button className="button-operator" onClick={() => appendToDisplay('-')}>-</button>
                </div>
                <div>
                    <button className="button" onClick={() => appendToDisplay('0')}>0</button>
                    <button className="button" onClick={() => appendToDisplay('.')}>.</button>
                    <button className="button-operator" onClick={calculate}>=</button>
                    <button className="button-operator" onClick={() => appendToDisplay('*')}>*</button>
                </div>
                <button className="button-clear" onClick={clearDisplay}>C</button>
            </div>
        </>
    )
}

export default Ex_Calculator;