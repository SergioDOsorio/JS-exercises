export default function Ex_ChrismasLights() {

    function setTimer() {
        let seconds = parseInt(document.getElementById("timer").value);
        let circles = document.querySelectorAll(".circle");
        circles.forEach(function (circle) {
            circle.style.animationDuration = seconds + 's';
        });
    }

    function start() {
        let circles = document.querySelectorAll(".circle");
        let seconds = document.getElementById("timer").value;
        if (document.getElementById("control").innerHTML == "Start") {
            document.getElementById("control").innerHTML = "Stop";
            circles.forEach(function (circle) {
                circle.style.animation = "changeColor " + seconds +  "s linear infinite";
            });
        }
        else {
            document.getElementById("control").innerHTML = "Start";
            circles.forEach(function (circle) {
                circle.style.animation = "none";
            });
        }

    }

    return (
        <>
            <p>This simulates the effect of a string of rippling lights, similar to the ones displayed during the Christmas:</p>
            <ul>
                User stories
                <li>User can press a button to start and stop the display</li>
                <li>User can change the interval of time controlling the change in intensity</li>
            </ul>
            <hr />
            <h2>Example</h2>
            <div className="christmas">
                <div className="container-lights">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <button onClick={start} id="control">Start</button>
                <div className="container-input">
                    <label htmlFor="">Set timer</label>
                    <input type="number" id="timer" defaultValue={10} />
                    <button onClick={setTimer}>Set time</button>
                </div>

            </div>
        </>
    )
}