const PRODUCTS = ["Laptop", "phone", "speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCTS.forEach((prodct, index, array) => console.log(prodct, index, array))

const userListDOM = document.querySelector("#userList")

PRODUCTS.forEach((prodct) => { 
    const liDOM = document.createElement("li")
    liDOM.innerHTML = prodct
    userListDOM.append(liDOM)
})