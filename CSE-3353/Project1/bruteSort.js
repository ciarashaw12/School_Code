var data = require('./airplane_map.json');

arr = [45,3,9,8,0,756,85,2,3,74,9,25,0,1,7,56,3] 
splitArray = function(d)
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


    return mergeSort(splitArray(left),splitArray(right));

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
       if(l[l_idx] < r[r_idx])
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

console.log(splitArray(arr));