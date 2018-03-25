//Data_Generation

createData = function()
{
    var Chance = require('chance');

var chance = new Chance();


var txt_file = "uncompressed.txt";
var fs = require('fs');

var word_list = [];
for(var i = 0; i < 1000; i++)
{
    var word = chance.word();
    word_list.push(word);
    word_list.push('\n');
}

fs.writeFile('uncompressed.txt',  word_list, 'utf8', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

createData();