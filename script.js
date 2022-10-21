let nameCookie = document.querySelector('input[name="name"]')
let valueCookie = document.querySelector('input[name="value"]')


const form = document.querySelector("form")
const btnCreate = document.querySelector(".create")
const btnView = document.querySelector(".view")
const sectionCookies = document.querySelector("section")

// Gestion du comportement natif du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// Gestion de l'ajout de cookie en mémoire et reset des inputs
btnCreate.addEventListener("click", () => {
    document.cookie = `${nameCookie.value.trim()}=${valueCookie.value.trim()}`; //Crée ou met à jour un cookie 'user'
    nameCookie.value = ""
    valueCookie.value = ""
})

// Gestion du stockage des cookies et de l'affichage
btnView.addEventListener("click", () => {

    sectionCookies.innerHTML = ""
    let listCookies = document.cookie.split(';');
    let newList = []

    for (let cookie of listCookies) {
        newList.push(cookie.split("="))
    }

    console.log(newList);
    // Affichage
    for (let cookie of newList) {
        console.log(cookie);
        sectionCookies.innerHTML += `<article> <p>nom = ${cookie[0]}</p> <p>valeur = ${cookie[1]}</p> <button>X</button> </article> `
    }
    
})