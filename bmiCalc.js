function bmiCalculator (weight, height) {
    var BMI = weight / (height * height);
    if(BMI < 18.5){
        return(`Your BMI is ${BMI}, so you are underweight.`)
    }
    if(BMI > 18.5 && BMI < 24.9){
        return(`Your BMI is ${BMI}, so you have a normal weight.`)
    }
    if(BMI > 24.9){
        return(`Your BMI is ${BMI}, so you are overweight.`)
    }
}

console.log(bmiCalculator(98, 1.7272)); // 5 fit 8 == 1.7272