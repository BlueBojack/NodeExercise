const figlet = require('figlet');

function generateAsciiArt(text, callback) {

  figlet(text, function (err, data) {
    if (err) {
      console.log('Qualcosa è andato storto...');
      console.dir(err);
      return;
    }

    callback(data);
  });
}

generateAsciiArt('Hello, World!', function (asciiArt) {
  console.log(asciiArt);
});
