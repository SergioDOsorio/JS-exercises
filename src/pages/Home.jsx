import '../App.css';
import Logo from '../img/javascript-logo-240.png';
import Subtitle from '../components/Subtitle';
import Exercise from '../components/Exercise';
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <div className='container-app'>

            <div className='container-main'>
                <div className='container-title'>
                    <h1 className="title">Javascript Excercises</h1>
                    <img src={Logo} alt="Javascript logo"></img>
                </div>
                <p className="intro">This is a website oriented at putting into practice different Javascript skills through various exercises and problems, combinig web design using HTML and CSS. The exercises and problems are taken from the following sites:
                </p>
                <ul className="references">
                    <li >
                        <a href="https://github.com/florinpop17/app-ideas" target="_blank">App Ideas Collection - Florin Pop</a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/problemset/javascript/?sorting=W3t9XQ%3D%3D" target="_blank">JavaScript problems - Leetcode</a>
                    </li>
                </ul>
                <Navigation />
                <Subtitle idElement="beginner-title" subtitle="Beginner" />
                <ul className='list'>
                    <Exercise exerciseName="Bin2Dec" shortDescription="Binary-to-Decimal number converter"
                        descriptionId="des-Bin2Dec" buttonId="btn-Bin2Dec" descriptionTxt="Binary is the number system all digital computers are based on. Therefore it's important for developers to understand binary, or base 2, mathematics. The purpose of Bin2Dec is to provide practice and understanding of how binary calculations. Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's and 1's, in any sequence and then displays its decimal equivalent." exerciseLink="/Bin2Dec" />

                    <Exercise exerciseName="Border Radius Previewer" shortDescription="Preview how CSS3 border-radius values affect an element"
                        descriptionId="des-BRPreviewer" buttonId="btn-BRPreviewer" descriptionTxt="The border-radius property can have multiple values changed. Preview how the shape looks while changing these values." exerciseLink="/BRPreviewer" />

                    <Exercise exerciseName="Calculator" shortDescription="A simple calculator" descriptionId="des-calculator" buttonId="btn-Calculator"
                        descriptionTxt="Calculators are not only one of the most useful tools available, but they are also a great way to understand UI and event processing in an application." exerciseLink="/Calculator" />

                    <Exercise exerciseName="Counter" shortDescription="A simple counter" descriptionId="des-counter" buttonId="btn-counter"
                        descriptionTxt="In JavaScript, a counter is a variable that keeps track of a numeric value, typically incremented or decremented based on specific conditions or actions within a program. In this exercise we implement a simple counter" exerciseLink="/Counter" />

                    <Exercise exerciseName="Christmas Lights" shortDescription="Circles lighting up like a Christmas decoration" descriptionId="des-ChristmasL" buttonId="btn-ChristmasL"
                        descriptionTxt="A light display of seven colored circles in a row and based on a timer that changes the intensity of each circle. 
                        This simulates the effect of a string of rippling lights, similar to the ones displayed during Christmas." exerciseLink="/ChristmasLigths" />
                </ul>
                <Subtitle idElement="intermediate-title" subtitle="Intermediate"></Subtitle>
                <ul></ul>
                <Subtitle idElement="advanced-title" subtitle="Advanced"></Subtitle>
                <ul></ul>
            </div>

        </div>
    )
}
