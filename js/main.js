/**
 * Mon premier JS
 * @author  Steve Fallet
 * @version 0.0.1
 * @since   2023-08-29
 */
"use strict";

// Récupère tous les paragraphes du document
let tabPara = document.querySelectorAll("p");
let btAjouter = document.querySelector("button.ajouter");
let txtArticle = document.querySelector("#article");
let ulArticles = document.querySelector("ul.articles");

// Affiche le contenu des variables dans la console
console.log(tabPara, btAjouter, txtArticle, ulArticles);
// Ecoute le click sur btAjouter
btAjouter.addEventListener("click", () => {
    ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
    // Vide le champ texte
    txtArticle.value = "";
});

// Demande l'âge du visiteur
let age = prompt("Quel est ton âge ?");
// Transforme age en entier
age = parseInt(age);
// Si age n'est pas un nombre => erreur
if(isNaN(age)) {
    alert("Entrez un nombre !");
} else {
    // Affiche l'âge du visiteur
    alert(`Tu as ${age + 10} ans !`);
}

