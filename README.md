# Dev_logiciel
## Back-end
# td1.js

Bienvenue dans le fichier ReadMe de votre application !

le td1.js contient le code est d'une application de ligne de commande en JavaScript qui permet de gérer des utilisateurs enregistrés dans un fichier JSON. Elle permet d'afficher la liste des pays ou des sociétés avec le nombre d'utilisateurs associés, ajouter, modifier et supprimer des utilisateurs.
Le fichier customers.json contient les données des utilisateurs enregistrés, qui sont chargées dans une variable users au début du script.


# Description :
Cette application est conçue pour gérer les données  des clients.
Le back-end de l'application se compose de trois fichiers principaux :

    datalayer.js : ce fichier est responsable de la gestion de la couche de données de l'application. Il contient les fonctions qui effectuent les opérations CRUD sur la base de données.
    business.js : ce fichier contient la logique métier de l'application. Il utilise les fonctions de datalayer.js pour effectuer des opérations plus complexes sur les données.
    apiPres.js : ce fichier est responsable de la gestion de l'API de l'application. Il contient les endpoints qui permettent aux clients de communiquer avec le serveur.

# Installation 
Pour installer les dépendances, exécutez la commande suivante :
npm install "..."
!!!!!!!!!!!!!!!!!!!
n'oubliez pas d'installer underscore avant de lancer 
npm install underscore

# Utilisation 
Pour lancer l'application, exécutez la commande suivante :
node index.js 
 Cela va lancer le serveur Node.js qui va écouter les requêtes sur le port 3001.

# Endpoints
Voici la liste des endpoints disponibles dans cette application :

GET /api/customers
Cette route permet de récupérer une liste de clients avec pagination et un nombre par page. Elle accepte deux paramètres query :

    number : le nombre de clients par page (par défaut 10)
    page : le numéro de la page à afficher (par défaut 1)

La réponse renvoyée est un objet JSON avec les informations de chaque client.

POST /api/customers
Cette route permet d'ajouter un nouveau client à la base de données. Elle attend un objet JSON dans le corps de la requête avec les informations suivantes :

    email : l'adresse email du client (obligatoire)
    first : le prénom du client (obligatoire)
    last : le nom de famille du client (obligatoire)
    company : le nom de l'entreprise du client
    country : le pays du client

La réporoute permet d'ajouter un nouveau client à la base de données. Elle attend un objet JSON dans le corps de la requête avec les informations suivantes :

    email : l'adresse email du client (obligatoire)
    first : le prénom du client (obligatoire)
    last : le nom de famille du client (obligatoire)
    company : le nom de l'entreprise du client
    country : le pays du client

La réporoute permet d'ajouter un nouveau client à la base de données. Elle attend un objet JSON dans le corps de la requête avec les informations suivantes :

    email : l'adresse email du client (obligatoire)
    first : le prénom du client (obligatoire)
    last : le nom de famille du client (obligatoire)
    company : le nom de l'entreprise du client
    country : le pays du client

La réponse renvoyée est un objet JSON avec les informations du nouveau client.

PUT /api/customers
Cette route permet de mettre à jour les informations d'un client existant. Elle attend un objet JSON dans le corps de la requête avec les informations suivantes :

    id : l'identifiant du client à mettre à jour (obligatoire)
    email : l'adresse email du client (obligatoire)
    first : le prénom du client (obligatoire)
    last : le nom de famille du client (obligatoire)
    company : le nom de l'entreprise du client
    country : le pays du client

La réponse renvoyée est une chaîne de caractères confirmant la mise à jour réussie.

DELETE /api/customers
Cette route permet de supprimer un client existant. Elle attend un objet JSON dans le corps de la requête avec l'identifiant du client à supprimer :

    id : l'identifiant du client à supprimer (obligatoire)

La réponse renvoyée est une chaîne de caractères confirmant la suppression réussie.
