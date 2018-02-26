
//Reading in data from file
var data = require('./airplane_map.json');

//Brute Force Implentation

// This function gives gives you the distance between two points on a graph and it returns the distance
getDistance = function(p1,q1)
{
    return dist = Math.sqrt(Math.pow(p1.x - q1.x, 2) + Math.pow(p1.y - q1.y, 2)); 
}

BruteForce = function(data)
{
    
    for(i = 0; i < data.length; ++i)
    {
        for(j = i + 1; j < data.length; ++j)
        {
            //assign distance based of the x and y coordinates of the array
            let dist = getDistance(data[i],data[j])
            //Setting the intial first distance calcuated between two points
            if(i === 0 && j === 1)
            {
                min = dist;
            }
            else if(dist < min) //If the dist is smaller than the prev assigned dist.Then the min and the two airplanes will be updated.
            {
                var Airplane1_name = data[i].FlightNumber;
                var Airplane1_x = data[i].x;
                var Airplane1_y = data[i].y;
                var Airplane2_name = data[j].FlightNumber;
                var Airplane2_x = data[j].x;
                var Airpane2_y = data[j].y;
                min = dist;

            }
           
        } 
    }
    //Returns a object of the results from the algorithm
    console.log("Brute Force Results");
    return{
        "This is Airpane1":Airplane1_name,
        "X coordinate":Airplane1_x,
        "Y coordinate": Airplane1_y,
        "This is Airplane 2":Airplane2_name,
        "X2 coordinate": Airplane2_x,
        "Y2 coordinate": Airpane2_y,
        "Distance":min
    };
}


console.log(BruteForce(data));