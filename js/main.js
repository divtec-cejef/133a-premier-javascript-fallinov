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
console.log(h1, tabPara);
// Afficher le 1er <p>
console.log(tabPara[0]);

