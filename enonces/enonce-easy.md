# Exercice JS / Chronometre

Cet exercice peut comprendre des bonus.

## Introduction

Dans cet exercice vous allez devoir créer un chronomètre fonctionnel en HTML / CSS et javascript.

## Énoncé

Des images vous sont fournies pour l'apparence générale du chronomètre ainsi que pour les digits de l'écran LCD.

Vous allez devoir gérer le positionnement ainsi que l'affichage des digits pour :
- les minutes,
- les secondes,
- les centièmes de secondes.

L'affichage devra se faire ainsi : MM SS cc
On acceptera qu'il n'y ait pas le ":" entre les minutes et les secondes. // :after + content:":"

Pour commencer seuls 2 boutons devront fonctionner : 
- celui de droite (sur la photo) pour lancer ou arrêter le chrono
- celui de gauche pour remettre le chrono à zéro

Bien entendu on peut faire un reset du chrono aussi bien lorsque celui-ci est lancé qu'à l'arrêt. // --> faire à la fin quand tout fonctionne

## Bonus 

1. Rajouter la possibilité de passer en mode horloge en utilisant le bouton central. 
Le chrono devra alors afficher HH MM ss pour heures, minutes et secondes.

## Méthodologie

Afin de bien aborder l'exercice, voici les étapes que nous vous recommandons de respecter :

1. Commencez déjà par placer votre chronomètre au centre de votre document HTML en CSS
2. Positionnez et dimennsionnez des "divs" par dessus votre chronomètre pur chacun des digits, pensez à les identifier.
3. En JS créer une fonction d'initialisation qui se lance au chargement complet de la page et initialise les variables dont vous aurez besoin.
4. Créez un évenement sur chacun des boutons ( // addEventListener click), lançant deux fonctions distinctes, l'une pour démarrer, ou arrêter le chrono, et l'autre pour le remettre à zéro. 
5. Commencez par développer la fonction de lancement du chrono, il va falloir stocker et modifier un bouléen pour dire si le chrono est lancé ou pas.
6. Si il est lancé, il faut initialiser un timer (interval en js) qui exécutera une fonction précise toutes les 10 milisecondes.
7. Sinon, il faut arrêter le timer.
8. La fonction se répétendant toutes les 10 milisecondes doit simplement augmenter une variable représentant les centièmes de secondes du chrono (de 0 à 9).
9. Lorsque cette variable dépasse 9, il faut la remttre à zéro et incrémenter une variable représentant les dixièmes de secondes, et ainsi de suite jusqu'aux dizaines de minutes.
10. Commencez par faire fonctionner ce compte dans la console (MM:SS:cc)
11. Quand tout marche dans la console, vous pourrez cibler vos divs réprésentant les digits pour en changer le contenu (ou le background). Pour cela le mieux est de passer par une fonction dédiée à la mise à jour des divs.
12. La fonction reset doit simplement remettre à zéro tous les compteurs de tous les digits et demander le raffraichissement de l'écran. 

## Astuces

1. La fonction de mse à jour de l'affichage n'a pas à être optimisée. Elle peut très bien demander le réafichage de tous les digits même si un seul ou deux ont en fait réellement besoin de changer.
2. La fonction de compte des centièmes de secondes (lancée par le timer), n'ai presque qu'une suite de 'if' les uns derrières les autres disant, en résumé : "si un digit arrive à son max, alors, on le remet à zéro et on incrémente le digit suivant" (ex: les centièmes arrivent à 10, je les remets à zéro et j'incrémente les dixièmes, si les dizièmes arrivent à 10, je les remets à zéro et j'incrémenter les unités des minutes...).

## Recommandations / Attention

1. Il va falloir déclarer plusieurs événements possibles (pour le chargement de la page et pour les clic sur les boutons).
2. Il va falloir utiliser un timer (interval). L'nterval se déclare en millièmes de secondes.
3. Il va falloir cibler précisément des éléments du HTML (pensez à les identifier).

## Ressources

## Théorie

### Liens recommandés

Pour cet exeercice, vous aurez besoin de :
- [JS / window.setInterval(fonction, delai)](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval)
- [JS / Element.querySelector("selector")](https://developer.mozilla.org/fr/docs/Web/API/Element/querySelector)
- [JS / element.addEventListener("type", fonction)](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

## Culture

Historiquement, les développeur utilisaient beaucoup il y'a encore peu de temps l'API jQuery pour faire se genre de choses (évènements, target, animation...) car le javascript "vanilla" n'offrer pas les fonctions suffisantes. Aujourd'hui on peut presque tout faire en vanilla JS, mais, vous tomberez souvent sur des sites ou des templates wordpress, par exemple, développés en jQuery.