const fs = require('fs');

function readTextFileToString(filepath) {
    return String(fs.readFileSync(filepath));
}

module.exports = {
    readTextFileToString,
};
