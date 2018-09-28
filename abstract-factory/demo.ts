import * as readline from 'readline';
import Application from './src/app/Application';
import { ThemeFactory, LightTheme, DarkTheme } from './src/factories';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let application: Application;
let factory: ThemeFactory;

rl.question('Light or dark theme? [l/d] ', (answer) => {
  switch (answer.toLowerCase()) {
    case 'l':
      factory = new LightTheme();
      break;
    case 'd':
      factory = new DarkTheme();
      break;
    default:
      console.log('Invalid answer!');
  }
  application = new Application(factory);

  console.log(' ');
  console.log(application.render());

  rl.close();
});
