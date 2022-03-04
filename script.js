var bday;
var name;

//change this line and assign this variable to the value you'll get from the user's input(DOB input)
bday = window.prompt("When is your birthday (YYYY-MM-DD)?","");


var bdayArray = bday.split('-');

//change this line and assign this variable to the value you'll get from the user's input(Gender drop down)-should be either male or female
var gender="M";
 
 
//validation to check if the date input is in the correct format
if(bdayArray.length !== 3){
     alert("Please enter a valid date in the specified format");
     
}else{
    if(((bdayArray[1])<=0 )|| ((bdayArray[1])>12)){
        alert("Please enter a valid month");    
       
    }else if(((bdayArray[2])<=0 )|| ((bdayArray[1])>31)){
        alert("Please enter a valid day");    
       
       //Proceed if the date input is correct
    }else{
        var year = bdayArray[0];
        var cc;
        cc = year.substring(0,2);
        document.write("getcc is "+cc)
        
        var yy;
        yy = year.substring(2)
        document.write("getyy is "+yy)
        
        var mm;
        mm = bdayArray[1];
        var dd;
        dd = bdayArray[2];
   

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];   
  
var timeofBirth = new Date(            
        parseInt(bdayArray[0]),
        parseInt(bdayArray[1]) - 1, //month starts from 0
        parseInt(bdayArray[2])
        );        
var dayOfBirth = timeofBirth.getDay();  
    document.write("dayOfBirth is "+dayOfBirth);

var dayName= days[dayOfBirth];
    document.write("You were born on "+dayName);
       
       if(gender === "M"){
const malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    console.log("Current day is "+dayOfBirth)
        name = malenames[dayOfBirth];
        console.log("name is "+name);
        document.write("Name is "+name);
        
       }else if(gender === "F"){
        const femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        name = femalenames[dayOfBirth];
          document.write("Name is "+name);
       }
    }
}
function submitDate() {
    var dob = document.getElementById("dob").value;
    var gender= document.querySelector('input[name=gender]:checked').value;
console.log("Akan name is" +name );
    
}