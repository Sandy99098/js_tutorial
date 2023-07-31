function si ()
{
    let Principle = document.getElementById('p').value ;
    let rate = document.getElementById('r').value ;
    let time = document.getElementById('t').value ;
    let si=(Principle *rate * time  /100 );
    document.getElementById('result').innerHTML=si ;

}