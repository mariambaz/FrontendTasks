var playerCount = 0;
var player1_name = "";
var player1_color = "";
var player2_name = "";
var player2_color = "";
var red, green, blue, pink, purple, orange = false;

function removeAllBorders() {
    document.getElementById("red").style.border = "none";
    document.getElementById("green").style.border = "none";
    document.getElementById("blue").style.border = "none";
    document.getElementById("pink").style.border = "none";
    document.getElementById("purple").style.border = "none";
    document.getElementById("orange").style.border = "none";
}

function clickRed() {
    red = red !== true;
    removeAllBorders();
    if (red) {
        green= false;
        blue= false;
        pink= false;
        purple= false;
        orange= false;
        document.getElementById("red").style.border = "thick solid white";
    }
}

function clickGreen() {
    green = green !== true;
    removeAllBorders();
    if (green) {
        red= false;
        blue= false;
        pink= false;
        purple= false;
        orange = false;
        document.getElementById("green").style.border = "thick solid white";
    }
}

function clickBlue() {
    blue = blue !== true;
    removeAllBorders();
    if (blue) {
        red= false;
        green= false;
        pink= false;
        purple= false;
        orange = false;
        document.getElementById("blue").style.border = "thick solid white";
    }
}

function clickPink() {
    pink = pink !== true;
    removeAllBorders();
    if (pink) {
        orange = false;
        purple= false;
        blue= false;
        green= false;
        red= false;
        document.getElementById("pink").style.border = "thick solid white";
    }
}

function clickPurple() {
    purple = purple !== true;
    removeAllBorders();
    if (purple) {
        red= false;
        green = false;
        blue= false;
        pink= false;
        orange = false;
        console.log("HERE")
        document.getElementById("purple").style.border = "thick solid white";
    }
}

function clickOrange() {
    orange = orange !== true;
    removeAllBorders();
    if (orange) {
        red, green, blue, pink, purple = false;
        document.getElementById("orange").style.border = "thick solid white";
    }
}

function playerSubmit() {
    console.log(red, green, blue, pink, purple,orange);
    if (player1_name !== "") {
        submitPlayerName = "player2_name";
        submitPlayerColor = "player2_color";
    } else {
        submitPlayerName = "player1_name";
        submitPlayerColor = "player1_color";
    }

    var player_name = document.getElementById("player_name").value;
    if (player_name != "") {
        if (player_name.length >= 2) {
            sessionStorage.setItem(submitPlayerName, player_name);
            if (submitPlayerName == "player1_name") {
                player1_name = player_name;
            } else {
                player2_name = player1_name;
            }
            if (red) {
                player1_color = "red";
                sessionStorage.setItem(submitPlayerColor, "red");
            } else if (green) {
                player1_color = "green";
                sessionStorage.setItem(submitPlayerColor, "green");
            } else if (blue) {
                player1_color = "blue";
                sessionStorage.setItem(submitPlayerColor, "blue");
            } else if (pink) {
                player1_color = "pink";
                sessionStorage.setItem(submitPlayerColor, "pink");
            } else if (purple) {
                player1_color = "purple";
                sessionStorage.setItem(submitPlayerColor, "purple");
            } else if (orange) {
                player1_color = "orange";
                sessionStorage.setItem(submitPlayerColor, "orange");
            } else { // No color is chosen
                document.getElementById("error-msg").innerText = "You haven't chosen a color to play with!";
            }

            if (player1_color !== "") {
                document.getElementById("player-number").innerText = "PLAYER 2";
                document.getElementById("player_name").value = "";
                document.getElementById("submit_btn").innerText = "Start Playing!";
                removeAllBorders();
                red = green = blue = pink = purple = orange = false;
                player1_name = player_name;
                document.getElementById(player1_color).style.visibility = "hidden";
                if (player2_name !== "") {
                    window.location = "./GamePage.html";
                }
            }

        } else { // Name is too short, show error message
            document.getElementById("error-msg").innerText = "The name you provided is too short! Must be at least 2 characters long.";
        }
    } else {
        if (red !== false || green !== false || blue !== false || pink !== false || purple !== false || orange !== false) {
            document.getElementById("error-msg").innerText = "Please enter your name!";
        } else {
            document.getElementById("error-msg").innerText = "Please enter your name and choose your preferred color!";
        }
    }
}


