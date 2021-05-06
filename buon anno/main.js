//Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

var timer = 11;

var intervallo = setInterval (function(){
    if (timer === 0){
        alert('Buon anno!')
        clearInterval(intervallo)
    }else {
        timer --;
    }
    document.getElementById('secondi').innerHTML = timer;

}, 1000)


