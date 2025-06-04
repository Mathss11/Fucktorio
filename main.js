let nbBois = 0;
let nbPierre = 0;
let nbCarburant = 0;
let nbRessourceFour = 0;


function ajouterBois() {
    nbBois++;
    document.getElementById("bois").textContent = nbBois;
}

function ajouterPierre() {
    nbPierre++;
    document.getElementById("pierre").textContent = nbPierre;
}

function modifierCarburant(val) {
    nbCarburant += val;
    if (nbCarburant < 0) nbCarburant = 0;
    document.getElementById("carburant").textContent = nbCarburant;
}

function modifierRessourceFour(val) {
    nbRessourceFour += val;
    if (nbRessourceFour < 0) nbRessourceFour = 0;
    document.getElementById("ressourceFour").textContent = nbRessourceFour;
}
