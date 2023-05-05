const file = "./data/customers.json";
const fs = require('fs');

function getNextId() {
    // lire les données clients existantes
    const data = fs.readFileSync(file);
    const customers = JSON.parse(data);
  
    // obtenir l'identifiant du dernier client
    const lastCustomer = customers[customers.length - 1];
    const lastId = lastCustomer ? parseInt(lastCustomer.id) : 0;
  
    // renvoie le prochain identifiant à utiliser
    return lastId + 1;
  }

let data = {
    //renvoie tous les clients du fichier customers.json
    getAllClients : function(){
        //get data from json file
        const rawdata = fs.readFileSync(file);
        //parse to object
        let clients = JSON.parse(rawdata);
        //return object
        return clients;
    },

    //renvoie que les number clients de la page page
    getClients : function(number, page){
        //get data from json file
        const rawdata = fs.readFileSync(file);
        //parse to object
        let clients = JSON.parse(rawdata);

        const total = clients.length;

        //si les param sont definis, on decoupe notre tab de clients a partir de facon a afficher
        //le number d'elts entre la page -1 et la page
        if(number && page){
            clients = clients.slice((page - 1)*number, page*number);
        }

        clients = {
            total : total,
            clients : clients
        };

        //return object
        return clients;
    },

         
    addCustomer: function (newCustomer) {
    // lire les données clients existantes
    const customersData = fs.readFileSync(file);
    const customers = JSON.parse(customersData);
  
    // creer le nouveau objet du nv client
    const customer = {
        id: getNextId(),//id suivant
        email: newCustomer.email,
        first: newCustomer.first,
        last: newCustomer.last,
        company: newCustomer.company,
        created_at: new Date().toISOString(),//date du moment d'ajout
        country: newCustomer.country, 
    };
  
    // ajouter le nouveau client dans le tableau des clients
    customers.push(customer);
  
    // sauvegarder les données clients mises à jour dans le fichier
    const customerContent = JSON.stringify(customers, null, 2).replace(/}\n\s*\{/g, "},\n  {");
    fs.writeFileSync(file, customerContent);
  
    return customer;
  },
  //retire l'user en fonction de son id
  removeUser : function(removeuser){
    //get data from json file
    const rawdata = fs.readFileSync(file);
    //parse to object
    let newclients = JSON.parse(rawdata);
    //findIndex permet de retrouver un user en fonction du param removeuser
    const id = newclients.findIndex(user => user.id === parseInt(removeuser));
    if (id != -1) {
        //puis de le retirer s'il existe 
        newclients.splice(id, 1);
        //et de reecrire le fichier
        fs.writeFileSync(file, JSON.stringify(newclients, null, 2));
        return 1;
    } else 
      return 0;        
  },
};  

module.exports = data;