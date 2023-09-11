function calcul() {

    var i1 = parseFloat(document.getElementsByClassName("variable")[0].value);
    var r1 = parseFloat(document.getElementsByClassName("variable")[1].value);
    var r2 = parseFloat(document.getElementsByClassName("variable")[2].value);
    var r3 = parseFloat(document.getElementsByClassName("variable")[3].value);


    if (!isNaN(i1) && !isNaN(r1) && !isNaN(r2) && !isNaN(r3)) {
        document.getElementById("answer").style.visibility = "visible";
        var i2, i3, u1, u2, u3;
        i2 = (r3 / (r1 + r2)) * i1;
        i3 = i1 - i2;
        u1 = r1 * i1;
        u2 = r2 * i2;
        u3 = r3 * i3;
        if (i2 % 1 != 0) i2 = Number(i2.toFixed(2));
        if (i3 % 1 != 0) i3 = Number(i3.toFixed(2));
        if (u1 % 1 != 0) u1 = Number(u1.toFixed(2));
        if (u2 % 1 != 0) u2 = Number(u2.toFixed(2));
        if (u3 % 1 != 0) u3 = Number(u3.toFixed(2));
        document.getElementById("answer").innerHTML = "<b>I<sub>1</sub></b> = " + i1 + "A &nbsp; , &nbsp; <b>I<sub>2</sub></b> = " + i2 + "A &nbsp; , &nbsp; <b>I<sub>3</sub></b> = " + i3 + "A &nbsp; , &nbsp; <b>U<sub>1</sub></b> = " + u1 + "V &nbsp; , &nbsp; <b>U<sub>2</sub></b> = " + u2 + "V &nbsp; et &nbsp; <b>U<sub>3</sub></b> = " + u3 + "V";
    } else {
        // on va afficher un message d'erreur : soit il y a encore de case(s) vide(s) , soit l'utilisateur a inséré des caractères qui ne sont pas des nombres
        document.getElementById("Condition").style.visibility = "visible";
        setTimeout(removeCondition, 5000); //Le message d'erreur disparait après 5 secondes
    }

}


function removeCondition() {
    document.getElementById("Condition").style.visibility = "hidden";
}

function removeAnswer() {
    document.getElementById("answer").style.visibility = "hidden";
}