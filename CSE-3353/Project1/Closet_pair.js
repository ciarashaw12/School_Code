
//Reading in data from file
var data = require('./airplane_map.json');

//Brute Force Implentation

getDistance = function(x1,x2,y1,y2)
{

    return dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 
}

BruteForce = function(data)
{
    for(i = 0; i < data.length; i++)
    {
        for(j = i+ 1; j < data.length; j++)
        {
            
        }
    }
}


console.log(getDistance(2,5,8,9));
