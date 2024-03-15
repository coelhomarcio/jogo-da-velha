function start() {
	playerI = player.value;
	let board = document.createElement("table");
	let btnR = document.createElement("button");
	let btnV = document.createElement("button");
	document.getElementsByTagName("section")[0].appendChild(board);
	document.getElementsByTagName("section")[0].appendChild(btnR);
	document.getElementsByTagName("section")[0].appendChild(btnV);
	document.getElementsByTagName("p")[0].textContent = `É a vez do jogador ${player.value}.`;
	document.getElementsByTagName("p")[1].style.display = "none";
	board.style.margin = "5% auto";
	board.style.textAlign = "center";
	btnR.textContent = "Reiniciar";
	btnR.style.display = "block";
	btnR.style.margin = "5% auto";
	btnR.addEventListener("click", function () {
		reset();
	});
	btnV.textContent = "Voltar";
	btnV.style.display = "block";
	btnV.style.margin = "5% auto";
	btnV.addEventListener("click", function () {
		back();
	});
	for (let i = 0; i <= 2; i++) {
		eval("line" + i + " = document.createElement('tr')");
		eval("board.appendChild(line" + i + ")");
		for (let j = 0; j <= 2; j++) {
			eval("column" + j + " = document.createElement('td')");
			eval("line" + i + ".appendChild(column" + j + ")");
			eval("column" + j + ".style.width = '40px'");
			eval("column" + j + ".style.height = '40px'");
			eval("column" + j + ".style.cursor = 'pointer'");
			eval("column" + j + ".addEventListener('mouseover', function() { events(" + i + ", " + j + ", 0) })");
			eval("column" + j + ".addEventListener('mouseout', function() { events(" + i + ", " + j + ", 1) })");
			eval("column" + j + ".addEventListener('click', function() { events(" + i + ", " + j + ", 2) })");
			if (i <= 1 && j <= 1) {
				eval("column" + j + ".style.borderBottom = '2px solid #444'");
				eval("column" + j + ".style.borderRight = '2px solid #444'");
			} else if (i <= 1 && j === 2) {
				eval("column" + j + ".style.borderBottom = '2px solid #444'");
			} else if (i === 2 && j <= 1) {
				eval("column" + j + ".style.borderRight = '2px solid #444'");
			}
		}
	}
}

function reset() {
	game = {
		"velha": [[true, true, true], [true, true, true], [true, true, true]]
	};
	player.value = playerI;
	document.getElementsByTagName("p")[0].textContent = `É a vez do jogador ${player.value}.`;
	play = 1;
	document.getElementsByTagName("button")[1].style.color = "initial";
	for (let i = 0; i <= 8; i++) {
		document.getElementsByTagName("td")[i].textContent = "";
	}
}

function back() {
	game = {
		"velha": [[true, true, true], [true, true, true], [true, true, true]]
	};
	player.value = "X";
	play = 1;
	document.getElementsByTagName("button")[1].style.color = "initial";
	document.getElementsByTagName("table")[0].remove();
	document.getElementsByTagName("button")[2].remove();
	document.getElementsByTagName("button")[1].remove();
	document.getElementsByTagName("p")[0].textContent = "Selecione o jogador que iniciará a partida.";
	document.getElementsByTagName("p")[1].style.display = "block";
}

function events(line, column, event) {
	let cell;
	if (line === 0) {
		cell = document.getElementsByTagName("td")[column];
	} else if (line === 1) {
		cell = document.getElementsByTagName("td")[column + 3];
	} else {
		cell = document.getElementsByTagName("td")[column + 6];
	}
	if (event === 0 && game["velha"][line][column] === true) {
		if (player.value === "X") {
			cell.textContent = "X";
		} else {
			cell.textContent = "O";
		}
		cell.style.color = "#c334";
	} else if (event === 1 && game["velha"][line][column] === true) {
		cell.textContent = "";
		cell.style.opacity = "100%";
	} else if (event === 2 && game["velha"][line][column] === true) {
		if (player.value === "X") {
			cell.textContent = "X";
			game["velha"][line][column] = player.value;
			player.value = "O";
		} else {
			cell.textContent = "O";
			game["velha"][line][column] = player.value;
			player.value = "X";
		}
		cell.style.color = "initial";
		document.getElementsByTagName("p")[0].textContent = `É a vez do jogador ${player.value}.`;
		if (
			(game["velha"][0][0] === "X" && game["velha"][0][1] === "X" && game["velha"][0][2] === "X") ||
			(game["velha"][1][0] === "X" && game["velha"][1][1] === "X" && game["velha"][1][2] === "X") ||
			(game["velha"][2][0] === "X" && game["velha"][2][1] === "X" && game["velha"][2][2] === "X") ||
			(game["velha"][0][0] === "X" && game["velha"][1][0] === "X" && game["velha"][2][0] === "X") ||
			(game["velha"][0][1] === "X" && game["velha"][1][1] === "X" && game["velha"][2][1] === "X") ||
			(game["velha"][0][2] === "X" && game["velha"][1][2] === "X" && game["velha"][2][2] === "X") ||
			(game["velha"][0][0] === "X" && game["velha"][1][1] === "X" && game["velha"][2][2] === "X") ||
			(game["velha"][0][2] === "X" && game["velha"][1][1] === "X" && game["velha"][2][0] === "X")
		) {
			document.getElementsByTagName("p")[0].textContent = "O Jogador X ganhou!";
			document.getElementsByTagName("button")[1].style.color = "red";
			game = {"velha": false};
		} else if (
			(game["velha"][0][0] === "O" && game["velha"][0][1] === "O" && game["velha"][0][2] === "O") ||
			(game["velha"][1][0] === "O" && game["velha"][1][1] === "O" && game["velha"][1][2] === "O") ||
			(game["velha"][2][0] === "O" && game["velha"][2][1] === "O" && game["velha"][2][2] === "O") ||
			(game["velha"][0][0] === "O" && game["velha"][1][0] === "O" && game["velha"][2][0] === "O") ||
			(game["velha"][0][1] === "O" && game["velha"][1][1] === "O" && game["velha"][2][1] === "O") ||
			(game["velha"][0][2] === "O" && game["velha"][1][2] === "O" && game["velha"][2][2] === "O") ||
			(game["velha"][0][0] === "O" && game["velha"][1][1] === "O" && game["velha"][2][2] === "O") ||
			(game["velha"][0][2] === "O" && game["velha"][1][1] === "O" && game["velha"][2][0] === "O")
		) {
			document.getElementsByTagName("p")[0].textContent = "O Jogador O ganhou!";
			document.getElementsByTagName("button")[1].style.color = "red";
			game = {"velha": false};
		}
		play++;
		if (play >= 10) {
			document.getElementsByTagName("button")[1].style.color = "red";
			if (game["velha"])
				document.getElementsByTagName("p")[0].textContent = "Deu Velha!";
		}
	}
}

let play = 1;
let game = {
	"velha": [[true, true, true], [true, true, true], [true, true, true]]
};
let player = document.getElementsByTagName("select")[0];
let playerI;
document.getElementsByTagName("button")[0].addEventListener("click", function () {
	start();
});
