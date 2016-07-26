




function processGrade(grade){
  
  
   if (grade < 70){
    console.log("There is no grade like that");
  }
  
  else if (grade == "INC"){
    console.log("your grade is incomplete");
  }  
  
   else if (grade == "DROP"){
    console.log("you have drop the subject");
  }  
  
  else if (grade > 100){
    console.log("Your grade is overkill");
  }  
  
  
  else if (grade < 75){
    if (grade % 2){
    console.log("your new grade is: "+(grade -3));
  } 
  
  else {
    console.log("your new grade is: "+(grade -2));
  }
 }
 else{
   if (grade % 2){
    console.log("your new grade is: "+(grade +5));
  } 
  
  else {
    console.log("your new grade is: "+(grade +3));
  }
 
 }
 
 
  
}








 module.exports = {
     pro : processGrade
     
 }; 
 
 
