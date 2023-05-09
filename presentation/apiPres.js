var express = require("express");
const business = require("../business/business");

var app = express();

// Importation de bodyParser pour gérer les requêtes POST
var bodyParser = require('body-parser')

const apiPres = {
    start:function(port){

        // Définition du middleware pour gérer le format JSON dans les requêtes
        app.use(express.json());

        // Définition du middleware pour parser les données POST
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json());

        // Définition des headers pour autoriser les requêtes provenant d'autres domaines
        app.use(function(req, res, next) {  
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });


           // Définition de la route GET pour récupérer une liste de clients avec pagination et un nombre par page
        app.get("/api/customers", function(req, res) {
            const number = req.query.number;
            const page = req.query.page;
            const customers = business.getCustomers(number, page);
            res.json(customers);
        });
        

        // Définition de la route DELETE pour supprimer un client en utilisant l'id envoyé dans le body
        app.delete("/api/customers", function(req, res) {
            console.log(req.body.id);
            business.supprimer(req.body.id);
            res.send("Suppression du client réussi");
        });

     

        // Définition de la route PUT pour mettre à jour un client avec les données envoyées dans le body
        app.put("/api/customers", function(req, res){
            business.modifier(req.body)
            res.send("Modification du client réussie");
        });

        // Définition de la route POST pour ajouter un nouveau client avec les données envoyées dans le body
        app.post("/api/customers", function(req, res) {
            const total = business.getCustomers();
            let id = total.total + 1;
            var d = new Date();
            var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var fullDate = date+' '+hours;
            const newCustomer ={
                id : id,
                email : req.body.email,
                first : req.body.first,
                last : req.body.last,
                company : req.body.company,
                created_at : fullDate,
                country : req.body.country
            }

            // Appel de la méthode ajouter pour ajouter le nouveau client à la base de données
            // et renvoi de la réponse à la requête HTTP
            res.json(business.ajouter(newCustomer));
        });

        // Démarrage du serveur sur le port spécifié en paramètre
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

// Exportation de l'objet apiPres pour l'utiliser dans d'autres fichiers
module.exports = apiPres;
