//Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()


var secondi = parseInt(prompt('Quanto tempo manca alla cottura della pasta?'));
console.log('mancano ' + secondi + ' secondi' );

setTimeout(function(){
    alert ('la pasta è pronta')
}, secondi * 1000);