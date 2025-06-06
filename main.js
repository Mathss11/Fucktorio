window.onload = reloadInventaire;
// Liste des noms de ressources
const ressourcesNoms = [
    "Zinc Brut", "Lingot de Zinc", "Uranium Brut", "Uranium raffiné", "Dechets Radioactifs", "Plutonium",
    "Or Brut", "Lingot d'or", "Fil d'or", "Cables avancés", "Transformateur", "Batteries", "Bois",
    "Caoutchouc", "Cuivre Brut", "Lingot de Cuivre", "Fil de Cuivre", "Cables basiques", "Pétrole",
    "Plastique", "Fer Brut", "Lingot de Fer", "Plaque de Fer", "Vis", "Pierre Brute", "Silice",
    "Circuit Imprimé", "Charbon", "Lingot d'Acier", "Plaque Renforcée", "Coque Électronique", "MOAB"
];

// Liste des liens d'images, **dans le même ordre** que ressourcesNoms
const ressourcesImages = [
    "lien_vers_image_zinc_brut.png",
    "lien_vers_image_lingot_zinc.png",
    "lien_vers_image_uranium_brut.png",
    // ... (complète la liste pour chaque ressource)
    "lien_vers_image_moab.png"
];
// On cible le bloc inventaire (à adapter selon ton HTML)
const inventaireDiv = document.querySelector('.inventaire');

// On ajoute chaque ressource dans l'inventaire
ressourcesNoms.forEach((nom, i) => {
    // Génère un id unique et lisible pour chaque ressource
    const id = nom.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // retire accents
        .replace(/[^a-z0-9]/g, ""); // retire espaces et apostrophes

    inventaireDiv.innerHTML += `
        <div class="item-stock">
            <img src="${ressourcesImages[i]}" class="inv-icon" alt="${nom}">
            <span id="${id}">0</span> ${nom}
        </div>
    `;
});

function reloadInventaire() {
    ressourcesNoms.forEach(nom => {
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
    fetch("http://localhost:8080/API/ajouter/ressource/Bois", {
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
    fetch("http://localhost:8080/API/ajouter/ressource/Pierre", {
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
