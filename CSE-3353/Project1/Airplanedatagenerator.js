
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

 //Array for plotting graph
 var Airplane_gdata = [];


 
//creating new airplane object;

//Adding the info into the array.

for(i = 0; i < 100; i++)
{
   
    //Giving the first two letters
    let char = chance.string({pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length:2});
    //the last four digits for flightnumber 
    let num  = chance.string({length:4, pool:'1234567890'});
    let name = char + num;
    
    var Airplane = {
        FlightNumber: name,
        x: chance.floating({min:-10,max:10, fixed:4}),
        y: chance.floating({min:-10,max:10, fixed:4}),
    }
    Airplane_data.push(Airplane);

    //Airplane_data.push({Airplane.AirplaFlightNumber:name, 
    //x:chance.floating({min:-10, max: 10, fixed:4}), 
    //y:chance.floating({min:-10, max:10, fixed:4})} );
}

//Writing out to a json file.
 const fs = require('fs'); 

 fs.writeFile("./airplane_map.json", JSON.stringify(Airplane_data, null, '\t'), 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

//Creating the option to plot the data of a scatterplot
//It will export a url in the console when fucntion is called
//In order to start testing my brute force algorithm

createGraph = function()
{
    var plotly = require('plotly')("CiaraShaw","zukAhlJsEm9A99MH4c4W");
    for(i = 0; i < 100; i++)
    {
        //Giving the first two letters
        let char = chance.string({pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length:2});
        //the last four digits for flightnumber 
        let num  = chance.string({length:4, pool:'1234567890'});
        let name = char + num;
        Airplane_gdata.push({FlightNumber:name, 
        x:chance.floating({min:-10, max: 10, fixed:4}), 
        y:chance.floating({min:-10, max:10, fixed:4}),
        mode: "markers",
        type: "scatter"});
    }

    var graphOptions = {filename: "line-scatter", fileopt: "overwrite"};
    plotly.plot(Airplane_gdata, graphOptions, function (err, msg) {
    console.log(msg);
});


}

createGraph();



