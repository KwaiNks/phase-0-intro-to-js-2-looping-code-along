// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  
  function writeCards(names, events){
    const newArrey=[];
    for(let i = 0; i < names.length; i++){
        newArrey.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return newArrey;
  }


  function countDown(positiveInt){
    let i = 0;
    while(positiveInt >= i){
        console.log(positiveInt);
    positiveInt--;
    }
   

  }