let linkMettreAJourAffichageButton =  document.getElementById("mettreAJourAffichageButton");
let linkMinerCharbonButton =  document.getElementById("minerCharbonButton");
let linkAffichageCharbonSpan =  document.getElementById("affichageCharbonSpan");

var charbon = 0;

function main() {
    linkMettreAJourAffichageButton.addEventListener("click", () => {
        miseAJourAffichage();
    })
    linkMinerCharbonButton.addEventListener("click", () => {
        minerCharbon();
    })
}

function miseAJourAffichage() {
    if (charbon > 0) {
        linkAffichageCharbonSpan.style = "";
        linkAffichageCharbonSpan.innerHTML = "Charbon x" + charbon;
    } else {
        linkAffichageCharbonSpan.style = "display:none;";
    }
}

function appelsBaseDeDonnees() {

}

function minerCharbon() {
    charbon++;
}

main();