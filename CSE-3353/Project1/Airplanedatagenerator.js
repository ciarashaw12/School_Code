
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

//Creating the object for array

for(i = 0; i < 100; i++)
{

    Airplane_data.push({FlightNumber:chance.string(), x:chance.floating(), y:chance.floating()});
}
