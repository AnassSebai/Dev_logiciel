const fs = require('fs');
const process = require('process');
let rawdata = fs.readFileSync('users.json');
//on a recupéré les données du fichier et on les stocke dans users
let users = JSON.parse(rawdata);
let country = new Array(users.length);
let company = new Array(users.length);

console.log("       Menu : \n");
console.log(" -- Afficher la liste des pays et le compteur");
console.log(" -- Afficher la liste des sociétés et le compteur");
const input = process.argv[2];

if (input === 'country') {
    //on met que les country dans country
    for (let i = 0; i < users.length; i++) {
        country[i] = users[i].country;
    }
    // on compte les country et on les met dans l'objet counts
    const counts = {};
    for (const num of country) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let res = [];
    // on transforme l'objet counts en tableau
    for (let i in counts) {
        res.push({ "country": i, "count": counts[i] });
    }

    //on sort le tableau
    res.sort((a, b) => b.count - a.count);
    console.log(res);

}else if(input === 'company'){
    //on met que les company dans company
    for (let i = 0; i < users.length; i++) {
        company[i] = users[i].company;
    }
    // on compte les company et on les met dans l'objet counts
    const counts = {};
    for (const num of company) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let res = [];
    // on transforme l'objet counts en tableau
    for (let i in counts) {
        res.push({ "company": i, "count": counts[i] });
    }

    //on sort le tableau
    res.sort((a, b) => b.count - a.count);
    console.log(res);
}
