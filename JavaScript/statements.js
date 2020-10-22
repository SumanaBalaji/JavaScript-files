var name = "Sumana";
var fname = "Balaji";
if (name == "Sumana" && fname == "Balaji") 
{
    document.getElementById("demo").innerHTML = "matched";
}
if (name == "Sumana123" || fname == "Balaji123")
 {
    document.getElementById("demo").innerHTML = "Not matched";
}
var name1="sumana";
var fname1 = "Balaji";
if (name1 == "sumana" && fname1 == "Balaji")
{
    document.getElementById("demo1").innerHTML = "Not matched";
}
else
{
    document.getElementById("demo1").innerHTML = "matched";
}
var name2="sumana";
var fname2 = "Balaji";
var Mname2="Rama"
if(name2=="sumana" && fname2=="Balaji")
{
    document.getElementById("demo2").innerHTML="Realtion is father";
}
else if(name2="sumana" && Mname2=="Rama123")
{
    document.getElementById("demo2").innerHTML="Relation is mother";
}
else
{
    document.getElementById("demo2").innerHTML="No Relation";
}
