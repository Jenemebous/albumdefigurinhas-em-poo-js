class Album {
    static totalFigurinhas = 0;

    constructor(nome, figurinhas = []) {
        this._nome = nome;
        this._figurinhas = figurinhas;
        Album.totalFigurinhas += this._figurinhas.length;
    }

    adicionarFigurinha(numero) {
        if (!this._figurinhas.includes(numero)) {
            this._figurinhas.push(numero);
            Album.totalFigurinhas += 1;
            return true;
        }
        return false; 
    }

    verificarFigurinha(numero) {
        return this._figurinhas.includes(numero);
    }

    get nome() {
        return this._nome;
    }

    get figurinhas() {
        return this._figurinhas;
    }

    static get totalFigurinhas() {
        return Album.totalFigurinhas;
    }
}

let album1 = new Album("Stardew Valley", [12]);
let album2 = new Album("Pokémon", [20]);
let album3 = new Album("Point Blank", [3]);

album1.adicionarFigurinha(12);
album2.adicionarFigurinha(20);
album3.adicionarFigurinha(3);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(Album.totalFigurinhas);
