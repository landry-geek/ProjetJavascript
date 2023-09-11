const nbr_img = document.querySelectorAll("img").length; // le nombre d'images
const images = document.querySelectorAll("img"); //(Tableau) tous les images
var compteur = 0;


var action = setInterval(main, 3000);

function main() {
    var compteur2;
    for (compteur2 = 0; compteur2 < nbr_img; compteur2++) {
        images[compteur2].style.zIndex = 1;
        //pour que toutes les images (sans exception) aient un z-index : 1
    }
    images[compteur].style.zIndex = 2; //pour que l'image (qui doit être afficher) ait un z-index : 1   et s'affiche alors en premier plan
    compteur++; //on l'incrémente pour que l' image suivante puisse être affichée (lors du prochain execution de cette fonction , grâce à setInterval)

    if (compteur == nbr_img) {
        compteur = 0;
        // on lui redonne une valeur 0 pour ne jamais sortir des valeurs d'Index du Tableau d'image (lors de ce boucle infine avec set Interval)   
    }
}