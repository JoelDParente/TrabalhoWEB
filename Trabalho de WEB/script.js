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
const linhas = document.getElementById('linha1');


function sorteador() {
  let indice = Math.floor(Math.random() * palavras.length);
  return indice;  
}

function mudarInput() {
  
}