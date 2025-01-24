let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0 ;
const COUNTER_DOM = document.querySelector("#counter");
const INCREASE_DOM = document.querySelector("#increase");
const DECREASE_DOM = document.querySelector("#decrease");

COUNTER_DOM.innerHTML = counter;

INCREASE_DOM.addEventListener("click", counterFunction);
DECREASE_DOM.addEventListener("click", counterFunction);

function counterFunction(){
    console.log(this.id);



    if(this.id== "increase"){
        counter += 1
    }

    if ( this.id == "decrease"){
        counter -= 1
    }
    
localStorage.setItem( "counter", counter);

COUNTER_DOM.innerHTML = counter;

}