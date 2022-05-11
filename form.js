let fname = document.getElementById('fName');
fname.setAttribute('onfocusout' , 'nameval()');
let nameregex = /^[a-z ,.'-]+$/i;
let namespan = document.getElementById('name');

console.log(namespan);

function nameval() {
    if(nameregex.test(fname.value))
    {
        console.log(nameregex.test(fname.value));
        namespan.innerHTML =" Approved";
        document.querySelector("#name").style.backgroundColor="green";
    }
    else
    {
        namespan.innerHTML=" Invalid";
        document.querySelector("#name").style.backgroundColor="red";
    }
    
};
//last name regex
let lname = document.getElementById('lName');
lname.setAttribute('onfocusout' , 'lastval()');
let lnameregex = /^[a-z ,.'-]+$/i;
let  spanlast = document.getElementById('lastspan');
console.log(spanlast);

function lastval() {
    if(lnameregex.test(lname.value))
    {
        spanlast.innerHTML = 'Approved';
        document.querySelector("#lastspan").style.backgroundColor="green";
    }
    else
     {
         spanlast.innerHTML = 'Invalid';
         document.querySelector("#lastspan").style.backgroundColor="red";
     }
}
//mail regxx

let fmail = document.getElementById('mail');
fmail.setAttribute('onfocusout' , 'mailval()');
let mailspan = document.getElementById('mails');
console.log(mailspan);
let mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(mailreg.test());
function mailval() {
        
    if (mailreg.test(fmail.value))
    {
        console.log(fmail.value);
        console.log(mailreg.test(fmail.value));
            mailspan.innerHTML ='Email is Approved';
            document.querySelector("#mails").style.backgroundColor="green";
      
    }
    else
    {
        
        mailspan.innerHTML ="Email is not approved";
        document.querySelector("#mails").style.backgroundColor="red";
    }
    //   alert("You have entered an invalid email address!")
    //   return (false)
}

// password regex

let fpassword = document.getElementById('formpass');
fpassword.setAttribute('type' , 'password');
fpassword.setAttribute('onfocusout' ,'fpass()');
let passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let spanpass =document.getElementById('pass1');


function fpass() {
    if (passregex.test(fpassword.value)) {

       spanpass.innerHTML = 'Approved';
       document.querySelector("#pass1").style.backgroundColor="green";
   }
   else
   {
       spanpass.innerHTML ='Not Valid';
       document.querySelector("#pass1").style.backgroundColor="red";
   }
}

//  confirm password
let lpassword = document.getElementById('formpass1');
lpassword.setAttribute('type' , 'password');
lpassword.setAttribute('onfocusout' , 'lpass()');

let confirmspan = document.getElementById('conpas');


function lpass() {
    if(fpassword.value == lpassword.value)
    {
        confirmspan.innerHTML ="Aprroved";
        document.querySelector("#conpas").style.backgroundColor="green";
    }
    else
    {
        confirmspan.innerHTML='Invalid';
        document.querySelector("#conpas").style.backgroundColor="red";
    }
}



// phone number regex
 
let passwordin = document.getElementById('phone');
passwordin.setAttribute('onfocusout' , 'phoneval()');
let phoneregex = /^\d{10}$/;
let spanphone = document.getElementById('phones');
console.log(passwordin);
console.log(phoneregex.test(passwordin.value));

function phoneval() {
    if (phoneregex.test(passwordin.value)) {
    
       spanphone.innerHTML = 'Approved';
       document.querySelector("#phones").style.backgroundColor="green";
   }
   else
   {
       spanphone.innerHTML ='Invalid';
       document.querySelector("#phones").style.backgroundColor="red";
   }
}
//button span
let buttonspan = document.getElementById('submit');
buttonspan.setAttribute('type' , 'submit');