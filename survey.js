const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('Whats your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, ${name} loves ${food} for ${meal}, ${sport} and amazing at ${superpower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});