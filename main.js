let d = id => document.getElementById(id);

const numbers = document.querySelectorAll('.number');
const dodajTiket = d('addTicket')
const errorMsg = d('errorMsg')
const odigraj = d('odigraj')
let dobitniNiz= [];
const winningNumbers = document.querySelectorAll('.winningNumber');
const ticketNumber1 = document.querySelectorAll('.ticketNumber1');
const ticketNumber2 = document.querySelectorAll('.ticketNumber2');
const ticketNumber3 = document.querySelectorAll('.ticketNumber3');
const ticketNumber4 = document.querySelectorAll('.ticketNumber4');
const ticketNumber5 = document.querySelectorAll('.ticketNumber5');

let ticketCounter = 1;
let izabraniBrojevi  = [];
let tiket1  = [];
let tiket2  = [];
let tiket3  = [];
let tiket4  = [];
let tiket5  = [];

var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

function provera (nizProvera,dobitniNiz) {
    let brojPogodjenih = 0;
    for (let i = 0; i < nizProvera.length; i++) {
    for (let j = 0; j < dobitniNiz.length; j++) {
            if (nizProvera[i] == dobitniNiz[j]) {
                brojPogodjenih++
            }
        }
    }
    if (brojPogodjenih == nizProvera.length) {
        return true
    } else {
        return false
    }
}




// creating array of wining numbers
for (let i = 0; i < 12; i++) {
    let add = true;
    let randomNumber = Math.floor(Math.random() * 30) + 1;

    for (let y = 0; y < 12; y++) {
        if (dobitniNiz[y] == randomNumber) {
            add = false;
            
        }
    }
    if (add) {
        dobitniNiz.push(randomNumber)
    } else {
        i--;
    }
}

//adding winning numbers into DOM

for (let i = 0; i < winningNumbers.length; i++) {
    winningNumbers[i].innerHTML = dobitniNiz[i]
}
// event listeners for 1-30 numbers and number limiters

for(let i = 0 ; i < numbers.length ; i++) { 
    numbers[i].addEventListener('click', ()=> {
        let classCounter = 0;
        for (let j = 0 ; j < numbers.length ; j++) {        
            if (numbers[j].classList.contains("boja")){      classCounter++            
               console.log(classCounter);
               
           }
     
        if (classCounter == 5 ) {
            numbers[i].classList.remove("boja");
          }
           if (classCounter > 4) {
               return
           }
           
        }
        numbers[i].classList.toggle("boja");
    })
}

//dodavanje tiketa 

