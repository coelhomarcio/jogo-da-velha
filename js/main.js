function start() {
	if (playerSelect.value === X) {
		turn = 0;
	}
	else if (playerSelect.value === O) {
		turn = 1;
	}

	let table = document.createElement("table");
	let btnReset = document.createElement("button");
	let btnBack = document.createElement("button");
	let section = document.getElementsByTagName("section")[0];
	let p0 = document.getElementsByTagName("p")[0];
	let p1 = document.getElementsByTagName("p")[1];

	section.appendChild(table);
	section.appendChild(btnReset);
	section.appendChild(btnBack);
	p0.textContent = `É a vez do jogador ${player[turn]}.`;
	p1.style.display = "none";
	table.style.margin = "5% auto";
	table.style.textAlign = "center";
	btnReset.textContent = "Reiniciar";
	btnReset.style.display = "block";
	btnReset.style.margin = "5% auto";
	btnReset.addEventListener("click", function () {
		reset();
	});
	btnBack.textContent = "Voltar";
	btnBack.style.display = "block";
	btnBack.style.margin = "5% auto";
	btnBack.addEventListener("click", function () {
		back();
	});

	for (let i = 0; i <= 2; i++) {
		eval("line" + i + " = document.createElement('tr')");
		eval("table.appendChild(line" + i + ")");

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
			}
			else if (i <= 1 && j === 2) {
				eval("column" + j + ".style.borderBottom = '2px solid #444'");
			}
			else if (i === 2 && j <= 1) {
				eval("column" + j + ".style.borderRight = '2px solid #444'");
			}
		}
	}
}

function reset() {
	board = [
		[blank, blank, blank],
		[blank, blank, blank],
		[blank, blank, blank]
	];

	if (playerSelect.value === X) {
		turn = 0;
	}
	else if (playerSelect.value === O) {
		turn = 1;
	}

	let p0 = document.getElementsByTagName("p")[0];
	let btnReset = document.getElementsByTagName("button")[1];
	let td = document.getElementsByTagName("td");

	p0.textContent = `É a vez do jogador ${player[turn]}.`;
	btnReset.style.color = "initial";

	for (let i = 0; i <= 8; i++) {
		td[i].textContent = "";
	}
}

function back() {
	board = [
		[blank, blank, blank],
		[blank, blank, blank],
		[blank, blank, blank]
	];
	playerSelect.value = X;

	let btnReset = document.getElementsByTagName("button")[1];
	let table = document.getElementsByTagName("table")[0];
	let btnBack = document.getElementsByTagName("button")[2];
	let p0 = document.getElementsByTagName("p")[0];
	let p1 = document.getElementsByTagName("p")[1];

	btnReset.style.color = "initial";
	table.remove();
	btnBack.remove();
	btnReset.remove();
	p0.textContent = "Selecione o jogador que iniciará a partida.";
	p1.style.display = "block";
}

function checkWinner() {
	if (
		board[0][0] === X && board[0][1] === X && board[0][2] === X ||
		board[1][0] === X && board[1][1] === X && board[1][2] === X ||
		board[2][0] === X && board[2][1] === X && board[2][2] === X ||
		board[0][0] === X && board[1][0] === X && board[2][0] === X ||
		board[0][1] === X && board[1][1] === X && board[2][1] === X ||
		board[0][2] === X && board[1][2] === X && board[2][2] === X ||
		board[0][0] === X && board[1][1] === X && board[2][2] === X ||
		board[0][2] === X && board[1][1] === X && board[2][0] === X
	) {
		return 1;
	}
	else if (
		board[0][0] === O && board[0][1] === O && board[0][2] === O ||
		board[1][0] === O && board[1][1] === O && board[1][2] === O ||
		board[2][0] === O && board[2][1] === O && board[2][2] === O ||
		board[0][0] === O && board[1][0] === O && board[2][0] === O ||
		board[0][1] === O && board[1][1] === O && board[2][1] === O ||
		board[0][2] === O && board[1][2] === O && board[2][2] === O ||
		board[0][0] === O && board[1][1] === O && board[2][2] === O ||
		board[0][2] === O && board[1][1] === O && board[2][0] === O
	) {
		return -1;
	}
	else if (
		board[0][0] !== blank && board[0][1] !== blank && board[0][2] !== blank &&
		board[1][0] !== blank && board[1][1] !== blank && board[1][2] !== blank &&
		board[2][0] !== blank && board[2][1] !== blank && board[2][2] !== blank
	) {
		return "Velha";
	}

	return false;
}

function events(line, column, event) {
	let winner = checkWinner();
	let p0 = document.getElementsByTagName("p")[0];
	let btnReset = document.getElementsByTagName("button")[1];
	let cell;

	if (line === 0) {
		cell = document.getElementsByTagName("td")[column];
	}
	else if (line === 1) {
		cell = document.getElementsByTagName("td")[column + 3];
	}
	else if (line === 2) {
		cell = document.getElementsByTagName("td")[column + 6];
	}

	// Event mouseover
	if (event === 0 && board[line][column] === blank && !winner) {
		if (player[turn] === X) {
			cell.textContent = X;
		}
		else if (player[turn] === O) {
			cell.textContent = O;
		}
		cell.style.color = "#c334";
	}
	// Event mouseout
	else if (event === 1 && board[line][column] === blank && !winner) {
		cell.textContent = "";
	}
	// Event click
	else if (event === 2 && board[line][column] === blank && !winner) {
		board[line][column] = player[turn];
		cell.textContent = player[turn];
		cell.style.color = "initial";
		turn = (turn + 1) % 2;
	}

	winner = checkWinner();

	if (winner) {
		if (winner === 1) {
			p0.textContent = "O Jogador X ganhou!";
		}
		else if (winner === -1) {
			p0.textContent = "O Jogador O ganhou!";
		}
		else if (winner === "Velha") {
			p0.textContent = "Deu Velha!";
		}
		btnReset.style.color = "red";
	}
	else {
		p0.textContent = `É a vez do jogador ${player[turn]}.`;
	}
}

const blank = " ";
const X = "X";
const O = "O";
const player = [X, O];
let turn;
let board = [
	[blank, blank, blank],
	[blank, blank, blank],
	[blank, blank, blank]
];
let playerSelect = document.getElementsByTagName("select")[0];
document.getElementsByTagName("button")[0].addEventListener("click", function () {
	start();
});
