
/*Project 1
Author: Ciara Shaw
*/
/*Starting Chance*/

//Loading Chance
var Chance = require('chance');

//Instantiate Chance so it can be used
var chance = new Chance();

//Starting to create an Array Of Objects
 var  Airplane_data = [];

//Adding the info into the array.

for(i = 0; i < 100; i++)
{
    let char = chance.string({pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length:2});
    let num  = chance.string({length:4, pool:'1234567890'});
    let name = char + num;
    Airplane_data.push({FlightNumber:name, 
    x:chance.floating({min:-10, max: 10, fixed:1}), 
    y:chance.floating({min:-10, max:10, fixed:1})});
}

for(j = 0; j < 100; j++)
{
    console.log(Airplane_data[j]);
}



//Writing out to a json file.