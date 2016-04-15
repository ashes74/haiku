// var fs = require('fs');
// console.log(fs);
// console.log( fs.readFileSync('./cmudict.txt') );

var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){
    lineSplit = line.split("  ");
    console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]);

  });
}

formatData(cmudictFile);

function createHaiku(structure){
    console.log("this should log a haiku with the structure " + structure);
}



module.exports = {
  createHaiku: createHaiku,
};
