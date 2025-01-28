
// arraylerde foreach kullanımı
const PRODUCTS = ["Laptop", "phone", "speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCTS.forEach((prodct, index, array) => console.log(prodct, index, array))

const userListDOM = document.querySelector("#userList")

PRODUCTS.forEach((prodct) => { 
    const liDOM = document.createElement("li")
    liDOM.innerHTML = prodct
    userListDOM.append(liDOM)
})

// arraylerde filter kullanımı
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

const USERS = [
    {fullName: "Ayşe Sümer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
console.log(ACTIVE_USERS)

const STUDENTS = ["AYSE", "MehMet", "tuĞçe", "AkSEL"]

const NEW_STUDENTS = STUDENTS.map( student => user.toLowerCase())
console.log(NEW_STUDENTS)

/*
const STUDENTS_OBJ = STUDENTS.map( item => 
{
    return {
        userName: item, shortName: `${item[0].toUpperCase()}`, newName: `${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`
    }
}
)

////////alttaki gibi de olabilir
*/

const STUDENTS_OBJ = STUDENTS.map( item => 
    (
    
        {
            userName: item, shortName: `${item[0].toUpperCase()}`, newName: `${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`
        }
    )
)

console.log(STUDENTS_OBJ)