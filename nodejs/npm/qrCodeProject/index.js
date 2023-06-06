import qr from 'qr-image';
import fs from 'fs';
import inquirer from 'inquirer';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Please type your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("userInput.txt", url, (err)=> {
        if (err) throw err;
        console.log("the url has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else went wrong
      console.log("there is not any error in typping. Something else is fucking us up.")
    }
  });

 // qr code generator 

 
 //var svg_string = qr.imageSync('I love QR!', { type: 'svg' });