const FORM_DOM = document.querySelector("#userForm")
const SCORE_INPUT_DOM = document.querySelector("#score")
const ALERT_DOM = document.querySelector("#alert")
const AlertFunction = (message) => `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${message}</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
FORM_DOM.addEventListener("submit", FormSubmit)

// submit işlemi yapıldığında sayfa yenilenmesini engelleme
function FormSubmit(event){
    event.preventDefault()
    console.log("oldu")
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value){
         addItem(USER_NAME.value, SCORE.value)
         USER_NAME.value = ""
         SCORE.value = ""
    }else{
        ALERT_DOM.innerHTML = AlertFunction("Eksik bilgi girdiniz!")
    }
}

const USER_LIST = document.querySelector("#userList")

const LI = document.createElement("li")
const addItem = (userName, score) => {
    LI.innerHTML = `${userName}<span class="badge bg-primary rounded-pill">${score}</span>`
    LI.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    USER_LIST.appendChild(LI)
}