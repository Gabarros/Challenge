const FileReader = require('./FileReader');
const ClientController = require('./controllers/ClientController');
const DateController = require('./controllers/DateController');


function openFile() {

    input = 'file.json';

    let fileReader = new FileReader();

    fileReader.readNewFile(input).then((fileContent) => {
        let clientFiles = JSON.parse(fileContent);

        console.log(clientFiles.length);
        console.log([...clientFiles]);
        // for(let files of clientFiles){

        //     verifyDates(files.dates);

        // }
    }).catch(err=>{
        console.error(err);
    });

}

function verifyDates(dates) {
    let dateController = new DateController();

    for(let date of dates){

        if(dateController.verifyDayOfTheWeek(date)){
            console.log('Final de semana')
        }else{
            console.log('dia da semana')
        }

  
    }
}
openFile();



