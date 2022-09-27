
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What is your name? Nicknames are also acceptable. ', (answer) => {
    console.log(`Thank you for providing your username: ${answer}`);

    rl.question('What is your favorite activity? ', (answer) => {
      console.log(`Thank you for providing your favorite activity! ${answer}`);

      rl.question('What do you listen to while doing that? ', (answer) => {
        console.log(`Thank you for your choice of music! ${answer}`);
        
        rl.question('Which meal is your favorite (eg: dinner, brunch etc) ', (answer) => {
          console.log(`Thank you for providing your favorite meal! ${answer}`);

          rl.question("What's your favorite thing to eat for that meal? ", (answer) => {
            console.log(`Thank you for providing your favourite thing to eat! ${answer}`);

            rl.question('Which sport is your absolute favorite? ', (answer) => {
              console.log(`Thank you for providing your favorite sport! ${answer}`);

              rl.question('What is your superpower? in a few words, tell us what you are amazing at! ', (answer) => {
                console.log(`Thank you for providing your superpower! ${answer}`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });


});


