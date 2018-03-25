//Genrating an array of objects that tells you the charcter and frquency from an array

//reading the frquency of letters in a string
var str = "ahnbfkdfjgitmnjgfusldfjflfkifhfjaaaaai";

class Obj_hold{

    constructor(
        charcter,
        frequency   ){
            this.charcter = charcter;
            this.frequency = frequency;
        }


};

 var data_arr = [];
 var chars = [];

 var fs = require('fs');

frequency_array = function(arr)
{
    var data_arr = [];
        for (var i=0; i<arr.length;i++) {
            var char = arr.charAt(i);
            var n_obj;
            if(data_arr.length === 0)
            {
                n_obj = new Obj_hold(char,1);
                data_arr.push(n_obj);
                chars.push(char);
            }
            else
            {
                    if(chars.includes(char) === true)
                    {
                        data_arr[chars.indexOf(char)].frequency++;
                    }
                    else
                    {
                        n_obj = new Obj_hold(char,1);
                        data_arr.push(n_obj);
                        chars.push(char);
                    }
                }
            }
            
            return data_arr;
   
        }

        
var data = frequency_array(str);

fs.writeFile('text.txt',  JSON.stringify(data,null,'\t'), 'utf8', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });