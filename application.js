const fs = require('fs');
let rawdata = fs.readFileSync('users.json');
//on a recupéré les données du fichier et on les stocke dans users
let users = JSON.parse(rawdata);


//Le Menu 
console.log("---------------Menu---------------  \n");
console.log(" -1- Afficher la liste des pays et le compteur ");
console.log(" -2- Afficher la liste des sociétés et le compteur ");



//Cette fonction prend un tableau en entrée et affiche le nombre d'occurrences 
//pour chaque élément dans le tableau.

function Afficher(res) {
  res.forEach(item => {
    console.log(`${item.country || item.company}: ${item.count}`);
  });
}

function main() {
    const readlineSync = require('readline-sync');
    const choix = readlineSync.question('(entre 1 pour pays et 2 pour societés)\n');
  
    if (choix === '1') {
        //on met que les pays dans un tableau  country
        let country = new Array(users.length);
        for (let i = 0; i < users.length; i++) {
            country[i] = users[i].country;
        }
        // on compte le nombre du tableau country  et on les met dans l'objet counts
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
        Afficher(res);

    } else if (choix === '2') {
        //on met que les company dans company
        let company = new Array(users.length);
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
        Afficher(res);

    } else {
      console.log('--------------Choix invalide--------------');
    }
}

main();
