const fs = require('fs');

function readNewFile(input) {
    let fileContent;
    return new Promise(function (resolve, reject) {

        fileContent = fs.readFileSync(input, { encoding: 'utf8' });
        resolve(fileContent);
    });


}
let input = 'test.txt';

readNewFile('test.txt').then((fileContent)=>{
    console.log(fileContent);
});

