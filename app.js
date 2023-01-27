//let y = 20;

//console.log(y);

//document.write(y);

//commentaire

//let carName;

//console.log(carName);

//alert("je suis une alerte!!!") // alerte

//prompt("saisir nombre")

//let nbr = prompt ("saisir nombre");

//document.write(nbr);






//let nbr = prompt("veuillez saisir un nombre");

//if (nbr>=18) {document.write("tu es majeur")} else {document.write("tu es mineur")};


//let nbr = prompt ("saisir prix HT")
//let TTC = nbr*1.2;
//document.write("le montant TTC est de ",TTC,"eur")




//let nbr = prompt ("saisir nombre");

//if (nbr%2 == 0) { document.write(pair)} 

//else if (nbr%2 > 0) { document.write(impair)} 

//else { document.write (autre)};




/*let mois = Number(prompt("saisir un numéro de mois"));

switch (mois){

case 1:
    document.write ("janvier")
    break;
case 2:
    document.write ("février")   
    break;
case 3:

    mois = "mars"    
    break;
case 4:
    mois = "avril"    
    break;
case 5:
    mois = "mai"   
    break;
case 6:
    mois = "juin"   
    break;
case 7:
    mois = "juillet"   
    break;
case 8:
    mois = "aout"   
    break;
case 9:
    mois = "septembre"    
    break;
case 10:
    mois = "octobre"   
    break;
case 11:
    mois = "novembre"    
    break;
case 12:
    mois = "décembre"    
    break;

default: 
}
*/

/*let year = Number(prompt("Donnez-moi une année bisextile"))
if (((year%4 == 0) && (year%100 != 0)) || (year%400 == 0)){
    document.write (year,"c'est une année bisextile.")
}
else {
    document.write ( year,"n'est pas une année bisextile")
}*/


/*let choix = Number(prompt("saisir un nombre"));

let nb = Math.floor(Math.random() * 10)+ 1

if (choix == nb) {
    document.write ("bon travail")
} else {
    document.write ("pas de correspondance")
} */



//let a = Number(prompt("affiché un nombre"));
//let b = Number(prompt("affiché un nombre"));
//let c = a*b
//let d = a/b 
//document.write("Résultat " + c)
//document.write("Résultat " + d)


//9/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let a = String(prompt("saisissez un texte"));
let b = "py"
let c = a.slice(0,2)


c = c.toLowerCase()


if (c == b) {
document.write(a)    
} else {
    document.write(b,a)
}*/


//12/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let a = String(prompt("saisir un texte"));
let b = a.slice (-3);
document.write(b + a + b);*/  


//10/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let a = String(prompt("saisir un texte"))

while(a.length<2){
    a = prompt("saisir un plus grand texte")
}

let b = a[0]
let c = a.slice(-1)
let d = a.slice(1, -1)

document.write(c, d, b)*/


//1/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function reverseNumber(nb) {
    return +nb.toString().split('').reverse().join('')
}

alert(reverseNumber(12345)) */


//2//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*let text = prompt("saisissez un mot")

function checkPalindrom(str) {
    let pal = str.split('').reverse().join('');

    if (pal == str) {document.write("c'est un palindrome")
        
    } else { document.write("ce n'est pas un palindrome")
        
    }
}
checkPalindrom(text)*/ 

//3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*let a = prompt("écrivez une phrase")

function maj(str) {
    let splitStr = str.toUpperCase()
}*/




//4///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/*let reponse = prompt('bonjour?');

if (reponse === 'bonjour') {
    alert('Bonjour à toi !');
   } else if (reponse === 'tu vas bien ?') {
    alert('Bien, et toi ?');
   } else {alert("désolé je n\'ai pas compris...")
}*/




/*let reponse = prompt('bonjour?');
if (reponse === "bonjour")


 var reponse2 = prompt('Bonjour ! Comment vas-tu ?');
 
 if (reponse2 === 'oui') {
 alert('Je suis content pour toi.');
 } else {
 alert('Désolé, il faut que je file.');
 }

} else if (reponse === 'tu vas bien ?') {

 
 alert('Bien, et toi ?');
} else {
 alert('Désolé, je n\'ai pas compris...');*/
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




 /*function a(nombre) {
     return nombre % 3 === 0;
 }
function b(nombre) {
    return nombre % 5 === 0;
 }
    


for (let index = 1; index <= 199; index++) {

    if (a(index) && b(index)) {
        console.log('FizzBuzz');
     } else if (a(index)) {
        console.log('Fizz');
    } else if (b(index)) {
        console.log('Buzz');
    } else {
        console.log(index);
     }

}*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*let nombreEssai = 10;

let random = Math.round(Math.random() * 101);
console.log(random)

for (let i = 0; i < 10; i++) {
    let nb = prompt("saisir un nombre entre 0 et 100!!!!!")
    
    if (nb < random) {alert("plus grand, gros nul!!!")
    } else if (nb > random) {alert("plus petit, ptit con!!!")
    } else if (nb == random) { alert("Bravoooooooooooooo!!!!")
    break
    } 
   
}

alert("tu es vraimment un looser.....")*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function diviserParDeux(nombre) {
    return nombre /2;
    
}
alert (diviserParDeux(2) === 1, diviserParDeux(4) === 2);*/



/*function somme(p1,p2) {
    return p1+p2;
     
}

alert(somme(1, 1) === 2, somme(1, 2) === 3, somme(2, 1) === 3);*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*function signe (nombre) {
    if (nombre === 0) {
    return 'nul';
    } else if (nombre > 0) {
    return 'positif';
    } else if (nombre < 0) {
    return 'négatif';
    }
   }*/
 
   
   /*function factorielle (nombre) {
    var res = 1;
    for(var i = 1; i <= nombre; i++) {
    res = i * res;
    }
    return res;
   }*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*const array = []
const name = ['denver', 'pikachu', 'babar', 'lady bug']
for (let i = 0; i <4; i++) { array.push(name[i])
}
    

console.log(array)*/


