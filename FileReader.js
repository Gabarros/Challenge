const fs = require('fs');

class FileReader {

    readNewFile(input) {
        let fileContent;
        return new Promise(function (resolve, reject) {

            fileContent = fs.readFileSync(input, { encoding: 'utf8' });
            resolve(fileContent);
        });

    }

}

module.exports = FileReader;

