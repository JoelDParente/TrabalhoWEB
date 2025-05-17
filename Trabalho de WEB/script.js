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
let palavraSeparada, num = 2, palavraDigitada;
const inputs = document.querySelectorAll('.linha');

function bloqueador() {
  for (num; num <= 6; num++) {
    const linha = document.querySelectorAll('.linha' + num);
    linha.forEach(linha => {
      linha.style.backgroundColor = '#30363D';

      linha.addEventListener('keydown', function bloqueador(event) {
        event.preventDefault();
      })

      linha.addEventListener('paste', function bloqueiaColar(event) {
        event.preventDefault();
      })
    });
  }
}

document.addEventListener('DOMContentLoaded', function inicializarJogo() {
  let indice = Math.floor(Math.random() * palavras.length);
  palavraSeparada = palavras[indice].split('');
  console.log(palavras[indice]);
  bloqueador();
})

inputs.forEach(input => {
  input.addEventListener('keydown', function bloquearNumeros(event) {
    if (event.key >= '0' && event.key <= '9') {
      event.preventDefault();
    }
  })
});

document.addEventListener('keydown', function verificarIgualdade(event) {
  let num = 1;
  if (event.key == 'Enter') {
    let linha = document.getElementsByClassName('linha' + num);
    for (let index = 0; index < linha.length; index++) {
      palavraDigitada[index] = linha[index].value
      if (palavraSeparada[index] == palavraDigitada[index]) {
        linha[index].style.backgroundColor = "green"
      }
      
    }
  }
   

});