import "./styles.css";
import { averageAge, averageNumberOfHobbies } from "./func/user-functions";
import {
	averageMonsterAge,
	averageNumberOfTentacles,
	getAllNoWingedMonster,
	numberOfMonstersWithWings,
	prettyPrintMonster,
} from "./func/monster";
import { commonColor, Dog, numberOfColors } from "./func/dog";

// Fixa så funktionen gör det den ska
const printSum = (a, b) => {
	console.log(0);
};

printSum(1, 2);
printSum(5, 12);

const arr = [
	{
		name: "Stina",
		hobby: ["läsa böcker"],
		age: 67,
	},
	{
		name: "Lisa",
		hobby: ["åka skidor"],
		age: 26,
	},
	{
		name: "Mio",
		hobby: ["spela rollspel", "spela brädspel"],
		age: 22,
	},
	{
		name: "Olle",
		hobby: ["sportklättring", "vandra", "sticka", "virka"],
		age: 38,
	},
	{
		name: "Leo",
		hobby: ["matlagning", "bakning"],
		age: 17,
	},
];

console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(arr)}`);
console.log(
	`Medelantalet hobbies per användare är ${averageNumberOfHobbies(arr)}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna

const dogs: Dog[] = [
	{ name: "Nisse", color: "brown" },
	{ name: "Fiffi", color: "white" },
	{ name: "Fluffe", color: "black" },
	{ name: "Hoppe", color: "beige" },
	{ name: "Pluto", color: "gray" },
	{ name: "Winter", color: "gray" },
	{ name: "Rolf", color: "brown" },
	{ name: "Benny", color: "brown" },
	{ name: "Krister", color: "brown" },
];

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
	`Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg

const monsters = [
	{ name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
	{ name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
	{ name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
	{ name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
	{ name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
	{
		name: "Oligarnaclech",
		age: 36,
		tentacles: 675,
		eyes: 148,
		hasWings: true,
	},
	{ name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
	{ name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
	{ name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
	{ name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
	{ name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
	`Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
		monsters
	)}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters[0]);

console.log(
	`Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = getAllNoWingedMonster(monsters);
console.log(noWingedMonster);
