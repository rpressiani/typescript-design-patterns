import Application from '../../src/app/Application';
import { ThemeFactory, LightTheme, DarkTheme } from '../../src/factories';

describe('Application', () => {

  let factory: ThemeFactory;
  let application: Application;

  it('LightTheme is created correctly', () => {
    factory = new LightTheme();
    application = new Application(factory);
    expect(42).toBe(42);

    expect(application.render()).toBe('I\'m a LIGHT toolbar!\n{50, 1, Links[Home,Contacts]}\nI\'m a LIGHT dialog!\n{900, backgroundColor: "WHITE", textColor: "BLACK"}');
  });

  it('DarkTheme is created correctly', () => {
    factory = new DarkTheme();
    application = new Application(factory);

    expect(application.render()).toBe('I\'m a DARK toolbar!\n{50, 0, Links[Home,Contacts]}\nI\'m a DARK dialog!\n{900, backgroundColor: "BLUE", textColor: "WHITE"}');
  });

});