dodajTiket.addEventListener('click', ()=>{
    let classCounter = 0;
    // dodavanje u niz izabranih brojeva

    for(let i = 0 ; i < numbers.length ; i++) {
        if (numbers[i].classList.contains("boja")){  
        izabraniBrojevi.push (i+1);
        classCounter++            
         
        }
    }
    console.log(classCounter);
    console.log(izabraniBrojevi);

    // limiteri koji zabranjuju dodavanje tketa
    if (classCounter == 0) {
        errorMsg.innerHTML='Izaberite neki broj';
        return;
    }
    //uklanjanje klase
    for(let i = 0 ; i < numbers.length ; i++) {
        numbers[i].classList.remove("boja") 
           
    }
 
    switch(ticketCounter) {
        case 1:

                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket1.push (izabraniBrojevi[i])
                }
                for  (let i = 0 ; i < tiket1.length ; i++) {
                    ticketNumber1[i].style.display = "flex";
                    ticketNumber1[i].innerHTML = tiket1[i]
                }
                ticketCounter++
                izabraniBrojevi=[]
        break;
        case 2:
            
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket2.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket2)){
                    errorMsg.innerHTML = "tiket vec postoji"
                    tiket2= [];
                    izabraniBrojevi = []
                    return;
                }else {
                    for  (let i = 0 ; i < tiket2.length ; i++) {
                        ticketNumber2[i].style.display = "flex";
                        ticketNumber2[i].innerHTML = tiket2[i]
                    }
                    ticketCounter++
                    izabraniBrojevi=[]
                }
                
        break;
        case 3:
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket3.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket3) || arraysMatch(tiket2,tiket3)){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    tiket3= [];
                    izabraniBrojevi = []
                    return;
                } else {
                for  (let i = 0 ; i < tiket3.length ; i++) {
                    ticketNumber3[i].style.display = "flex";
                    ticketNumber3[i].innerHTML = tiket3[i]
                }
                ticketCounter++
                izabraniBrojevi=[]
            }
        break;
        case 4:
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket4.push (izabraniBrojevi[i])
                }

                if (arraysMatch(tiket1,tiket4) || arraysMatch(tiket2,tiket4) || arraysMatch(tiket3,tiket4) ){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    tiket4= [];
                    izabraniBrojevi = []
                    return;
                } else {
                for  (let i = 0 ; i < tiket4.length ; i++) {
                    ticketNumber4[i].style.display = "flex";
                    ticketNumber4[i].innerHTML = tiket4[i]
                }
                ticketCounter++
                izabraniBrojevi=[]
            }
        break;
        case 5:
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket5.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket5) || arraysMatch(tiket2,tiket5) || arraysMatch(tiket3,tiket5) ||arraysMatch(tiket4,tiket5) ){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    tiket5= [];
                    izabraniBrojevi = []
                    return;
                } else {
                for  (let i = 0 ; i < tiket5.length ; i++) {
                    ticketNumber5[i].style.display = "flex";
                    ticketNumber5[i].innerHTML = tiket5[i]
                }
                ticketCounter++
                izabraniBrojevi=[]
            }
        break;
        default:
            return;        

    }
    console.log("ticket counter je " + ticketCounter);
 
});

odigraj.addEventListener ('click' , ()=> {
    
    let redniBroj = 0  
    setInterval (()=>{
        winningNumbers[redniBroj].style.display = "flex";
        if (redniBroj == 11) {
            
             if (provera(tiket1,dobitniNiz)) {
               d('tiket1').classList.add('dobitniTiket');
               d('ticketStatus1').style.display="flex"
               d('ticketStatus1').innerHTML = "DOBITNI" 
             } else {
                d('tiket1').classList.add('izgubljeniTiket');
                d('ticketStatus1').style.display="flex"
                d('ticketStatus1').innerHTML = "IZGUBLJENI" 
             }

             if (provera(tiket2,dobitniNiz)) {
                d('tiket2').classList.add('dobitniTiket');
                d('ticketStatus2').style.display="flex"
                d('ticketStatus2').innerHTML = "DOBITNI" 
              } else {
                 d('tiket2').classList.add('izgubljeniTiket');
                 d('ticketStatus2').style.display="flex"
                 d('ticketStatus2').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket3,dobitniNiz)) {
                d('tiket3').classList.add('dobitniTiket');
                d('ticketStatus3').style.display="flex"
                d('ticketStatus3').innerHTML = "DOBITNI" 
              } else {
                 d('tiket3').classList.add('izgubljeniTiket');
                 d('ticketStatus3').style.display="flex"
                 d('ticketStatus3').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket4,dobitniNiz)) {
                d('tiket4').classList.add('dobitniTiket');
                d('ticketStatus4').style.display="flex"
                d('ticketStatus4').innerHTML = "DOBITNI" 
              } else {
                 d('tiket4').classList.add('izgubljeniTiket');
                 d('ticketStatus4').style.display="flex"
                 d('ticketStatus4').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket5,dobitniNiz)) {
                d('tiket5').classList.add('dobitniTiket');
                d('ticketStatus5').style.display="flex"
                d('ticketStatus5').innerHTML = "DOBITNI" 
              } else {
                 d('tiket5').classList.add('izgubljeniTiket');
                 d('ticketStatus5').style.display="flex"
                 d('ticketStatus5').innerHTML = "IZGUBLJENI" 
              }
            return
        }
        redniBroj++;
        
    },2000)
})
