let d = id => document.getElementById(id);

const numbers = document.querySelectorAll('.number');
const dodajTiket = d('addTicket')
const errorMsg = d('errorMsg')
const odigraj = d('odigraj')
const balance = d('balance')
const ulog = d('inputBox');

const ulog1 = d('ulog1Value');
const ulog2 = d('ulog2Value');
const ulog3 = d('ulog3Value');
const ulog4 = d('ulog4Value');
const ulog5 = d('ulog5Value');

let dobitniNiz= [];
const winningNumbers = document.querySelectorAll('.winningNumber');
const ulogDivovi = document.querySelectorAll('.ulogDiv');
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

let currentMoney = 1000;
let bet1 = 0
let bet2 = 0
let bet3 = 0
let bet4 = 0
let bet5 = 0



balance.innerHTML = currentMoney;

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

function reset(){
    d('ulogTekst').style.display="block"
    odigraj.disabled = false;
    d('section1').disabled = false;
    for (let i = 0 ; i<numbers.length;i++) {
        numbers[i].disabled = false;
    }
    ulog.style.display="block"
    ulog.value = "";
    dodajTiket.style.display="block"
    odigraj.style.display="none"
    d('ticketStatus1').style.display="none"
    d('ticketStatus2').style.display="none"
    d('ticketStatus3').style.display="none"
    d('ticketStatus4').style.display="none"
    d('ticketStatus5').style.display="none"

    d('tiket1').classList.remove('dobitniTiket');
    d('tiket1').classList.remove('izgubljeniTiket');

    d('tiket2').classList.remove('dobitniTiket');
    d('tiket2').classList.remove('izgubljeniTiket');

    d('tiket3').classList.remove('dobitniTiket');
    d('tiket3').classList.remove('izgubljeniTiket');

    d('tiket4').classList.remove('dobitniTiket');
    d('tiket4').classList.remove('izgubljeniTiket');

    d('tiket5').classList.remove('dobitniTiket');
    d('tiket5').classList.remove('izgubljeniTiket');
    ticketCounter = 1
    izabraniBrojevi  = []
    tiket1  = []
    tiket2  = []
    tiket3  = []
    tiket4  = []
    tiket5  = []
    dobitniNiz= []

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


    for  (let i = 0 ; i < 5 ; i++) {

        ticketNumber1[i].style.display = "none";
        ticketNumber2[i].style.display = "none";
        ticketNumber3[i].style.display = "none";
        ticketNumber4[i].style.display = "none";
        ticketNumber5[i].style.display = "none";
                          
    }

    for  (let i = 0 ; i < ulogDivovi.length ; i++) {
        ulogDivovi[i].style.display="none"
    }
    for  (let i = 0 ; i < winningNumbers.length ; i++) {
        winningNumbers[i].style.display="none"
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
            if (ulog.value == 0) {
                errorMsg.innerHTML= "Unesite ulog"
                errorMsg.style.display = "block";
                izabraniBrojevi  = []
                break;
            } else if (ulog.value > currentMoney) {
                errorMsg.innerHTML= "Nemate toliko para"
                errorMsg.style.display = "block";
                izabraniBrojevi  = []
                break;   
            }
           
             else if (ulog.value < 0) {
                errorMsg.innerHTML= "Nisu dozvoljeni negativni ulozi"
                errorMsg.style.display = "block";
                izabraniBrojevi  = []
                break;   
            }
            else {
                
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket1.push (izabraniBrojevi[i])
                }
                for  (let i = 0 ; i < tiket1.length ; i++) {
                    ticketNumber1[i].style.display = "flex";
                    ticketNumber1[i].innerHTML = tiket1[i]                   
                }
                errorMsg.style.display = "none";
                bet1 = ulog.value;
                currentMoney = currentMoney - ulog.value
                balance.innerHTML = currentMoney;

                ulog1.innerHTML = bet1;
                ulogDivovi[0].style.display = "block"

                ulog.value == 0
                ticketCounter++
                izabraniBrojevi=[]
                
            }
                
        break;
        case 2:
                if (ulog.value == 0) {
                    errorMsg.innerHTML= "Unesite ulog"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;
                } else if (ulog.value > currentMoney) {
                    errorMsg.innerHTML= "Nemate toliko para"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }
                
                 else if (ulog.value < 0) {
                    errorMsg.innerHTML= "Nisu dozvoljeni negativni ulozi"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                } else {
                    
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
                        errorMsg.style.display = "none";
                        bet2 = ulog.value;
                        currentMoney = currentMoney - ulog.value; 
                        balance.innerHTML = currentMoney;

                        ulog2.innerHTML = bet2;
                        ulogDivovi[1].style.display = "block"

                        ulog.value == 0
                        ticketCounter++
                        izabraniBrojevi=[]
                        
                    }
                }
            
                
                
        break;
        case 3:
               
                for (let j = 0 ; j < numbers.length ; j++) {
                    if (numbers[j].classList.contains("boja")){      
                        classCounter++                    } 
                }   

                if (ulog.value == 0) {
                    errorMsg.innerHTML= "Unesite ulog"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;
                } else if (ulog.value > currentMoney) {
                    errorMsg.innerHTML= "Nemate toliko para"
                    errorMsg.style.display = "block";
                    break;   
                }
                
                 else if (ulog.value < 0) {
                    errorMsg.innerHTML= "Nisu dozvoljeni negativni ulozi"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }
                else {
                
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
                errorMsg.style.display = "none";
                bet3 = ulog.value;
                currentMoney = currentMoney - ulog.value; 
                balance.innerHTML = currentMoney;

                ulog3.innerHTML = bet3;
                ulogDivovi[2].style.display = "block"

                ulog.value == 0
                ticketCounter++
                izabraniBrojevi=[]
            }
        }
        break;
        case 4:

                if (ulog.value == 0) {
                    errorMsg.innerHTML= "Unesite ulog"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;
                    
                } else if (ulog.value > currentMoney) {
                    errorMsg.innerHTML= "Nemate toliko para"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }
                
                 else if (ulog.value < 0) {
                    errorMsg.innerHTML= "Nisu dozvoljeni negativni ulozi"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }
                else {
              
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
                errorMsg.style.display = "none";
                bet4 = ulog.value;
                currentMoney = currentMoney - ulog.value; 
                balance.innerHTML = currentMoney;

                ulog4.innerHTML = bet4;
                ulogDivovi[3].style.display = "block"


                ulog.value == 0
                ticketCounter++
                izabraniBrojevi=[]
            }
            }
        break;
        case 5:
 
                if (ulog.value == 0) {
                    errorMsg.innerHTML= "Unesite ulog"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;
                } else if (ulog.value > currentMoney) {
                    errorMsg.innerHTML= "Nemate toliko para"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }
                
                 else if (ulog.value < 0) {
                    errorMsg.innerHTML= "Nisu dozvoljeni negativni ulozi"
                    errorMsg.style.display = "block";
                    izabraniBrojevi  = []
                    break;   
                }else {

                
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
                    dodajTiket.style.display = "none"
                    ulog.style.display = "none"
                    odigraj.style.display = "block"
                    d('ulogTekst').style.display = "none";
                }
                errorMsg.style.display = "none";
                bet5 = ulog.value;
                currentMoney = currentMoney - ulog.value; 
                balance.innerHTML = currentMoney;

                ulog5.innerHTML = bet5;
                ulogDivovi[4].style.display = "block"


                ulog.value == 0
                ticketCounter++
                izabraniBrojevi=[]
            }
        }
        break;
        default:
            return;        

    }
    console.log("ticket counter je " + ticketCounter);
 
});

