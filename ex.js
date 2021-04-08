var Test =0 ; 
var start=confirm("start ");
function comp(min,max)
{
	return min+Math.floor(Math.random()*(max-min+1));
}
var nbrran=comp(0,10);
do{
var nombre=prompt("Select a nmbr between 0 and 10 ");
console.log(" the nmbr is : "+nombre); 

if (nombre > nbrran)
{
   alert("too big ");
   Test++ ;
}
if (nombre < nbrran)
{
    alert("too small");
    Test++ ;
} 
if (nombre == nbrran) 
{
    alert("Congrats you've found the nmbr");
    break;
}
}while (Test < 3);

if (Test == 3)
{ console.log("Better luck next time " + nbralea); 
var on=confirm("restart ?") }