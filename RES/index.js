function Btn() {
    var Fname = document.getElementById("Fname").value
    var middle = document.getElementById("middle").value
    var Surname = document.getElementById("Surname").value
    var Email = document.getElementById("Email").value
    var DofB = document.getElementById("DofB").value
    var Month = document.getElementById("Month").value
    var Year = document.getElementById("Year").value
    var mobile = document.getElementById("mobile").value
    var digit = document.getElementById("digit").value
    var combine = mobile + digit 
    var Address = document.getElementById("Address").value
    var gender = document.getElementById("gender").value
    var City = document.getElementById("City").value
    var Country = document.getElementById("Country").value
    var University = document.getElementById("University").value
    var Faculty = document.getElementById("Faculty").value
    // var Age = document.getElementById("Age").value
    var from = document.getElementById("from").value
    var to = document.getElementById("to").value
    var studentNo = document.getElementById("studentNo").value
    var Qualification = document.getElementById("Qualification").value
    var from2= document.getElementById("from2").value
    var to2 = document.getElementById("to2").value
    var studentNo2 = document.getElementById("studentNo2").value
    var Qualification2 = document.getElementById("Qualification2").value
    var University2 = document.getElementById("University2").value
    var Faculty2 = document.getElementById("Faculty2").value
   
   
    var details = {
        Fname: Fname,
        middle: middle,
        Surname: Surname,
        Email: Email,
        DofB: DofB,
        Month: Month,
        Year: Year,
        mobile: combine,
        Address: Address,
        gender: gender,
        City: City,
        Country: Country,
        University: University,
        Faculty: Faculty,
        Age: Age2,
        Employment: Number1,
        from : from,
        to:to,
        studentNo : studentNo,
        Qualification: Qualification,
        from2 : from2,
        to2:to2,
        studentNo2 : studentNo2,
        Qualification2: Qualification2,
        University2:University2,
        Faculty2:Faculty2,
        Complete1:Complete1,
        complete2:complete2,
        Age:Age2



    }
    const url = "https://formspree.io/f/mleqgddq"
    let send = JSON.stringify(details)
    
    fetch(url, {method:"POST", body:send, headers:{"Content-Type" : "application/json"}}).catch(function(error){console.log(error)})
    
    
      console.log(details)  
    }


var Number1,Age2,Complete1,complete2

function Radio(value) {
    Number1 = value

}


    function Radio1(value){ 
        Age2 = value

    }
    function Radio2(value){ 
        Complete1 = value

    }
    function Radio3(value){ 
        complete2 = value

    }



    // const Btn= function(){
    //     let Btn = "Number1: ${Number1}\n Number2:${Number2} "  
    // console.log(Btn)
    // }
