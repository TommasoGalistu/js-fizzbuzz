// creazione di variabile da nodo conteiner dove devo appendere i figli
let genitore = document.querySelector('.row')

// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per
//  i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli 
//  di 3 che di 5 stampi “FizzBuzz”.

for(let i=1; i <= 100; i++){
    let progressivo = i
    
    if(i % 3 === 0 && i % 5 === 0){
        progressivo = 'FizzBuzz'
    } else if(i % 5 === 0){
         progressivo = 'Buzz'
    } else if(i % 3 === 0){
        progressivo = 'Fizz'
    }
    console.log(progressivo)

    // creazione di un nodo div
    let card = document.createElement('div')
    card.append(progressivo)
    // aggiunta della classe al nodo
    if(progressivo === 'Fizz'){
        card.classList.add('col-fizz');

    }else if(progressivo === 'Buzz'){
        card.classList.add('col-buzz');

    }else if(progressivo === 'FizzBuzz'){
        card.classList.add('col-fizz-buzz');
    }else{
        card.classList.add('col-normale');
    }
    

    genitore.append(card)
}