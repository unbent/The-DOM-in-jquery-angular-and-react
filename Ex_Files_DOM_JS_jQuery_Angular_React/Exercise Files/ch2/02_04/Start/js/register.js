window.onload = function() {
    var count = 0;
    var inputElements = document.getElementsByTagName("input");

    for (const element of inputElements) {
        console.log(`TYPE: ${element.type}`);

        if (element.type == "text") {
            count++;
            element.style.border = "2px solid red";
            element.style.background = "yellow";
        }
    }

    console.log(`TOTAL TEXT TYPE: ${count}`);
}

function validateForm(){
    var error = false;
    var firstName = document.getElementsByName("fname");
    
    if(firstName[0].value == ""){
        error = true;
        firstName[0].style.border = "2px solid red";
        firstName[0].style.background = "yellow";
        firstName[0].focus()
    }
    
    if(error){
        console.log("Error detected.");
        return false;
    }else{
        return true;
    }
        
}