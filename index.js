const FileReader = require('./FileReader');
const ClientController = require('./controllers/ClientController');
const DateController = require('./controllers/DateController');
const ValueController = require('./controllers/ValueController');

const clientController = new ClientController();
let fileReader = new FileReader();

function importClients() {

    path = 'file.json';

    fileReader.readNewFile(path).then((fileContent) => {
        let clientFiles = JSON.parse(fileContent);
        let clientsNumber = Object.keys(clientFiles).length;
       

        for(let i = 0; i < clientsNumber; i++){

            let client = {
                clientType:  clientFiles[i].clientType,
                workDays: verifyDates(clientFiles[i].dates).workDays,
                weekendDays: verifyDates(clientFiles[i].dates).weekendDays

            } 
           clientController.receiveNewClients(client);
           
        }
        ValueController.processClientList(clientController.getClientsList());
        
    }).catch(err=>{
        console.error(err);
    });
}

function verifyDates(dates) {
    let dateController = new DateController();
    let workDaysCounter = 0;
    let weekendDaysCounter = 0;

    for(let date of dates){
        if(dateController.verifyDayOfTheWeek(date) == 'workday'){
            workDaysCounter++;
            
        }else{
           weekendDaysCounter++;
        }    
    } 
    return({
        workDays: workDaysCounter, 
        weekendDays: weekendDaysCounter
    });
}


importClients();