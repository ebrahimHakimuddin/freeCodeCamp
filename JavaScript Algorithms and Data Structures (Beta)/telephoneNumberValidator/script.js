function checkNumber(){
    const pattern = /^(1\s?)?(?:\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$|^(1\s?)?\d{10}$|^(1\s?)?\d{3}-\d{3}-\d{4}$/;
    ;
    const number = document.getElementById("user-input").value;
    if (number){
        if (pattern.test(number)){
            document.getElementById("results-div").innerHTML = `Valid US number: ${number}`;
        }else{
            document.getElementById("results-div").innerHTML = `Invalid US number: ${number}`;
        }
    }else{
        alert("Please provide a phone number")
    }
}
function clearNumber(){
    document.getElementById("results-div").textContent = "" ;
}