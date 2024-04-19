import React from 'react';
import '../../App.css'

function Ex_Counter() {
    /*let valor = document.getElementById("input").value;
    function increase() {

        document.getElementById("cont").value = valor++;
    }
    function decrease() {
        document.getElementById("input").value++;
    }*/


    return (
        <>
            <p>Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).</p>
            <ul>
                User stories
                <li>User can enter an integer and use a button to increase or decrease that number</li>
                <li>The value given by the user must be showed too</li>
            </ul>
            <hr />
            <h2>Example</h2>
            <div className='counter'>
                <input type="number" id='input' defaultValue={1} >
                </input>
                <input type="text" readOnly id='cont' />

                <button>Increase</button>
            </div>

        </>
    );
}

export default Ex_Counter;
