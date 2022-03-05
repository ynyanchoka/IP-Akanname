var form  = document.getElementsByClassName('fill-form')

validDate= (birthday)=>{
  if(!birthday || birthday.split('-').length !== 3){
    alert("Invalid Date!")
    return false
  }
  return true
}


form.addEventListener('submit', function (e){
  e.preventDefault();

 
  var birthday = form.birthday.value

  var gender = form.gender.value


  if(validDate(birthday)){ 

    var splitted_date = birthday.split('-') 

    var akan_names = {
      male:{   sunday:"Kwasi", monday:"Kwadwo", tuesday:"Kwabena", wednesday:"Kwaku", thursday:"Yaw",friday:"Kofi",  saturday:"Kwame",
      },
      female:{ sunday:"Akosua", monday:"Adwoa", tuesday:"Abenaa", wednesday:"Akua", thursday:"Yaa",friday:"Afua", saturday:"Ama",
      }
    }

    var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday",]

    
    var valid_date = new Date(splitted_date[0],splitted_date[1],splitted_date[2])
    var weekday_index = valid_date.getDay()
    var weekday_name = weekdays[weekday_index]

   
    var possible_names = akan_names[gender]
    var name = possible_names[weekday_name] 

    var elem = document.getElementById('name')
    elem.innerHTML = name
  }else{ 
    return false
  }

})
