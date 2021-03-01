const id = 'avatar200';
const pass = '12345678';

alert("please enter your id and password");

let id2;
let pass2; 

const msg2 = 'wrong id or password'
const msg = 'succses'
const msg3 = 'Sorry your account have been blocked'

let fois = 0;

while(id2 !== id || pass2 !== pass){
  if( fois <3 ){
    fois = fois+1;
    
    id2 = prompt ("id");
    pass2 = prompt("password");
    
    if (id2 === id && pass2 === pass) {
      alert(msg);
    }  
    else{
      alert(msg2);
    }
  }
  else{
    alert(msg3);
    break;
  }
}