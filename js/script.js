function submitDate() {
    var bday;
    var name;
    var bdayArray;
    bday = document.getElementById("dob").value;
    console.log("bday is"+bday);
    var gender= document.querySelector('input[name=gender]:checked').value;
 
    bdayArray = bday.split('-');

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
                        
            var yy;
            yy = year.substring(2)
                      
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
      
    var dayName= days[dayOfBirth];
        
        if(gender === "M"){
            console.log ("we are in gender");
    const malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     
            name = malenames[dayOfBirth];
            alert("Akan name is "+name); 
           
        }else if(gender === "F"){
            const femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            name = femalenames[dayOfBirth];
            alert("Akan name is "+name); 
            ;
        }
        }
    }
}

   