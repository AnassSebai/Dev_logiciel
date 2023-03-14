
const fs = require('fs');
let rawdata = fs.readFileSync('users.json');
//on a recupéré les données du fichier et on les stocke dans users
let users = JSON.parse(rawdata);
const chalk = require('chalk'); 


//Le Menu 
function showMenu(){
    console.log(chalk.red('---------------Menu---------------  \n'));
    console.log(chalk.yellow('-1- Afficher la liste des pays et le compteur '));
    console.log(chalk.yellow('-2- Afficher la liste des sociétés et le compteur'));
    console.log(chalk.yellow('-3- Ajouter un nouvel utilisateur'));}





//Cette fonction prend un tableau en entrée et affiche le nombre d'occurrences 
//pour chaque élément dans le tableau.

function Afficher(res) {
  res.forEach(item => {
    
    console.log(chalk.green(`${item.country || item.company}: ${item.count}`));
  });
}
// Importation du module readline-sync pour pouvoir lire les entrées utilisateur
function ajouterUtilisateur() {
    const readlineSync = require('readline-sync');

    // Création d'un nouvel utilisateur avec des champs vides, sauf pour l'ID et la date de création
    const newUser = {
      id: readlineSync.question('ID: '),
      email: '',
      first: readlineSync.question('Prénom: '),
      last: readlineSync.question('Nom: '),
      company: readlineSync.question('Société: '),
      created_at: new Date().toISOString(),
      country: readlineSync.question('Pays: ')
    };

    // Demande de l'adresse email à l'utilisateur, avec une boucle pour s'assurer qu'elle est valide
    let email;
    do {
      email = readlineSync.question('Email: ');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log(chalk.red('Adresse email invalide. Veuillez saisir une adresse email valide.'));
        email = undefined;
      }
    } while (!email);

    // Ajout de l'adresse email valide à l'utilisateur et sauvegarde dans le fichier users.json
    newUser.email = email;
    users.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users));
    console.log('Utilisateur ajouté avec succès !');
}



function main() {

    //afficher le menu
    showMenu();
    //saisie de l'utulisateur
    const readlineSync = require('readline-sync');
    const choix = readlineSync.question(chalk.gray('(entre 1 pour pays , 2 pour societés,3 pour ajouter utilisateur utilisateur)\n'));
  
    if (choix === '1') {
        //on met que les pays dans un tableau  country
        let country = new Array(users.length);
        for (let i = 0; i < users.length; i++) {
            country[i] = users[i].country;
        }
        // on compte le nombre d'occurence de chaque pays du tableau country  et on les met dans count
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
        //on met que les societés dans company
        let company = new Array(users.length);
        for (let i = 0; i < users.length; i++) {
            company[i] = users[i].company;
        }
        // on compte les  nobre d'occurence de chaque element de  company et on les met dans l'objet counts
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

    } else if (choix === '3') {
        ajouterUtilisateur();
    }else {
         
        console.log(chalk.red('--------------Choix invalide--------------'));
    }
}

main();