/**
 * Mon premier JavaScript
 * @author Steve Fallet <steve.fallet@divtec.ch>
 * @version 0.1
 * @since 2023.08.29
 */

'use strict';

// Récupère le 1er <h1>
let h1 = document.querySelector('h1');
// Retourne tous les <p> dans un tableau
let tabPara = document.querySelectorAll('p');
// Affiche le contenu des variables h1 et tabPara
// console.log(h1, tabPara);
// Afficher le 1er <p>
// console.log(tabPara[0]);

// Récupération bouton Ajouter
let btAjouter = document.querySelector('.ajouter');
let inputArticle = document.getElementById('article');
let ulArticles = document.querySelector('ul.articles');
// console.log(ulArticles);

// Ecoute événement click du bouton
btAjouter.addEventListener('click', () => {
    ulArticles.innerHTML += '<li>' + inputArticle.value + '</li>';
    // Vide le champ Article
    inputArticle.value = '';
});

// Demander l'âge du visiteur
let ageVisiteur = prompt('Quel âge as-tu ?');
// Transformer ageVisiteur en entier
ageVisiteur = parseInt(ageVisiteur);
// Tester si c'est un nombre
if (isNaN(ageVisiteur)) {
    alert('Erreur, entre un nombre !');
} else {
    alert(`Tu as ${ageVisiteur} ans`);
}


