// .map(): Criar uma lista com os dados alterados
const metro = [1,5,10];
const centimetros = metro.map(m => m * 100);
centimetros.forEach(c => console.log(`${c}cm`));

// .filter(): Cria uma lista com os itens especificados
const notas = [8,4,9,5];
const notas_baixas = notas.filter(n => n <6); 
notas_baixas.forEach(n => console.log(n));

// .find(): Retorna apenas o primeiro item que passa na conição
const alunos = ["João", "Maria", "José"];
const busca = alunos.find(nome => nome === "Maria");
console.log(busca);
// .every(): Retorna se todos passam no predicado
const entregas = [true, true, false];
const todosEntregaram = entregas.every(e => e === true);
console.log(todosEntregaram); 

// .toUpperCase . toLowerCase: colocar as letras em maiúsculas/minúsculas
const nomes = ["ana", "Bia"];
const maiusculas = nomes.map(n => n.toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));
nomes.map(n => n.toLowerCase())
    .forEach(n => console.log(n));

// .starsWith() .endWith(): retorna quem começa/termina com...
const arquivos = ["Foto.jpg", "texto.txt", "ferias.jpg"];
const apenasFotos = arquivos
    .filter(arq => arq.endsWith(".jpg"));
apenasFotos.forEach(arq => console.log(arq));

// .includes(): Verifica se um texro contém outro
const produtos =
    ["Monitos Dell", "Mouse Razer", "Teclado Dell"];
produtos
    .filter(p => p.includes("Dell"))
     .map(p => p.toUpperCase())
    .forEach(i => console.log(i));

    // .replace(): Troca uma parte do texto por outa
let telefone = "(61) 1234-5678";
const escondido = telefone  = telefone.replace("(61)", "(**)");
console.log(escondido);