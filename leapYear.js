function leapYearCalc(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 ===0){
                return("Leap Year.")
            }else{
                return("Not a leap Year.")
            }
        }else{
            return ("Leap Year.")
        }
    }else{
        return("Not a leap year.")
    }
}
console.log(leapYearCalc(2100)); // not a leap year
console.log(leapYearCalc(1800)); // not a leap year
console.log(leapYearCalc(2024)); // leap year !!
console.log(leapYearCalc(1989)); // leap year !!