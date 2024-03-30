import React from 'react';
import '../../App.css'

function Ex_Calculator() {
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
            <div className='Calculator'>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Ex_Calculator;