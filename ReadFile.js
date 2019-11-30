const ClientController = require('./controllers/ClientController');


const fs = require('fs');

function readNewFile(input) {
    let fileContent;
    return new Promise(function (resolve, reject) {

        fileContent = fs.readFileSync(input, { encoding: 'utf8' });
        resolve(fileContent);
    });


}
let input = 'file.json';

readNewFile(input).then((fileContent)=>{

    let file = JSON.parse(fileContent);
    console.log(file[0].clientType);
});

// https://dev.to/maheshkay/read-csv-file-using-node-js-29oc

