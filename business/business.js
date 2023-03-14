const dal = require("../data/datalayer");
// const _ = require("underscore"); //voir a quoi ca sert
 
const defaultNumber = 10;
const defaultPage = 1;
const maxNumber = 100;

const business = {
    getAllCustomers : function() {
        return dal.getAllCustomers();
    },

    getCustomers : function(number, page) {
        //checks param
        if(number === undefined || page === undefined){
            number = defaultNumber;
            page = defaultPage;
        }
        if(number > maxNumber){
            number = maxNumber;
        }

        //recupérer données de la DAL
        const resCustomers = dal.getCustomers(number, page);

        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.ceil(resCustomers.total / number);

        //return customers
        return resCustomers;
    }

    

};

module.exports = business;