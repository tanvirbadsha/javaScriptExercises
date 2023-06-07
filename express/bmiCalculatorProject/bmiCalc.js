const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/bmicalculator', (req,res)=>{
    res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/bmicalculator', (req,res)=>{
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const result = bmiCalculator(weight, height);
    res.send(`${result}`);
});


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

//console.log(bmiCalculator(98, 1.7272)); // 5 fit 8 == 1.7272

const port = 3000;
app.listen(port, ()=> console.log(`server is listening to port ${port}`));