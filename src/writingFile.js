const fs = require('fs');

var data = "";
function getData(val) {
    data = val;
}

fs.writeFile('sample.js', data, (err) => {
    if (err) console.log("Error in writing file: ", err);
});

module.exports = { getData }; 