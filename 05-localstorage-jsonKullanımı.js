let user = "Jemusama"
let items = [1, 2, 3, 4, user];
localStorage.setItem(items, JSON.stringify(items));

console.log(JSON.parse( localStorage.getItem(items) ));
