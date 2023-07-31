//looping in java script

//for loop
for(let i=1 ; i<=10 ; i++)
{
    document.write(i ," <br>");
}

for(let i=1 ;i<=10 ;i++)
{
    document.write(" " + "Sandeep Wagle", "<br>") ;
}
document.write( "<br>") ;

document.write("while loop :","<br> ");

let i=0;
while(i<5){
    document.write(" " +i);
    i++;
}

document.write( "<br>") ;
document.write( "<br>") ;

document.write("Do while loop :","<br> ");
let a=0;

do{
    document.write( " " +a) ;
a++;
}while(a<=10);
// array ko;

document.write( "array ","<br>") ;
const days=['sun','mon','tue','wed','thur','fri','sat']
// document.write(days);
// document.write(days[2]);
document.write(" " +days)

days.forEach(function(abc){
    document.write(" " +abc, "<br>");
})
days.shift();
document.write(" "+days);
days.unshift("janurary ") ;
document.write("<br>"+days);
// push pop
days.pop();
document.write("<br>"+ days);
days.push("december");
document.write("<br>" +days);

