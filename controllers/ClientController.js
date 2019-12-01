const Client = require('../models/Client');

class ClientController {
    clientsList = new Array();

    getClientsList() { return this.clientsList; }

    createClient({clientType, workDays, weekendDays}) {

        let client = new Client(
            clientType,
            workDays,
            weekendDays
        );

        this.clientsList.push(client);  
    };

    receiveNewClients({clientType, workDays, weekendDays}){
       
        this.createClient({clientType, workDays, weekendDays});
        
    }
}

module.exports = ClientController;