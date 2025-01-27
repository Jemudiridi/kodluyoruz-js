// Pathname bulma
console.log(document.location.pathname)

console.log(document.head)
console.log(document.body.ATTRIBUTE_NODE)



bgColorChange()


function  bgColorChange (){

    let R = getRandomInt(255);
   let G = getRandomInt(255);
   let B = getRandomInt(255); 


   document.body.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
   /*
    if ( document.body.style.backgroundColor == "red") {
  document.body.style.backgroundColor = "aqua"
    } else {
        document.body.style.backgroundColor = "red"
    }
*/
   


}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function colorChangeButton(parameter) {
    bgColorChange()
} 


