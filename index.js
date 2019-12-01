const FileReader = require('./FileReader');
const ClientController = require('./controllers/ClientController');
const DateController = require('./controllers/DateController');

function openFile() {

    input = 'file.json';

    let fileReader = new FileReader();

    fileReader.readNewFile(input).then((fileContent) => {
        let clientFiles = JSON.parse(fileContent);
        let clientsNumber = Object.keys(clientFiles).length;

        for(let i = 0; i < clientsNumber; i++){
    
            let x = verifyDates(clientFiles[i].dates);
            console.log(x);

        }
    }).catch(err=>{
        console.error(err);
    });

}

function addNewClient(client){
    let clientController = new ClientController();

    clientController.createClient(client);

}

function verifyDates(dates) {
    let dateController = new DateController();
    let workDaysCounter = 0;
    let weekendDaysCounter = 0;
    let daysCounter = new Array();

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
openFile();



