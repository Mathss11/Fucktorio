window.onload = reloadInventaire;
let nbCarburant = 0;
let nbRessourceFour = 0;

function reloadInventaire() {
    const ressources = ["Fer", "Bois", "Pierre", "Cuivre", "Or", "Zinc"];
    ressources.forEach(nom => {
        fetch(`http://localhost:8080/API/quantite/${nom}`)
            .then(resp => resp.text())
            .then(qte => {
                // Met à jour le bon <span id="fer">, <span id="bois">, etc.
                const span = document.getElementById(nom.toLowerCase());
                if (span) span.textContent = qte;
            })
            .catch(() => {
                // Si erreur, tu peux mettre un "?"
                const span = document.getElementById(nom.toLowerCase());
                if (span) span.textContent = "?";
            });
    });
}

function ajouterBois() {
    fetch("http://localhost:8080/API/ajouter/Bois", {
        method: "POST"
    })
        .then(response => response.text())
        .then(() => {
            fetch("http://localhost:8080/API/quantite/Bois")
                .then(resp => resp.text())
                .then(qte => {
                    document.getElementById("bois").textContent = qte;
                    // Pour débug, affiche dans la console aussi
                    console.log("Quantité reçue du serveur :", qte);
                });
        })
        .catch(error => {
            alert("Erreur : " + error);
        });
}

function ajouterPierre() {
    fetch("http://localhost:8080/API/ajouter/Pierre", {
        method: "POST"
    })
        .then(response => response.text())
        .then(() => {
            fetch("http://localhost:8080/API/quantite/Pierre")
                .then(resp => resp.text())
                .then(qte => {
                    document.getElementById("pierre").textContent = qte;
                    // Pour débug, affiche dans la console aussi
                    console.log("Quantité reçue du serveur :", qte);
                });
        })
        .catch(error => {
            alert("Erreur : " + error);
        });
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
