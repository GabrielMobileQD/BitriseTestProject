const wd = require('wd');

const PORT = 4723;

const config = {
  platformName: 'Android',
  deviceName: 'emulator',
  app: 'android/app/build/outputs/apk/release/app-release.apk', // relative to root of project
  appPackage: 'com.bitrisetestproject',
  appActivity: 'com.bitrisetestproject.MainActivity',
  automationName: 'uiautomator2',
};
// const config = {
//   platformName: 'iOS',
//   deviceName: 'iPhone SE (2nd generation)',
//   platformVersion: '13.5',
//   app:
//     'ios/build/Build/Products/Release-iphonesimulator/BitriseTestProject.app', // relative to root of project
// };
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(20000);
}); // Sometime for the app to load

afterAll(async () => {
  await driver.quit();
});
test('my first appium test', async () => {
  expect(await driver.hasElementByAccessibilityId('welcome-message')).toBe(
    true,
  );
});

// Given('I am in app home page', {timeout: 30000}, async () => {
//   let isWelcomeMessage = await driver.hasElementByAccessibilityId(
//     'welcome-message',
//   );
//   assert.equal(isWelcomeMessage, true);
// });

// When('I click on "Pressione" button', async () => {
//   let loginButton = await driver.elementByAccessibilityId('press-button');
//   loginButton.click();
// });

// Then('I see the alert', {timeout: 2000}, async () => {
//   await driver.setImplicitWaitTimeout(1500);
//   let isAlert = await driver.hasElementByXPath(
//     "//*[@text='Você apertou o botão']",
//   );
//   assert.equal(isAlert, true);
// });
