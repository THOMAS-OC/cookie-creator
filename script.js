let nameCookie = document.querySelector('input[name="name"]')
let valueCookie = document.querySelector('input[name="value"]')
const form = document.querySelector("form")

const btnCreate = document.querySelector(".create")
const btnView = document.querySelector(".view")

console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

btnCreate.addEventListener("click", () => {
    document.cookie = `${nameCookie.value}=${valueCookie.value}`; //Crée ou met à jour un cookie 'user'
    nameCookie.value = ""
    valueCookie.value = ""
})

btnView.addEventListener("click", () => {
    alert(document.cookie)
})