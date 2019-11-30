const Client = require('../models/Client');

const clientsList = [];

class ClientController {

    static getClientsList() {

        return this.clientsList;

    }

    static createClient(clientType, workdays, weekendDays) {
        let client = new Client(
            clientType,
            workdays,
            weekendDays
        );

        clientsList.push(client);
    };


}

module.exports = ClientController;