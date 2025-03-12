//Standard JS

var targetFrankie = document.getElementById('frankie');
var frankieCount = 0;

function countFrankie() {
    var txt = "<p>Counter: " + frankieCount++ + "</p>";
    txt += "<p>HR Department</p>";
    targetFrankie.innerHTML = txt;
}

setInterval(countFrankie, 1000);

//React JS

var targetDon = document.getElementById("don");
var donCount = 0;

function countDon() {
    ReactDOM.render (
        <div>
            <p>Counter: {donCount++}</p>
            <p>IT Department</p>
        </div>,
        targetDon
    )
}

setInterval(countDon, 1000);