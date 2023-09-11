function resolve() {
    // fonction éxecutée lors du Click du boutton "Résoudre"
    // fonction principale

    // saisie des valeurs insérées dans les 3 cases
    var a = parseFloat(document.getElementsByClassName("variable")[0].value);
    var b = parseFloat(document.getElementsByClassName("variable")[1].value);
    var c = parseFloat(document.getElementsByClassName("variable")[2].value);



    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) /* si a , b et c sont toutes des nombres */ {
        document.getElementById("answer").style.visibility = "visible"; //rend visible la place pour afficher les Solutions de l'équation (la zone en bleu ciel)
        var delta = b * b - (4 * a * c);
        // les conditions
        if (a === 0) {
            if (b === 0) {
                if (c === 0) {
                    document.getElementById("value_of_x").innerHTML = "";
                    document.getElementById("solution_final").innerHTML = "S = ]-∞ ; +∞[";
                } else {
                    document.getElementById("value_of_x").innerHTML = "Résolution <b>impossible</b>";
                    document.getElementById("solution_final").innerHTML = "";

                }
            } else {
                var x = -c / b;
                document.getElementById("value_of_x").innerHTML = "<i>x = " + x + "</i>";
                document.getElementById("solution_final").innerHTML = "S = { " + x + " }";
            }

            // il se peut que l'utilisateur insert une équation qui n'est pas du second ordre (a = 0) , alors ces conditions ci-dessus est l'alternative pour des réponses exacts
            //on n'a pas utilisé le constructeur SWITCH , mais plutôt IF ELSE , car ces conditions tiennent en compte plusieurs variables


        } else if (delta > 0) {
            var x1, x2;
            x1 = (-b - Math.sqrt(delta)) / (2 * a);
            x2 = (-b + Math.sqrt(delta)) / (2 * a);
            if (!racineParfaite(delta)) /* si Delta n'est pas une racine parfaite */ {
                // il va y avoir beaucoup de nombres après virgule, donc on va réduire x1 et x2 à 2 chiffres après virgule
                x1 = Number(x1.toFixed(2));
                x2 = Number(x1.toFixed(2));
                // la méthode .toString() retourne avec une valeur STRING, donc on utilise la fonction Number pour le reconvertir (les variables x1 et x2) en NUMBER 
            }
            document.getElementById("value_of_x").innerHTML = "<i>x<sub>1</sub>=" + x1 + "</i> &nbsp &nbsp &nbsp <b>et</b> &nbsp &nbsp &nbsp <i>x<sub>2</sub>=" + x2 + "</i>";
            document.getElementById("solution_final").innerHTML = "S = { " + x1 + " ; " + x2 + " }";
        } else if (delta === 0) {
            var x = -b / (2 * a);
            document.getElementById("value_of_x").innerHTML = "<i>x<sub>1</sub> = x<sub>2</sub> = " + x + "</i>";
            document.getElementById("solution_final").innerHTML = "S = { " + x + " }";
        } else {
            //cas pour    Delta < 0
            document.getElementById("value_of_x").innerHTML = "L'équation n'admet <b>aucune solution.</b>";
            document.getElementById("solution_final").innerHTML = "S = ∅";
        }


    } else {
        // on va afficher un message d'erreur : soit il y a encore de case(s) vide(s) , soit l'utilisateur a inséré des caractères qui ne sont pas des nombres
        document.getElementById("condition").style.visibility = "visible";
        setTimeout(removeCondition, 5000); //Le message d'erreur disparait après 5 secondes
    }
}








function removeCondition() {
    document.getElementById("condition").style.visibility = "hidden";
}

function removeAnswer() {
    document.getElementById("answer").style.visibility = "hidden";
}

function racineParfaite(x) {
    //retourne True si on a une racine parfaite
    //retourne False autrement
    let i = 0;
    while (i * i < x) {
        i++;
    }
    if (i * i == x) {
        return true;
    } else {
        return false;
    }
}