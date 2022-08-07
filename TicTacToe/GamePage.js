var player1_name = sessionStorage.getItem("player1_name");
var player2_name = sessionStorage.getItem("player2_name");
var player1_color = sessionStorage.getItem("player1_color");
var player2_color = sessionStorage.getItem("player2_color");
var turn = 0;   // 0 -> Player 1
                // 1 -> Player 2
var winner = -1;

var game_grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var dict_of_colors = {
    "red": "#E74C3C",
    "green": "#2ECC71",
    "blue": "#3498DB",
    "pink": "#e5097f",
    "purple": "#9B59B6",
    "orange": "#E67E22"
};

window.onload = function() {
    document.getElementById("player1_token").innerHTML = player1_name;
    document.getElementById("player2_token").innerHTML = player2_name;
    document.getElementById("player1_token").style.color = dict_of_colors[player1_color];
    document.getElementById("player2_token").style.color = dict_of_colors[player2_color];
    document.getElementsByClassName("names")[0].style.color = dict_of_colors[player1_color];
    document.getElementsByClassName("names")[1].style.color = dict_of_colors[player2_color];
    document.getElementById("whose-turn").innerText = player1_name;
    document.getElementById("turn").style.color = dict_of_colors[player1_color];
};

function checkForWinner() {
    // 8 cases
    if ((game_grid[0][0] === game_grid[0][1]) && (game_grid[0][1] === game_grid[0][2]) && (game_grid[0][2] === 0)
        || (game_grid[1][0] === game_grid[1][1]) && (game_grid[1][1] === game_grid[1][2]) && (game_grid[1][2] === 0)
        || (game_grid[2][0] === game_grid[2][1]) && (game_grid[2][1] === game_grid[2][2]) && (game_grid[2][2] === 0)
        || (game_grid[0][0] === game_grid[1][0]) && (game_grid[1][0] === game_grid[2][0]) && (game_grid[2][0] === 0)
        || (game_grid[0][1] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][1]) && (game_grid[2][1] === 0)
        || (game_grid[0][2] === game_grid[1][2]) && (game_grid[1][2] === game_grid[2][2]) && (game_grid[2][2] === 0)
        || (game_grid[0][0] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][2]) && (game_grid[2][2] === 0)
        || (game_grid[0][2] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][0]) && (game_grid[2][0] === 0)) {
        // Player 1 (X) won
        console.log("P1");
        winner = 0;
        sessionStorage.setItem("winner", 0);
        window.location = "./ResultsPage.html";
    }
    else if ((game_grid[0][0] === game_grid[0][1]) && (game_grid[0][1] === game_grid[0][2]) && (game_grid[0][2] === 1)
    || (game_grid[1][0] === game_grid[1][1]) && (game_grid[1][1] === game_grid[1][2]) && (game_grid[1][2] === 1)
    || (game_grid[2][0] === game_grid[2][1]) && (game_grid[2][1] === game_grid[2][2]) && (game_grid[2][2] === 1)
    || (game_grid[0][0] === game_grid[1][0]) && (game_grid[1][0] === game_grid[2][0]) && (game_grid[2][0] === 1)
    || (game_grid[0][1] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][1]) && (game_grid[2][1] === 1)
    || (game_grid[0][2] === game_grid[1][2]) && (game_grid[1][2] === game_grid[2][2]) && (game_grid[2][2] === 1)
    || (game_grid[0][0] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][2]) && (game_grid[2][2] === 1)
    || (game_grid[0][2] === game_grid[1][1]) && (game_grid[1][1] === game_grid[2][0]) && (game_grid[2][0] === 1)) {
        // Player 2 (O) won
        console.log("P2");
        sessionStorage.setItem("winner", 1);
        window.location = "./ResultsPage.html";
    } else { // Check for tie
        if (game_grid[0].some(element => element === null) || game_grid[1].some(element => element === null) || game_grid[2].some(element => element === null)) {
            console.log("some cells are empty")
        } else {
            console.log("TIE");
            sessionStorage.setItem("winner", -1);
            window.location = "./ResultsPage.html";
        }
    }
}

function player1Played() {
    turn = 1;
    document.getElementById("whose-turn").innerText = player2_name;
    document.getElementById("turn").style.color = dict_of_colors[player2_color];
    checkForWinner();
}

function player2Played() {
    turn = 0;
    document.getElementById("whose-turn").innerText = player1_name;
    document.getElementById("turn").style.color = dict_of_colors[player1_color];
    checkForWinner();
}

function cell1Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-1-img").src = "./img/" + player1_color + "-x.png";
        game_grid[0][0] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-1-img").src = "./img/" + player2_color + "-o.png";
        game_grid[0][0] = 1;
        player2Played();
    }
}

function cell2Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-2-img").src = "./img/" + player1_color + "-x.png";
        game_grid[0][1] = 0;
        // console.log("NOT HERE")
        player1Played();
    } else if (turn == 1) { // O (player 2)
        // console.log("HERE")
        document.getElementById("cell-2-img").src = "./img/" + player2_color + "-o.png";
        game_grid[0][1] = 1;
        player2Played();
    }
}

function cell3Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-3-img").src = "./img/" + player1_color + "-x.png";
        game_grid[0][2] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-3-img").src = "./img/" + player2_color + "-o.png";
        game_grid[0][2] = 1;
        player2Played();
    }
}

function cell4Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-4-img").src = "./img/" + player1_color + "-x.png";
        game_grid[1][0] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-4-img").src = "./img/" + player2_color + "-o.png";
        game_grid[1][0] = 1;
        player2Played();
    }
}

function cell5Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-5-img").src = "./img/" + player1_color + "-x.png";
        game_grid[1][1] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-5-img").src = "./img/" + player2_color + "-o.png";
        game_grid[1][1] = 1;
        player2Played();
    }
}

function cell6Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-6-img").src = "./img/" + player1_color + "-x.png";
        game_grid[1][2] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-6-img").src = "./img/" + player2_color + "-o.png";
        game_grid[1][2] = 1;
        player2Played();
    }
}

function cell7Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-7-img").src = "./img/" + player1_color + "-x.png";
        game_grid[2][0] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-7-img").src = "./img/" + player2_color + "-o.png";
        game_grid[2][0] = 1;
        player2Played();
    }
}

function cell8Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-8-img").src = "./img/" + player1_color + "-x.png";
        game_grid[2][1] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-8-img").src = "./img/" + player2_color + "-o.png";
        game_grid[2][1] = 1;
        player2Played();
    }
}

function cell9Click() {
    if (turn == 0) { // X (player 1)
        document.getElementById("cell-9-img").src = "./img/" + player1_color + "-x.png";
        game_grid[2][2] = 0;
        player1Played();
    } else if (turn == 1) { // O (player 2)
        document.getElementById("cell-9-img").src = "./img/" + player2_color + "-o.png";
        game_grid[2][2] = 1;
        player2Played();
    }
}