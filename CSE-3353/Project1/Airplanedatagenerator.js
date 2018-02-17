
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

createGraph = function(x,y)
{

    y.mode = null;
    y.type =null;

    let intg = 0

    for(i = 0;i < 100; i++)
    {
        x[i].mode = "markers";
        x[i].type = "scatter";
    } 

     var plotly = require('plotly')("CiaraShaw","zukAhlJsEm9A99MH4c4W");

    



    fs.writeFile("./test_map.json", JSON.stringify(x, null, '\t'), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("test File has been created");
    });

    var graphOptions = {filename: "line-scatter", fileopt: "overwrite"};

    plotly.plot(x, graphOptions, function (err, msg) {
    console.log(msg)});
}

createGraph(Airplane_data,Airplane);



