// look from eventlists

/*
let greeting = document.querySelector("#greetings")
greeting.addEventListener("click", function() {
console.log("tiklandi")
})
*/

let greeting = document.querySelector("#greetings");
greeting.addEventListener("click", clickfunc);

let clickCounter= 0;
function clickfunc(){
   console.log()
   clickCounter++
   greeting.innerHTML = clickCounter + " kez tıklandı"
   this.innerHTML
}

