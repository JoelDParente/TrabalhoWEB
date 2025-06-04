const palavras = ["amigo", "anexo", "antes", "apito", "aviso", "banco", "barco", "bicho", "bocas", "bolsa",
  "cacto", "caixa", "camas", "campo", "canal", "casas", "cofre", "corpo", "curso", "dados",
  "dança", "dedos", "doido", "drama", "entre", "falar", "festa", "ficha", "focos", "fundo",
  "garfo", "gente", "gosto", "grade", "grito", "grupo", "idade", "idoso", "igual", "janta",
  "jogar", "junto", "lento", "letra", "livro", "luzes", "lugar", "lider", "massa", "meias",
  "medio", "menos", "mesmo", "missa", "muito", "nariz", "natal", "nuvem", "nivel", "noite",
  "norte", "obter", "olhos", "ossos", "pacto", "pagar", "papel", "pente", "peito", "piano",
  "poder", "praia", "prato", "prova", "quase", "quilo", "risco", "reino", "rosto", "roupa",
  "saber", "salas", "salto", "senso", "sonho", "tarde", "tempo", "terra", "tirar", "tomar",
  "trago", "troca", "troco", "turma", "unido", "vapor"];

//Variáveis globais
let palavraSecreta, tentativaAtual = "", linhaAtual = 0;
let letras = "qwertyuiopasdfghjklzxcvbnm";
//Elementos DOM
const tabuleiro = document.getElementById("tabuleiro");
const teclado = document.getElementById("teclado");
const mensagem = document.getElementById("mensagem");

//Evento que inicializa o jogo, sorteia a palavra e cria o tabuleiro.
document.addEventListener('DOMContentLoaded', function inicializarJogo() {
  let indice = Math.floor(Math.random() * palavras.length);
  palavraSecreta = palavras[indice];

  for (let i = 0; i < 6; i++) {
    let linha = document.createElement("div");
    linha.className = "linha";
    for (let j = 0; j < 5; j++) {
      let celula = document.createElement("div");
      celula.className = "celula";
      linha.appendChild(celula);
    }
    tabuleiro.appendChild(linha);
  }

});

function atualizarLinha() {
  let linha = tabuleiro.children[linhaAtual];
  for (let i = 0; i < 5; i++) {
    let celula = linha.children[i];
    celula.textContent = tentativaAtual[i] || "";
  }
}

function adicionarLetra(letra) {
  if (tentativaAtual.length < 5) {
    tentativaAtual += letra;
    atualizarLinha();
  }
}

function apagarLetra() {
  tentativaAtual = tentativaAtual.slice(0, -1);
  atualizarLinha();
}

function verificar() {
  if (tentativaAtual.length !== 5) {
    mensagem.textContent = "Escreva alguma palavra com 5 letras";
    return;
  }

  let linha = tabuleiro.children[linhaAtual];
  let palavra = palavraSecreta;
  let status = Array(5).fill("errado");
  let letrasUsadas = palavra.split("");

  //verifica se a palavra é a certa
  for (let i = 0; i < 5; i++) {
    if (tentativaAtual[i] === palavra[i]) {
      status[i] = "correto";
      letrasUsadas[i] = null;
    }
  }

  //Letra amarelas e verdes
  for (let i = 0; i < 5; i++) {
    if (status[i] === "correto") continue;
    const pos = letrasUsadas.indexOf(tentativaAtual[i]);
    if (pos !== -1) {
      status[i] = "parcial";
      letrasUsadas[pos] = null;
    }
  }

  //atualiza a linha atual
  for (let i = 0; i < 5; i++) {
    const letra = tentativaAtual[i];
    const celula = linha.children[i];
    celula.classList.add(status[i]);

    // Atualiza a tecla correspondente
    const tecla = document.querySelector(`.tecla[data-letra="${letra}"]`);
    if (tecla) {
      if (
        tecla.classList.contains("correto") ||
        (tecla.classList.contains("parcial") && status[i] === "errado")
      ) {
        continue;
      }
      tecla.classList.remove("errado", "parcial", "correto");
      tecla.classList.add(status[i]);
    }
  }

  if (tentativaAtual === palavra) {
    mensagem.textContent = " Parabéns! Você acertou!";
    teclado.innerHTML = "";
  } else if (linhaAtual === 5) {
    mensagem.textContent = ``;
    teclado.innerHTML = "";
  } else {
    linhaAtual++;
    tentativaAtual = "";
  }
}

//Cria o teclado digital, digamos...
function criarTeclado() {
  [...letras].forEach(letra => {
    const btn = document.createElement("button");
    btn.className = "tecla";
    btn.textContent = letra;
    btn.setAttribute("data-letra", letra); 
    btn.onclick = () => adicionarLetra(letra);
    teclado.appendChild(btn);
  });

  const enter = document.createElement("button");
  enter.className = "tecla grande";
  enter.textContent = "ENTER";
  enter.onclick = verificar;
  teclado.appendChild(enter);

  const apagar = document.createElement("button");
  apagar.className = "tecla grande";
  apagar.textContent = "⌫";
  apagar.onclick = apagarLetra;
  teclado.appendChild(apagar);
}

criarTeclado();

//Habilita o teclado para escrever.
document.addEventListener("keydown", e => {
  let tecla = e.key.toLowerCase();
  if (tecla === "enter") {
    verificar();
  } else if (tecla === "backspace") {
    apagarLetra();
  } else if (/^[a-z]$/.test(tecla)) {
    adicionarLetra(tecla);
  }
});