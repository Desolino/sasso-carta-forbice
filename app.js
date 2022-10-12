let userScore;
let pcScore; 

let userPick;
let cpuPick;

let allOptions=['sasso','carta','forbice'];
var possibleUserPick= document.getElementsByClassName("user-choice");

//funziona copiandolo e incollandolo nella console, ma non da qui.. scritto a lacerba//
for(var i = 0; i < possibleUserPick.length; i++){
    possibleUserPick[i].addEventListener('click', function(){     
    userPick = document.getElementsByClassName("user-choice").dataset.name;
    console.log('la tua scelta è:' + userPick)
    generateCpuChoice();
    console.log('la scelta del pc è:' + cpuPick)
    checkWhoWon();
           
  });
}
 
//funzione per logica di gioco//

function checkWhoWon(){
    if(userPick == cpuPick){
        console.log('hai pareggiato')
    }else if(userPick == 'carta'){
        if(cpuPick == 'sasso'){
            console.log('hai vinto');   
        }else{
            console.log('hai perso')
        };
    }else if(userPick == 'sasso'){
    
        if(cpuPick == 'forbice'){
            console.log('hai vinto');   
        }else{
            console.log('hai perso')
        }
         
    }else if(userPick == 'forbice'){
        if(cpuPick == 'carta'){
            console.log('hai vinto');   
        }else{
            console.log('hai perso')
        };
    }else{
        console.log('hai perso');
    };
    
};
checkWhoWon();

//funzione per logica di gioco//

//Genera scelta utente e assegna la scelta del pc all'elemento dell'array 

function generateCpuChoice(){    
    //console.log(Math.floor(Math.random() * allOptions.length))//
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)]
    console.log(cpuPick);
};
generateCpuChoice();

//Genera scelta utente e assegna la scelta del pc all'elemento dell'array 


