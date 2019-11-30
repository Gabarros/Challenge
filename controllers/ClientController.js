const Client = require('../models/Client');


class ClientController {
    clientsList = new Array();

    constructor(){

        let testClient = {
            clientType: 'rewards',
            workDays: 8,
            weekendDays: 4
        }

        this.createClient(testClient);

    }

    getClientsList() {

        return this.clientsList;

    }

    createClient({clientType, workDays, weekendDays}) {

        let client = new Client(
            clientType,
            workDays,
            weekendDays
        );

        this.clientsList.push(client);
    };
}

module.exports = ClientController;