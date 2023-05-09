const fs = require("fs");
const filename ="./data/customers.json";

let dataLayer = {

    // Récupère tous les clients du fichier JSON
    getAllCustomers: function() {
        const data = fs.readFileSync(filename);
        const customers = JSON.parse(data);
        return customers;
    },

    // Récupère les clients en fonction du nombre et de la page spécifiée
    getCustomers: function(number, page) {
        // Lire le fichier JSON
        let rawdata = fs.readFileSync(filename);
        // Le transformer en objet
        let customers = JSON.parse(rawdata);

        const total = customers.length;
        // Filtrer en fonction du nombre et de la page
        if (number && page) {
            customers = customers.slice((page - 1) * number, page * number);
        }

        // Créer un objet contenant le nombre total et les clients filtrés
        const result = {
            total: total,
            result: customers
        };

        return result;
    },

    // Ajoute un nouveau client au fichier JSON
    ajouter: function(newCustomer) {
        let data = fs.readFileSync(filename, "utf-8");
        let added = JSON.parse(data);
        added.push(newCustomer);

        fs.writeFileSync(filename, JSON.stringify(added), (error) => {
            if(error) throw error;
        });

        return added;
    },

    // Modifie les informations d'un client existant dans le fichier JSON
    modifier: function(newCustomer) {
        let file = JSON.parse(fs.readFileSync(filename, "utf-8"));
        // Trouver l'index du client à modifier
        const index = file.findIndex(c => c.id == newCustomer.id);
        // Effectuer les modifications nécessaires
        file[index].last = newCustomer.last;
        file[index].first = newCustomer.first;
        file[index].email = newCustomer.email;
        file[index].country = newCustomer.country;
        file[index].company = newCustomer.company;
        // Enregistrer les modifications dans le fichier JSON
        fs.writeFileSync(filename, JSON.stringify(file), (error) => {
            if(error) throw error;
        });
        return file;
    },

    // Supprime un client existant dans le fichier JSON
    supprimer: function(id) {
        let file = JSON.parse(fs.readFileSync(filename, "utf-8"));
        const index = file.findIndex(c => c.id == id);
        if (index !== -1) {
            file.splice(index, 1); // Supprimer une entrée à l'index spécifié
            const length = file.length;
            for (let i = index; i < length; i++) {
                file[i].id = i + 1; // Réordonner les IDs des clients restants
            }
            fs.writeFileSync(filename, JSON.stringify(file)); // Écrire les données mises à jour dans le fichier
        }
        return file;
    }
}

module.exports = dataLayer;
