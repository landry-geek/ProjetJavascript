function resolve() {

    //collecte des valeurs saisies
    var a1 = parseFloat(document.getElementsByClassName("variable")[0].value);
    var b1 = parseFloat(document.getElementsByClassName("variable")[1].value);
    var c1 = parseFloat(document.getElementsByClassName("variable")[2].value);
    var d1 = parseFloat(document.getElementsByClassName("variable")[3].value);
    var a2 = parseFloat(document.getElementsByClassName("variable")[4].value);
    var b2 = parseFloat(document.getElementsByClassName("variable")[5].value);
    var c2 = parseFloat(document.getElementsByClassName("variable")[6].value);
    var d2 = parseFloat(document.getElementsByClassName("variable")[7].value);
    var a3 = parseFloat(document.getElementsByClassName("variable")[8].value);
    var b3 = parseFloat(document.getElementsByClassName("variable")[9].value);
    var c3 = parseFloat(document.getElementsByClassName("variable")[10].value);
    var d3 = parseFloat(document.getElementsByClassName("variable")[11].value);

    if (!isNaN(a1) && !isNaN(a2) && !isNaN(a3) && !isNaN(b1) && !isNaN(b2) && !isNaN(b3) && !isNaN(c1) && !isNaN(c2) && !isNaN(c3) && !isNaN(d1) && !isNaN(d2) && !isNaN(d3)) {
        document.getElementById("answer").style.visibility = "visible"; //rend visible la place pour afficher les Solutions de l'équation (la zone en bleu ciel)
        var delta = a1 * b2 * c3 + b1 * c2 * a3 + c1 * a2 * b3 - c1 * b2 * a3 - a1 * c2 * b3 - b1 * a2 * c3;
        if (delta !== 0) {
            var deltaX = d1 * b2 * c3 + b1 * c2 * d3 + c1 * d2 * b3 - c1 * b2 * d3 - d1 * c2 * b3 - b1 * d2 * c3;
            var deltaY = a1 * d2 * c3 + d1 * c2 * a3 + c1 * a2 * d3 - c1 * d2 * a3 - a1 * c2 * d3 - d1 * a2 * c3;
            var deltaZ = a1 * b2 * d3 + b1 * d2 * a3 + d1 * a2 * b3 - d1 * b2 * a3 - a1 * d2 * b3 - b1 * a2 * d3;
            var x = deltaX / delta;
            var y = deltaY / delta;
            var z = deltaZ / delta;

            if (x % 1 !== 0) {
                x = Number(x.toFixed(2));
            }
            if (y % 1 !== 0) {
                y = Number(y.toFixed(2));
            }
            if (z % 1 !== 0) {
                z = Number(z.toFixed(2));
            }
            document.getElementById("value_final").innerHTML = "<i>x = " + x + "</i> <b> &nbsp; , &nbsp; </b> <i> y = " + y + " </i> <b> &nbsp; et &nbsp; </b> <i> z = " + z + "</i>";
            document.getElementById("solution_final").innerHTML = "S = { (" + x + " ; " + y + " ; " + z + ") }";

        } else {
            document.getElementById("value_final").innerHTML = "Pas de solution";
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