let zoneSaisie = document.querySelector("#nombre") 
// let nombreSaisi = zoneSaisie.value
let boutonConvertir = document.querySelector("#btn-convertir")

// Creation de tableaux qui vont repertorier les nombres romains
const uniteNombreRomain = ["", "I", "II", "III", "IV", "V",
    "VI", "VII", "VIII", "IX"
]

const dizaineNombreRomain = ["", "X", "XX", "XXX", "XL", "L",
    "LX", "LXX", "LXXX", "XC"
]

const centaineNombreRomain = ["", "C", "CC", "CCC", "CD", "D",
    "DC", "DCC", "DCCC", "CM"
]

const milleNombreRomain = ["", "M", "MM", "MMM", "MMMM"
]

function afficherResultat() {
    let zoneAffichage = document.querySelector(".box2")
    zoneAffichage.classList.remove("alerte")
    zoneAffichage.classList.add("active")
}

function afficherErreur() {
    let zoneAffichage = document.querySelector(".box2")
    zoneAffichage.classList.add("alerte")
}

boutonConvertir.addEventListener ("click", () => {
    let zoneAffichage = document.querySelector(".box2")
    let nombreSaisi = zoneSaisie.value
    let erreurMessage = "Veuillez entrer un nombre compris entre 0 et 4001 s'il vous plait"
    let nombreEnTableau = nombreSaisi.split('')
    nombreEnTableau.reverse()
    let nombreRomain = [" ", " ", " ", " "]

    if (nombreSaisi === undefined || nombreSaisi > 4000 || nombreSaisi < 1){
        afficherResultat()
        afficherErreur()
        zoneAffichage.textContent = erreurMessage
    } else {

        let u = nombreEnTableau[0] 
        nombreRomain[0] = uniteNombreRomain[u]

        let d = nombreEnTableau[1] 
        nombreRomain[1] = dizaineNombreRomain[d]

        let c = nombreEnTableau[2] 
        nombreRomain[2] = centaineNombreRomain[c]

        let m = nombreEnTableau[3] 
        nombreRomain[3] = milleNombreRomain[m]

        afficherResultat()
        nombreRomain.reverse()
        let resultat = nombreRomain.join('')
        zoneAffichage.textContent = resultat

    }
    
   
})

