const Client = require('../models/Client');


class ClientController {
    clientsList = new Array();

    constructor(){

        let testClient = {
            clientType: 'regular',
            workDays: 0,
            weekendDays: 2
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