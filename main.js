let d = id => document.getElementById(id);

const numbers = document.querySelectorAll('.number');
const dodajTiket = d('addTicket')
const errorMsg = d('errorMsg')
const odigraj = d('odigraj')
const balance = d('balance')
const ulog = d('inputBox');
const dodajKredit = d('dodaj');
// spanovi za uloge
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

let currentMoney = 5000;
let bet1 = 0;
let bet2 = 0;
let bet3 = 0;
let bet4 = 0;
let bet5 = 0;

balance.innerHTML = currentMoney;

// provera da li se nizovi podudaraju

var arraysMatch = function (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;

};

function numberEventlistener(){
    for(let i = 0 ; i < numbers.length ; i++) { 
        numbers[i].addEventListener('click', ()=> {
            let classCounter = 0;
            for (let j = 0 ; j < numbers.length ; j++) {        
                if (numbers[j].classList.contains("boja")){   
                    classCounter++                                            
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
}

function invalidBet(errormsg){
    errorMsg.innerHTML= errormsg
    errorMsg.style.display = "block";
    ulog.value = "";
    izabraniBrojevi  = [];
}

//provera dobitnog tiketa

function provera (nizProvera,dobitniNiz) {
    let brojPogodjenih = 0;
    for (let i = 0; i < nizProvera.length; i++) {
    for (let j = 0; j < dobitniNiz.length; j++) {
            if (nizProvera[i] == dobitniNiz[j]) {
                brojPogodjenih++
            }
        }
    }
    if (nizProvera.length == 0) {
        return false
    }
    if (brojPogodjenih == nizProvera.length) {
        return true
    } else {
        
        return false
    }
}
function tiketStatus(ID , className, display , msg) {
    d(`tiket${ID}`).classList.add(className);
    d(`ticketStatus${ID}`).style.display = display;
    d(`ticketStatus${ID}`).innerHTML = msg;
}
//reset funkcija
function reset(){
    d('ulogTekst').style.display="block"
    odigraj.disabled = false;
    dodajKredit.disabled =false;
    redniBroj = 0;
    d('section1').disabled = false;
    for (let i = 0 ; i<numbers.length;i++) {
        numbers[i].disabled = false;
    }
    ulog.style.display="block"
    ulog.value = "";   
     dodajTiket.style.display="block"

    odigraj.style.display="none"

    for (let i =1 ; i<6 ; i++) {
        d(`ticketStatus${i}`).style.display="none"
    }
    for (let i =1 ; i<6 ; i++) {
        d(`tiket${i}`).style.display="none"
    }  
    for (let i =1 ; i<6 ; i++) {
        d(`tiket${i}`).classList.remove('dobitniTiket');
        d(`tiket${i}`).classList.remove('izgubljeniTiket'); 
    }
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
    for (let i = 0; i < winningNumbers.length; i++) {
        winningNumbers[i].innerHTML = dobitniNiz[i]
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
numberEventlistener();
dodajKredit.addEventListener ('click', ()=>{   
    currentMoney = currentMoney +1000;
    balance.innerHTML = currentMoney;

})

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
    // limiteri koji zabranjuju dodavanje tketa
    if (classCounter == 0) {
        errorMsg.innerHTML='Izaberite neki broj';
        errorMsg.style.display = "block"
        return;
    }
    //uklanjanje klase
    for(let i = 0 ; i < numbers.length ; i++) {
        numbers[i].classList.remove("boja") 
           
    }
 
    switch(ticketCounter) {
        case 1:        
            if (ulog.value < 0) {
                invalidBet('Nisu dozvoljeni negativni ulozi')
                break;   
            }
            else if (ulog.value > currentMoney) {
                invalidBet('Nemate dovoljno kredita')
                break;  
            }

            else {
                if (ulog.value == 0 && currentMoney > 0) {
                    invalidBet('Stavite ulog')
                    break;   
                }

                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket1.push (izabraniBrojevi[i])
                }
                for  (let i = 0 ; i < tiket1.length ; i++) {
                    ticketNumber1[i].style.display = "flex";
                    ticketNumber1[i].innerHTML = tiket1[i]                   
                }
                
                d('tiket1').style.display = "flex"
                errorMsg.style.display = "none";
                bet1 =  parseInt (ulog.value);
                currentMoney = currentMoney - bet1
                balance.innerHTML = currentMoney;
                ulog1.innerHTML = bet1;
                ulogDivovi[0].style.display = "block"
                ulog.value = ""
                ticketCounter++
                izabraniBrojevi=[]

                if (ulog.value == currentMoney) {
                    errorMsg.innerHTML= "Dodajte jos kredita kako bi ste nastavili igru"
                    errorMsg.style.display = "block";
                }
                
            }
                
        break;
        case 2:
             if (ulog.value < 0) {
                invalidBet('Nisu dozvoljeni negativni ulozi')
                break;   
            }
            else if (ulog.value > currentMoney) {
                invalidBet('Nemate dovoljno kredita')
                break;  
            }
                 else {
                    if (ulog.value == 0 && currentMoney > 0) {
                        invalidBet('Stavite ulog')
                        break;   
                    }
                    
                    
                    for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                        tiket2.push (izabraniBrojevi[i])
                    }
                    if (arraysMatch(tiket1,tiket2)){
                        errorMsg.innerHTML = "tiket vec postoji"
                        errorMsg.style.display = "block";
                        tiket2= [];
                        izabraniBrojevi = []
                        return;
                    }else {
                        for  (let i = 0 ; i < tiket2.length ; i++) {
                            ticketNumber2[i].style.display = "flex";
                            ticketNumber2[i].innerHTML = tiket2[i]
                        }
                        d('tiket2').style.display = "flex"
                        errorMsg.style.display = "none";
                        bet2 = parseInt (ulog.value);
                        currentMoney = currentMoney - bet2; 
                        balance.innerHTML = currentMoney;
                        ulog2.innerHTML = bet2;
                        ulogDivovi[1].style.display = "block"
                        ulog.value = ""
                        ticketCounter++
                        izabraniBrojevi=[]
                        if (ulog.value == currentMoney) {
                            errorMsg.innerHTML= "Dodajte jos kredita kako bi ste nastavili igru"
                            errorMsg.style.display = "block";
                        }
                        
                    }
                }
            
                
                
        break;
        case 3:
                if (ulog.value < 0) {
                    invalidBet('Nisu dozvoljeni negativni ulozi')
                    break;   
                }
                else if (ulog.value > currentMoney) {
                    invalidBet('Nemate dovoljno kredita')
                    break;  
                }
                else {
                    if (ulog.value == 0 && currentMoney > 0) {
                        invalidBet('Stavite ulog')
                        break;   
                    }
                   
                
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket3.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket3) || arraysMatch(tiket2,tiket3)){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    errorMsg.style.display = "block";

                    tiket3= [];
                    izabraniBrojevi = []
                    return;
                } else {
                for  (let i = 0 ; i < tiket3.length ; i++) {
                    ticketNumber3[i].style.display = "flex";
                    ticketNumber3[i].innerHTML = tiket3[i]
                }
                d('tiket3').style.display = "flex"
                errorMsg.style.display = "none";
                bet3 = parseInt (ulog.value);
                currentMoney = currentMoney - bet3 
                balance.innerHTML = currentMoney;
                ulog3.innerHTML = bet3;
                ulogDivovi[2].style.display = "block"
                ulog.value = ""
                ticketCounter++
                izabraniBrojevi=[]
                if (ulog.value == currentMoney) {
                    errorMsg.innerHTML= "Dodajte jos kredita kako bi ste nastavili igru"
                    errorMsg.style.display = "block";
                }
            }
        }
        break;
        case 4:
           if (ulog.value < 0) {
                invalidBet('Nisu dozvoljeni negativni ulozi')
                break;   
            }
            else if (ulog.value > currentMoney) {
                invalidBet('Nemate dovoljno kredita')
                break;  
            }
                else {
                    if (ulog.value == 0 && currentMoney > 0) {
                        invalidBet('Stavite ulog')
                        break;   
                    }
                    
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket4.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket4) || arraysMatch(tiket2,tiket4) || arraysMatch(tiket3,tiket4) ){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    errorMsg.style.display = "block";
                    tiket4= [];
                    izabraniBrojevi = []
                    return;
                } else {
                for  (let i = 0 ; i < tiket4.length ; i++) {
                    ticketNumber4[i].style.display = "flex";
                    ticketNumber4[i].innerHTML = tiket4[i]
                }
                d('tiket4').style.display = "flex"
                errorMsg.style.display = "none";
                bet4 = parseInt (ulog.value);
                currentMoney = currentMoney - bet4; 
                balance.innerHTML = currentMoney;
                ulog4.innerHTML = bet4;
                ulogDivovi[3].style.display = "block"
                ulog.value = ""
                ticketCounter++
                izabraniBrojevi=[]
                if (ulog.value == currentMoney) {
                    errorMsg.innerHTML= "Dodajte jos kredita kako bi ste nastavili igru"
                    errorMsg.style.display = "block";
                }
            }
            }
        break;
        case 5:
           if (ulog.value < 0) {
                invalidBet('Nisu dozvoljeni negativni ulozi')
                break;   
            }
            else if (ulog.value > currentMoney) {
                invalidBet('Nemate dovoljno kredita')
                break;  
            }
                else {
                   
                    if (ulog.value == 0 && currentMoney > 0) {
                        invalidBet('Stavite ulog')
                        break;   
                    }
   
                for  (let i = 0 ; i < izabraniBrojevi.length ; i++) {
                    tiket5.push (izabraniBrojevi[i])
                }
                if (arraysMatch(tiket1,tiket5) || arraysMatch(tiket2,tiket5) || arraysMatch(tiket3,tiket5) ||arraysMatch(tiket4,tiket5) ){
                    errorMsg.innerHTML = "Tiket vec postoji"
                    errorMsg.style.display = "block";

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
                d('tiket5').style.display = "flex"
                errorMsg.style.display = "none";
                bet5 = parseInt (ulog.value);
                
                currentMoney = currentMoney - bet5; 
                balance.innerHTML = currentMoney;
                ulog5.innerHTML = bet5;
                ulogDivovi[4].style.display = "block"
                ulog.value = ""
                ticketCounter++
                izabraniBrojevi=[]
                dodajKredit.disabled =true

            }
        }
        break;
        default:
            return;        

    }
   
 
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
            
            setTimeout(reset,6000)
           
             if (provera(tiket1,dobitniNiz)) {
                tiketStatus(1,'dobitniTiket','flex' , 'DOBITNI')
               switch (tiket1.length) {
                   case 1:
                        currentMoney = currentMoney + ( bet1 * 4)
                        balance.innerHTML = currentMoney;
                    break;
                    case 2:
                            currentMoney = currentMoney + ( bet1 * 7) 
                            balance.innerHTML = currentMoney;
                    break;
                    case 3:
                            currentMoney = currentMoney + ( bet1 * 15) 
                            balance.innerHTML = currentMoney;
                    break;
                    case 4:
                            currentMoney = currentMoney + ( bet1 * 30) 
                            balance.innerHTML = currentMoney;
                    break;
                    case 5:
                            currentMoney = currentMoney + ( bet1 * 50) 
                            balance.innerHTML = currentMoney;
                    break; 
                    default:
                    return; 

               }
                
             } else {
                tiketStatus(1, 'izgubljeniTiket', 'flex' , 'IZGUBLJENI')
             }

             if (provera(tiket2,dobitniNiz)) {
                tiketStatus(2, 'dobitniTiket', 'flex' , 'DOBITNI')
                switch (tiket2.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet2 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet2 * 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + (bet2 * 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + (bet2 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + (bet2* 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                } 
              } else {
                tiketStatus(2 , 'izgubljeniTiket', 'flex' , 'IZGUBLJENI')
              }

              if (provera(tiket3,dobitniNiz)) {
                tiketStatus(3, 'dobitniTiket', 'flex' , 'DOBITNI') 
                switch (tiket3.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet3 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet3 * 7)
                             balance.innerHTML = currentMoney; 
                     break;
                     case 3:
                             currentMoney = currentMoney + (bet3* 15)
                             balance.innerHTML = currentMoney; 
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet3 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet3 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                }
              } else {
                tiketStatus(3, 'izgubljeniTiket', 'flex' , 'IZGUBLJENI')
              }

              if (provera(tiket4,dobitniNiz)) {
                tiketStatus(4 , 'dobitniTiket', 'flex' , 'DOBITNI')
                
                switch (tiket4.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet4 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + ( bet4 * 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet4 * 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + ( bet4 * 30) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 5:
                             currentMoney = currentMoney + ( bet4 * 50) 
                             balance.innerHTML = currentMoney;
                     break; 
                     default:
                     return; 
 
                } 
              } else {
                tiketStatus(4, 'izgubljeniTiket', 'flex' , 'IZGUBLJENI')
              }

              if (provera(tiket5,dobitniNiz)) {
                tiketStatus(5, 'dobitniTiket', 'flex' , 'DOBITNI')
                switch (tiket5.length) {
                    case 1:
                         currentMoney = currentMoney + ( bet5 * 4) 
                         balance.innerHTML = currentMoney;
                     break;
                     case 2:
                             currentMoney = currentMoney + (bet5* 7) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 3:
                             currentMoney = currentMoney + ( bet5* 15) 
                             balance.innerHTML = currentMoney;
                     break;
                     case 4:
                             currentMoney = currentMoney + (bet5 * 30) 
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
                tiketStatus(5, 'izgubljeniTiket', 'flex' , 'IZGUBLJENI')
              }
            return
        }
        redniBroj++;
        
    },2000)
})
