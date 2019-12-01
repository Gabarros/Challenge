const Client = require('../models/Client');

const ClientController = require('../controllers/ClientController');

test('pass a client proprerties and get a new client', () => {
    let client = new Client('Regular', 5, 2);

    expect(client.clientType).toBe('Regular');
    expect(client.workDays).toBe(5);
    expect(client.weekendDays).toBe(2)
    
});