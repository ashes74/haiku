var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var syllableArr=[];

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){
    lineSplit = line.split("  ");
    // console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]);
    syllablePlace(lineSplit);
  //  console.log(lineSplit);
  });

}

function syllablePlace(phoneme){
  if(phoneme[1]){
  var count = phoneme[1].match(/(\d)/g);
  if(count){count=count.length
    if(!syllableArr[count]){syllableArr[count]=[];}
    syllableArr[count].push(phoneme[0]);
  }
  // console.log(phoneme, count);
}
}

formatData(cmudictFile);

function createHaiku(structure){
    console.log("this should log a haiku with the structure " + structure);
    var phrase;
    phrase = structure.map(function(lines){

      if(Array.isArray(lines)){
        //for each element get a word with that syllable count
        return lines.map(function(syls){
            return getLines(syls)
          }).join(' ');
        }
      else{
        return getLines(lines);
      }
    }).join('\n');
    // return phrase;
    return phrase;
}

function getLines(syls, arrOfWords){
  var arrOfWords = syllableArr[syls];
  return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
}


module.exports = {
  createHaiku: createHaiku,
};
