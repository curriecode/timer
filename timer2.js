const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const actions = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me");
    process.exit();
  }
  if (key === 'b') {
    console.log("Beep Boop");
    process.stdout.write('\x07');
  }
  for (let item of numArray) {
    if (key === item) {
      setTimeout(function () {
        console.log("Timer has finished");
        process.stdout.write('\x07');
      }, item * 1000);
      console.log('Setting timer for ' + item + ' seconds');
    }
  }

};
stdin.on('data', actions);