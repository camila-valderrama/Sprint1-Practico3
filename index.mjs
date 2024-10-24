import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//Agregar nuevo superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//Leer y mostrar la lista de superhéroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados:');
console.log(superheroes);

