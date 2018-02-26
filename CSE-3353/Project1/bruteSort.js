var data = require('./airplane_map.json');

sortArray = function(d)
{   
    //Checking to see if the length of the array is either zero or one
    if(d.length === 1)
    {
        return d;
    }
    //Spliting up the array, using the built in slice function to serperate
    //the array.

    //Choose the mid point
    const mid = Math.floor(d.length/2);
    
    //Split up the array
    const left = d.slice(0,mid);

    const right = d.slice(mid);


    return mergeSort(sortArray(left),sortArray(right));

}

//Comparsion function for merge sort
mergeSort = function(l,r)
{
    //Array to hold the finished array
    let sortArr = []
    //Making comparsion based off of the y-coordinate for each plane

    let l_idx = 0;
    let r_idx = 0;
    
    while(r_idx < r.length &&  l_idx < l.length)
    {
       if(l[l_idx].y < r[r_idx].y)
       {
           sortArr.push(l[l_idx]);
           l_idx++;
       }
       else{
           sortArr.push(r[r_idx]);
           r_idx++;
       }
    }
    return sortArr.concat(l.slice(l_idx),r.slice(r_idx));
}

getDistance = function(p1,q1)
{
    return dist = Math.sqrt(Math.pow(p1.x - q1.x, 2) + Math.pow(p1.y - q1.y, 2)); 
}

AlternateBruteForce = function(data)
{
   
    for(i = 0; i < data.length - 1; ++i)
    {
        j = i + 1
        let dist = getDistance(data[i], data[j])
        if(i == 0)
        {
            min = dist
        }
        else if(dist < min)
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


console.log(AlternateBruteForce(sortArray(data)));