function handleClick() {
    const number = document.getElementById('number').value
    if (number === ""){
        document.getElementById('output').innerHTML = 'Please enter a valid number'
    }else if(number <= 0){
        document.getElementById('output').innerHTML = "Please enter a number greater than or equal to 1"
    }else if(number > 3999){
        document.getElementById('output').innerHTML = "Please enter a number less than or equal to 3999"
    }else{
        convertRoman(number)
    }
}
function convertRoman(number){
    const roman = []
    while (number > 0){
        if( number >= 1000){
            roman.push("M")
            number -= 1000
        }else if (number >= 900){
            roman.push("CM")
            number -= 900
        }else if (number >= 500){
            roman.push("D")
            number -= 500
        }else if (number >= 400){
            roman.push("CD")
            number -= 400
        }else if (number >= 100){
            roman.push("C")
            number -= 100
        }else if (number >= 90){
            roman.push("XC")
            number -= 90
        }else if (number >= 50){
            roman.push("L")
            number -= 50
        }else if (number >= 40){
            roman.push("XL")
            number -= 40
        }else if (number >= 10){    
            roman.push("X")
            number -= 10    
        }else if (number >= 9){
            roman.push("IX")    
            number -= 9    
        }else if (number >= 5){
            roman.push("V")
            number -= 5
        }else if (number >= 4){
            roman.push("IV")
            number -= 4
        }else if (number >= 1){
            roman.push("I")
            number -= 1
        }
    }        
    // console.log(roman.join(""))
    document.getElementById('output').innerHTML = roman.join("")
}