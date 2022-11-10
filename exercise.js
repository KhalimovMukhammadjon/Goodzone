const prompt = require('prompt-sync')({sigint:true});



// Exercise 1
// name, deposit
 
// Client's Name 
// Amount of deposit 
// Interest rate 
// Amount after the interest has been applied 
// Thank you message 

// interestRate
// deposit: 15 000 000
// year : 2
// result = 15 000 000 *5% *2

function calculator (clientName, deposit, interestRate, year){


    let all = []

    clientName = prompt("Enter  your name:")

    deposit = prompt("Amount of deposit:")

    interestRate = prompt("InterestRate:")

    year = prompt("Year:")
    // console.log(deposit)

    let result = (deposit / 100 * interestRate)*year
    console.log("Amount after the interest has been applied:",result)

    all.push(clientName,
        deposit,
        interestRate,
        year)

    console.log("Thank you")
    return all
    

}
console.log(calculator())




// Exercise 2

function calculator(num1,num2,operator){

    num1 = prompt("Enter your num1:")
    // console.log(num1)

    num2 = prompt("Enter your num2:")

    operator = prompt("Enter -,+,*,/,%,^:")
    // console.log(operator)
    let result 


    switch (operator) {
        case "+":
            result = num1+num2
            console.log(result)
            break
        case "-":
            result = num1-num2
            console.log(result)
            break
        case "*":
            result = num1*num2
            console.log(result)
            break
        case "/":
            result = num1/num2
            console.log(result)
            break
        case "%":
            result = num1%num2
            console.log(result)
            break
        case "^":
            result = num1^num2
            console.log(result)
            break
        default:
            console.log("Try again")
    }

}
calculator()

// Exercise 3

// usd > uzs = 11 134,23 сум

function exchangeRate(rate = 11134.23){


    console.log("1.USD\n2.UZS\n")
    let menu
    console.log("Select:")
    menu = prompt()

    switch (menu){
        case "1":
            let usd = prompt("Enter usd:")
            console.log((Math.floor(usd*rate)),"SUM")
            break
        case "2":   
            let uzs = prompt("Enter uzs:")
            // console.log(Math.floor(uzs/rate),"USD")
            console.log(uzs/rate,"USD")

            break
        default:
            console.log("Error")
    }
// const rate = 11200
// Dollar to Som : 100$ => 100 * rate
// Som to Dollar: 1000000 / rate
}
exchangeRate()







// new

// exercise 1

function games(age) {
    // let age = int
    
    if(age<21){
         console.log("Sorry, you are too young for the Cruel Games")
    }
    else if(age>21 && age<=35){
         console.log("Let`s rock")
    }

    else{
          console.log("You’re too old, grandpa")
    }

    return age
}
games(36)



// Exercise 2

// random number : 6
// number :5

function number(myNumber){

    let number = Math.floor(Math.random()*10)
    console.log(number)

    if(number==myNumber){
        console.log("You are right!!!")
        return "Successfully"
    }

    else if(number<myNumber){
        console.log("My number is more")
    }

    else if(number>myNumber){
        console.log("My number is less")
    }

    else{
        console.log("Error")
    }


}
number(5)


// Exercise 3

// Yil raqami 4 ga bo’linsa va 100 ga bo’linmasa

function leapYear(currentYear=1900){

    let kabissa = currentYear/400
    let result = kabissa%2

    let a = currentYear%2
    let b = currentYear/100

    // let result = currentYear%2
    // let kabissa = result/400

    // let result = (currentYear/400)
    // // 2000/400 = 5

    if(result==0){
        console.log("Bu kabissa yili")
    }
    else if(a==0 && b==0 ){
        console.log("Bu kabissa yili 1")
    }
    else{
        console.log("Kabissa yili emas")
    }

    console.log(currentYear)
    console.log(result)
    console.log(kabissa)
    console.log(a)


}

leapYear()
