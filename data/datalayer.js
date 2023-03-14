const fs = require("fs");
// const proc = require("process");

// require("dotenv").config();
const filename = "./data/customers.json";

let datalayer = {
    getAllCustomers: function () {
        //read json file
        const data = fs.readFileSync(filename);

        //parse to object
        const customers = JSON.parse(data);

        //return customers
        return customers;
    },

    getCustomers: function (number, page) {
        {


            //read json file
            let rawdata = fs.readFileSync(filename);

            //parse to object
            let customers = JSON.parse(rawdata);

            const total = customers.length;

            //filter by number and page
            if (number && page) {
                customers = customers.slice((page - 1) * number, page)
            }

            const result = {
                total: total,
                result: customers
            };

            return result;

        }
    }
};

module.exports = datalayer;