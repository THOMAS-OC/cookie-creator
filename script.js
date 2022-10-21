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
    document.cookie = `${nameCookie.value.trim()}=${valueCookie.value.trim()}`; //Crée ou met à jour un cookie 'user'
    nameCookie.value = ""
    valueCookie.value = ""
})

btnView.addEventListener("click", () => {
    alert(document.cookie)
    let listCookies = document.cookie.split(';');
    console.log(listCookies);
    let newList = []
    for (let cookie of listCookies) {
        newList.push(cookie.split("="))
    }
    console.log(newList);
})