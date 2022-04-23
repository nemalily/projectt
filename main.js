var Name_Of_The_Guest_Array  = [];
    
function submit()
{
    var Guest_name = document.getElementById("Enter_name").value;
    Name_Of_The_Guest_Array.push(Guest_name)
    console.log(Guest_name);    
    console.log(Name_Of_The_Guest_Array );
    var lenght_of_name = Name_Of_The_Guest_Array.length;
    console.log(lenght_of_name);
    document.getElementById("display_name").innerHTML=Name_Of_The_Guest_Array.toString();
   }



function show()
{
    var i= Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
    
}


function sorting()
    {
        Name_Of_The_Guest_Array.sort();           // add the sort function here
        // .sort();
        var i= Name_Of_The_Guest_Array.join("<br>");
        console.log(Name_Of_The_Guest_Array);       
        document.getElementById("sorted").innerHTML=i.toString();
        }


function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++)
        {
            if(s==Name_Of_The_Guest_Array[j]){
                found=found+1;
            }   
        }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}