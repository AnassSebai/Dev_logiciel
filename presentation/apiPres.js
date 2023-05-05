const express = require('express');
const business = require('../business/business');
const app = express();
var cors = require('cors')

const apiServ = {
    
    //fct qui recupere les données et les renvoie au path indiqué
    start : function(port) {

        app.use(express.json()); 
        
        app.use(cors()); 
        
        app.get('/api/clients/all', (req,res) => {   
            
            const clients = business.getAllClients();

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })

        //req reprend les donnees fournies par la requete
        app.get('/api/clients', (req,res) => {   
            
            const number = req.query.number;
            const page = req.query.page;
            
            const clients = business.getClients(number, page);

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })
        //req reprend les donnees fournies par la requete
        app.get('/api/clients', (req,res) => {   
            
            const number = req.query.number;
            const page = req.query.page;
            
            const clients = business.getClients(number, page);

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })
        
        console.log("test arg 5");
        //ajouter client 
        app.post("/api/clients", function(req, res){
            const reqAddCustomer = {
                email: req.body.email,
                first: req.body.first,
                last: req.body.last,
                company: req.body.company,
                country: req.body.country,
            };
            const customer = business.addCustomer(reqAddCustomer);
            res.json(customer);
        });

        //supprimer client
        app.delete('/api/clients', (req, res) => {
            const clientid = req.query.id;
            let message = business.removeUser(clientid);
            res.status(200).send(message);
        })
        //lance l'ecoute
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        }) 
    }
    

};

module.exports = apiServ;