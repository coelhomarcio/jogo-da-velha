function iniciar(){jogadorI=jogador.value;let tabuleiro=document.createElement("table"),btnR=document.createElement("button"),btnV=document.createElement("button");document.getElementsByTagName("section")[0].appendChild(tabuleiro),document.getElementsByTagName("section")[0].appendChild(btnR),document.getElementsByTagName("section")[0].appendChild(btnV),document.getElementsByTagName("p")[0].textContent=`É a vez do jogador ${jogador.value}.`,document.getElementsByTagName("p")[1].style.display="none",tabuleiro.style.margin="5% auto",tabuleiro.style.textAlign="center",btnR.textContent="Reiniciar",btnR.style.display="block",btnR.style.margin="5% auto",btnR.addEventListener("click",function(){reiniciar()}),btnV.textContent="Voltar",btnV.style.display="block",btnV.style.margin="5% auto",btnV.addEventListener("click",function(){voltar()});for(let i=0;i<=2;i++){eval("linha"+i+" = document.createElement('tr')"),eval("tabuleiro.appendChild(linha"+i+")");for(let j=0;j<=2;j++)eval("coluna"+j+" = document.createElement('td')"),eval("linha"+i+".appendChild(coluna"+j+")"),eval("coluna"+j+".style.width = '40px'"),eval("coluna"+j+".style.height = '40px'"),eval("coluna"+j+".style.cursor = 'pointer'"),eval("coluna"+j+".addEventListener('mouseover', function() { eventos("+i+", "+j+", 0) })"),eval("coluna"+j+".addEventListener('mouseout', function() { eventos("+i+", "+j+", 1) })"),eval("coluna"+j+".addEventListener('click', function() { eventos("+i+", "+j+", 2) })"),i<=1&&j<=1?(eval("coluna"+j+".style.borderBottom = '2px solid #444'"),eval("coluna"+j+".style.borderRight = '2px solid #444'")):i<=1&&2===j?eval("coluna"+j+".style.borderBottom = '2px solid #444'"):2===i&&j<=1&&eval("coluna"+j+".style.borderRight = '2px solid #444'")}}function reiniciar(){jogo={velha:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]]},jogador.value=jogadorI,document.getElementsByTagName("p")[0].textContent=`É a vez do jogador ${jogador.value}.`,jogada=1,document.getElementsByTagName("button")[1].style.color="initial";for(let e=0;e<=8;e++)document.getElementsByTagName("td")[e].textContent=""}function voltar(){jogo={velha:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]]},jogador.value="X",jogada=1,document.getElementsByTagName("button")[1].style.color="initial",document.getElementsByTagName("table")[0].remove(),document.getElementsByTagName("button")[2].remove(),document.getElementsByTagName("button")[1].remove(),document.getElementsByTagName("p")[0].textContent="Selecione o jogador que iniciará a partida.",document.getElementsByTagName("p")[1].style.display="block"}function eventos(e,o,t){if(jogo.velha){let a;a=0===e?document.getElementsByTagName("td")[o]:1===e?document.getElementsByTagName("td")[o+3]:document.getElementsByTagName("td")[o+6],0===t&&!0===jogo.velha[e][o]?("X"===jogador.value?a.textContent="X":a.textContent="O",a.style.color="#c334"):1===t&&!0===jogo.velha[e][o]?(a.textContent="",a.style.opacity="100%"):2===t&&!0===jogo.velha[e][o]&&("X"===jogador.value?(a.textContent="X",jogo.velha[e][o]=jogador.value,jogador.value="O"):(a.textContent="O",jogo.velha[e][o]=jogador.value,jogador.value="X"),a.style.color="initial",document.getElementsByTagName("p")[0].textContent=`É a vez do jogador ${jogador.value}.`,jogada>=9?(jogo={velha:!1},document.getElementsByTagName("p")[0].textContent="Deu Velha!"):"X"===jogo.velha[0][0]&&"X"===jogo.velha[0][1]&&"X"===jogo.velha[0][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[1][0]&&"X"===jogo.velha[1][1]&&"X"===jogo.velha[1][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[2][0]&&"X"===jogo.velha[2][1]&&"X"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[0][0]&&"X"===jogo.velha[1][0]&&"X"===jogo.velha[2][0]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[0][1]&&"X"===jogo.velha[1][1]&&"X"===jogo.velha[2][1]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[0][2]&&"X"===jogo.velha[1][2]&&"X"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[0][0]&&"X"===jogo.velha[1][1]&&"X"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"X"===jogo.velha[0][2]&&"X"===jogo.velha[1][1]&&"X"===jogo.velha[2][0]?(document.getElementsByTagName("p")[0].textContent="O Jogador X ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][0]&&"O"===jogo.velha[0][1]&&"O"===jogo.velha[0][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[1][0]&&"O"===jogo.velha[1][1]&&"O"===jogo.velha[1][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[2][0]&&"O"===jogo.velha[2][1]&&"O"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][0]&&"O"===jogo.velha[1][0]&&"O"===jogo.velha[2][0]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][1]&&"O"===jogo.velha[1][1]&&"O"===jogo.velha[2][1]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][2]&&"O"===jogo.velha[1][2]&&"O"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][0]&&"O"===jogo.velha[1][1]&&"O"===jogo.velha[2][2]?(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}):"O"===jogo.velha[0][2]&&"O"===jogo.velha[1][1]&&"O"===jogo.velha[2][0]&&(document.getElementsByTagName("p")[0].textContent="O Jogador O ganhou!",jogo={velha:!1}),jogada++)}else document.getElementsByTagName("button")[1].style.color="red"}let jogada=1,jogo={velha:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]]},jogador=document.getElementsByTagName("select")[0],jogadorI;document.getElementsByTagName("button")[0].addEventListener("click",function(){iniciar()});