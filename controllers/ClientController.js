const Client = require('../models/Client');


class ClientController {
    clientsList = new Array();

    constructor(){

        let testClient = {
            clientType: 'regular',
            workdays: 0,
            weekendDays: 2
        }

        this.createClient(testClient);

    }

    getClientsList() {

        return this.clientsList;

    }

    createClient({clientType, workdays, weekendDays}) {

        let client = new Client(
            clientType,
            workdays,
            weekendDays
        );

        this.clientsList.push(client);
    };


}

module.exports = ClientController;