const fs = require('fs');

class FileReader {

    readNewFile(path) {
        let fileContent;
        return new Promise(function (resolve, reject) {

            fileContent = fs.readFileSync(path, { encoding: 'utf8' });
            resolve(fileContent);
        });
    }
}
module.exports = FileReader;