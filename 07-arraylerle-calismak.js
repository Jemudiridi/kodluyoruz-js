// array tanımlamak
let array_1 = [10, 20, 30, 40]
console.log(`items il hali : ${items}`)

// array sona eleman eklemek
array_1.push(50)
console.log(`sona 50 eklendi : ${array_1}`)

// array başa elleman eklemek
array_1.unshift(5)
console.log(`başa 5 eklendi: ${array_1}`)

// array sondaki öğeyi çıkartmak
let lastItem = array_1.pop()
console.log(`son obje çıkartıldı : ${lastItem}`)

// array baştaki öğeyi çıkarmak
let firstItem = array_1.shift()
console.log(`ilk obje çıkartıldı : ${firstItem}`)

// array içindeki ögenin bilgisinin değiştirilmesi
array_1[0] = -5 // ilk öge değişimi
array_1[array_1.length - 1] = 1000

console.log(`ilk ve son öge değişti : ${array_1}`)


let femaleUsersArray = ["ayşe", "fatma", "hayriye"]

let maleUSersArray = ["ali", "veli", "mehmet", "hüseyin"]

let allUsersArray = [...femaleUsersArray, ...maleUSersArray] // koplama kullanımı 1

let copyAllUsersArray = allUsersArray.slice() // kopyalama kullanımı 2

console.log(`allUsersArray:  ${allUsersArray}`)
console.log(`copyAllUSers: ${copyAllUsersArray}`)