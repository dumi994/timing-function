//Cliccando su un pulsante, viene avviato un cronometro. 

var inizioEl = document.getElementById('start');
var fineEl = document.getElementById('stop');
var secondiEl = document.getElementById('cronometro');
var intervallo;
inizioEl.addEventListener('click', function(){
    //logica per avviare il cronometro
    var tempo = 0;
    intervallo = setInterval(function(){
       tempo ++; 
       console.log(tempo);
       secondiEl.innerHTML = tempo;
    }, 1000);
    
});

fineEl.addEventListener('click', function(){
    //logica per stoppare il cronometro
    clearInterval(intervallo);
});

//Per fermare il cronometro, bisogna cliccare su un secondo pulsante.