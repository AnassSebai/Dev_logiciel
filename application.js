const fs = require('fs');
let rawdata = fs.readFileSync('users.json');
let users = JSON.parse(rawdata);
console.log(users);

//afficher les pays sans repetition 
const pays = Array.from(new Set(users.map(user => user.country)));
console.log(pays);
//afficher les societe sans repetition
const societe = Array.from(new Set(users.map(user => user.company)));
console.log(societe);

