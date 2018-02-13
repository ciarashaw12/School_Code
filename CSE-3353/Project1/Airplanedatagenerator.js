import { ENOTEMPTY } from 'constants';

/*Project 1
Author: Ciara Shaw
*/
/*Starting Chance*/

//Loading Chance
var Chance = require('chance');

//Instantiate Chance so it can be used
var chance = new Chance();

var jsexport = require('jsonfile');
var fs = requie('fs');

//Starting to create an Array Of Objects
 var  Airplane_data = [];

//Creating the intial obejct
var Airplane = new Object();
Airplane.Flightnumber;
//x-coordinate
Airplane.x;
//y-coordinate
Airplane.y; 

//Input data into Array
for(i = 0; i < 100; i++)
{
    Airplane_data.push(
        Airplane.Flightnumber = chance.string({length:8}),
        Airplane.x = chance.floating({fixed: 1}),
        Airplane.y = chance.floating({fixed: 1})
    );
    
}

//Export data into jsonfile


