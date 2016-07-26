
    
const readline = require('readline');
const util = require('./newgrade');  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
 
 
rl.question('Enter a grade: ', (answer) => {
  // TODO: Log the answer in a databas
  var grade=parseFloat(answer);
  util.pro(grade); 
  rl.close();
});

