

    function evenOrOdd (elTd)
    {   
        if (elTd.innerText % 2 == 0)
        { 
            elTd.bgColor = 'blue' ;
            alert(elTd.innerText +  ' >>> number is even') ;    
        }
        else if (elTd.innerText % 2 !== 0 ) {
            alert(elTd.innerText +  ' >>> number is odd') ;  
        }
    
    }

   
document.getElementById('elTbl').bgcolor = 'blue';


