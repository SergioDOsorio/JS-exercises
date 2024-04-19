export default function C_ChrismasLights() {
    return (
        <>
            <p>
                &nbsp;function setTimer() &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; let seconds = parseInt(document.getElementById("timer").value);<br />
                &nbsp; &nbsp; &nbsp; &nbsp; let circles = document.querySelectorAll(".circle");<br />
                &nbsp; &nbsp; &nbsp; &nbsp; circles.forEach(function (circle) &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; circle.style.animationDuration = seconds + 's';<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;);<br />
                &nbsp; &nbsp; &#125; <br />
                &nbsp; &nbsp; function start() &#123;
                &nbsp; &nbsp; &nbsp; &nbsp; let circles = document.querySelectorAll(".circle");<br />
                &nbsp; &nbsp; &nbsp; &nbsp; let seconds = document.getElementById("timer").value;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; if (document.getElementById("control").innerHTML == "Start") &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; document.getElementById("control").innerHTML = "Stop";<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; circles.forEach(function (circle) &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; circle.style.animation = "changeColor " + seconds + &nbsp;"s linear infinite";<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;);<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; else &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; document.getElementById("control").innerHTML = "Start";<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; circles.forEach(function (circle) &#123;<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; circle.style.animation = "none";<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;);<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;<br />
            </p>
        </>
    )
}