// onclick event for the function
window.onload= function(){
    document.getElementById('button').onclick= validate

};


function validate(){
   
    // validation for name
    let name1=document.querySelector('#fname');
    let namepattern = /^[a-zA-Z]{2,30}$/;
    if (name1.value == '')
    name1.nextElementSibling.innerHTML='Please enter your name';
    else if(!namepattern.test(name1.value))
        name1.nextElementSibling.innerHTML='letters only'; 
    else
        name1.nextElementSibling.innerHTML='valid name';

   //validation for Adults
    let x= document.getElementById('Adults');
     if(x.value == ''){
        x.nextElementSibling.innerHTML = 'please enter the number';
    }
    else{
        x.nextElementSibling.innerHTML = 'valid number'; 
    }
    
    // validation for destination
    if(document.form1.destination.selectedIndex==" ")
    {
    alert ( "Please select city!");
    return false;
    }
};


