let nameCookie = document.querySelector('input[name="name"]')
let valueCookie = document.querySelector('input[name="value"]')

const form = document.querySelector("form")
const btnCreate = document.querySelector(".create")
const btnView = document.querySelector(".view")
const sectionCookies = document.querySelector("section")

let btnDeleteCookies = document.querySelectorAll("section button")

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

    // Liste optimisé pour l'affichage
    let newList = []
    
    // Suppression des espaces indésirables et ajout dans la liste pour affichage
    for (let cookie of listCookies) {
        if (cookie[0] == " ") {
            cookie = cookie.slice(1,)
            newList.push(cookie.split("="))
        }
        else {
            newList.push(cookie.split("="))
        }
    }

    // Affichage
    for (let cookie of newList) {
        sectionCookies.innerHTML += `<article class=${cookie[0]}> <p>nom = ${cookie[0]}</p> <p>valeur = ${cookie[1]}</p> <button class=${cookie[0]}>X</button> </article> `
    }

    if (document.querySelector("section button")) {
        btnDeleteCookies = document.querySelectorAll("section button")
        console.log(btnDeleteCookies);
    }

    // Gestion de la suppression de cookies

    btnDeleteCookies.forEach(element => {
        element.addEventListener("click", () => {
            nameClass = element.className
            console.log(nameClass)
            document.querySelector(`article.${nameClass}`).remove()
            
        })
    });
    
})