odigraj.addEventListener ('click' , ()=> {
    
    let redniBroj = 0  
    odigraj.disabled = true;
    d('section1').disabled = true;
    for (let i = 0 ; i<numbers.length;i++) {
        numbers[i].disabled = true;
    }
    setInterval (()=>{
        if (redniBroj<12) {
        winningNumbers[redniBroj].style.display = "flex";}
        if (redniBroj == 11) {
            redniBroj++;
            
            setTimeout(reset,4000)
           
             if (provera(tiket1,dobitniNiz)) {
               d('tiket1').classList.add('dobitniTiket');
               d('ticketStatus1').style.display="flex"
               d('ticketStatus1').innerHTML = "DOBITNI"
               switch (tiket1.length) {
                   case 1:
                        currentMoney = currentMoney + ( bet1 * 4) 
                    break;
                    case 2:
                            currentMoney = currentMoney + ( bet2 * 7) 
                    break;
                    case 3:
                            currentMoney = currentMoney + ( bet3 * 15) 
                    break;
                    case 4:
                            currentMoney = currentMoney + ( bet4 * 30) 
                    break;
                    case 5:
                            currentMoney = currentMoney + ( bet5 * 50) 
                    break; 
                    default:
                    return; 

               }
                
             } else {
                d('tiket1').classList.add('izgubljeniTiket');
                d('ticketStatus1').style.display="flex"
                d('ticketStatus1').innerHTML = "IZGUBLJENI" 
             }

             if (provera(tiket2,dobitniNiz)) {
                d('tiket2').classList.add('dobitniTiket');
                d('ticketStatus2').style.display="flex"
                d('ticketStatus2').innerHTML = "DOBITNI"
                switch (tiket2.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet1 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet2 * 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet3 * 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet4 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet5 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                } 
              } else {
                 d('tiket2').classList.add('izgubljeniTiket');
                 d('ticketStatus2').style.display="flex"
                 d('ticketStatus2').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket3,dobitniNiz)) {
                d('tiket3').classList.add('dobitniTiket');
                d('ticketStatus3').style.display="flex"
                d('ticketStatus3').innerHTML = "DOBITNI" 
                switch (tiket3.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet1 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet2 * 7)
                             balance.innerHTML = currentMoney; 
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet3 * 15)
                             balance.innerHTML = currentMoney; 
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet4 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet5 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                }
              } else {
                 d('tiket3').classList.add('izgubljeniTiket');
                 d('ticketStatus3').style.display="flex"
                 d('ticketStatus3').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket4,dobitniNiz)) {
                d('tiket4').classList.add('dobitniTiket');
                d('ticketStatus4').style.display="flex"
                d('ticketStatus4').innerHTML = "DOBITNI"
                switch (tiket4.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet1 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet2 * 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet3 * 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet4 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet5 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                } 
              } else {
                 d('tiket4').classList.add('izgubljeniTiket');
                 d('ticketStatus4').style.display="flex"
                 d('ticketStatus4').innerHTML = "IZGUBLJENI" 
              }

              if (provera(tiket5,dobitniNiz)) {
                d('tiket5').classList.add('dobitniTiket');
                d('ticketStatus5').style.display="flex"
                d('ticketStatus5').innerHTML = "DOBITNI"
                switch (tiket5.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet1 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet2 * 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet3 * 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet4 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet5 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                } 
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
