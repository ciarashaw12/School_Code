
//Reading in data from file
var data = require('./airplane_map.json');

//Brute Force Implentation


getDistance = function(p1,q1)
{
    return dist = Math.sqrt(Math.pow(p1.x - q1.x, 2) + Math.pow(p1.y - q1.y, 2)); 
}

let Airplane1;
let Airplane2;
let distance;

BruteForce = function(data)
{
    let Airplane1;
    let Airplane2;
    let distance;
    let min = 0;
    for(i = 0; i < data.length; ++i)
    {
        for(j = i + 1; j < data.length; ++j)
        {
            let dist = getDistance(data[i],data[j])
            //Setting the intial first distance calcuated between two points
            if(i === 0 && j === 1)
            {
                min = dist;
            }
            else if(dist < min)
            {
                let Airplane1 = data[i].FlightNumber;
                let Airplane2 = data[j].FlightNumber;
                min = dist;

            }
           
        }

        
    }

    
    console.log(Airplane1, " ", Airplane2, " ", min);
}

BruteForce(data);