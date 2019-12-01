const FileReader = require('./FileReader');
const ClientController = require('./controllers/ClientController');
const DateController = require('./controllers/DateController');

input = 'file.json';

let fileReader = new FileReader();
fileReader.readNewFile(input).then((fileContent) =>{
    let file = JSON.parse(fileContent);
    console.log(file);

})
