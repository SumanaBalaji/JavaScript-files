window.onload=function(){getTime();getDate();}
function getTime()
{
//for date in day/month/year formate
var date=new Date();
var day =date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
// document.write("<br>Date is:"+day+"/"+month+"/"+year);
//for time in hrs:min:sec formate
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
//add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
// document.getElementById('date').innerHTML=+date+"/"+month+"/"+year); 
document.getElementById('time').innerHTML=h+":"+m+":"+s;
document.getElementById('date').innerHTML=+day+"/"+month+"/"+year; 
// document.write("<br>Date is:"+day+"/"+month+"/"+year); 
setTimeout(function(){getTime()},1000);
}
function checkTime(i)
{
if(i<10)
{
    i="0" +i;
}
return i;
}
//document.write("<br>Date is:"+day+"/"+month+"/"+year);