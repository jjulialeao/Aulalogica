class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome =nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instancia Classes - Criar objetos
let hero = new Personagem("Brutos Corajoso 😼", "Herói", 100, 100, 0);
let boss = new Personagem("Zorg Malvado 🐹", "Chefão", 100, 100, 50); 
// Preencher os Status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-heroi").textContent = hero.titulo;
// Boss
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
// Criar Habilidades
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🌟 Skill", 8, 10, 0),
    new Habilidade(3, "☄️ Supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    containerBtn.appendChild(btn);
}) ;