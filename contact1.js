// onclick function
window.onload= function(){
    document.getElementById('subbut').onclick= validate

};


function validate(){
    
    // validation fuction for name
    let name1=document.querySelector('#name');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    if (name1.value == '')
    name1.nextElementSibling.innerHTML='Please enter your name';
    else if(!namepattern.test(name1.value))
        name1.nextElementSibling.innerHTML='letters only'; 
    else
        name1.nextElementSibling.innerHTML='valid name';

    // email validation

    let email1=document.querySelector('#email');
    let emailpattern=/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/;

   if(email1.value == '')
   email1.nextElementSibling.innerHTML='Please enter your email-id';
   else if(!emailpattern.test(email1.value))
   email1.nextElementSibling.innerHTML='emailid not valid';
   else
     email1.nextElementSibling.innerHTML='valid email';

    //  contact validation

     let phone1=document.querySelector('#contact');
     let phonepattern=/^\+(?:[0-9] ?){6,14}[0-9]$/;
     if(phone1.value == '')
     phone1.nextElementSibling.innerHTML='Please enter your Phone number';
     else if(!phonepattern.test(phone1.value))
        phone1.nextElementSibling.innerHTML='Phone number is not valid';
     else
     phone1.nextElementSibling.innerHTML='valid phone number';
    
    //  address validation
     let address1=document.querySelector('#address');
     if(address1.value == ''){
        address1.nextElementSibling.innerHTML='Please enter your address';
     }

    //  message validation
     let message1=document.querySelector('#message');
     if(message1.value == ''){
        message1.nextElementSibling.innerHTML='Please enter your address';
     }
};