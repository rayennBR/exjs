var start=false; 
do 
{
var start=confirm("would you like to start?");
game();
}while (game);

function game (nbr=3)
{
    var nbrran=Math.floor((Math.random()*10)+1),nombre;
    console.log(" the nmbr is : "+nbrran); 

    var nbfoix =0;
    trouve = false;

    while (nbfoix != nbr && !trouve  )
        { 
        nbfoix++;

        nombre=prompt("Select a nmbr between 0 and 10 ");
            if (nombre == nbrran)
                trouve= true;

            else if (nombre > nbrran)
                {alert("too big ");}
            else
                {alert("too small ");} 
                if (trouve==true)
                {alert("Congrats you've found the nmbr"+nbfoix);}
                else
                {alert("fail attempts :"+nbfoix);}
        }
}