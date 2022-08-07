var player1_name = sessionStorage.getItem("player1_name");
var player2_name = sessionStorage.getItem("player2_name");
var player1_color = sessionStorage.getItem("player1_color");
var player2_color = sessionStorage.getItem("player2_color");
var winner = sessionStorage.getItem("winner");
console.log(winner);
console.log(player1_name);
console.log(player2_name);

var dict_of_colors = {
    "red": "#E74C3C",
    "green": "#2ECC71",
    "blue": "#3498DB",
    "pink": "#e5097f",
    "purple": "#9B59B6",
    "orange": "#E67E22"
};

window.onload = function() {
    if (winner == 0) {
        document.getElementById("winner").innerHTML = player1_name;
        document.getElementById("win-statement").style.color = dict_of_colors[player1_color];
        document.getElementsByClassName("win-gif").style.visibility = "visible";
    } else if (winner == 1) {
        document.getElementById("winner").innerHTML = player2_name;
        document.getElementById("win-statement").style.color = dict_of_colors[player2_color];
        document.getElementsByClassName("win-gif").style.visibility = "visible";
    } else if (winner == -1) {
        document.getElementsByClassName("tie-gif").style.visibility = "visible";
        document.getElementById("winner").innerHTML = "NO ONE";
    }
};
