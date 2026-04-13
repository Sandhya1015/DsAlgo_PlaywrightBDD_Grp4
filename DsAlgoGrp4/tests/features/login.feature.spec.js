// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Login using valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the application', null, { page }); 
    await When('user clicks on sign in link', null, { page }); 
    await And('user enters "valid" credentials', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should login successfully', null, { page }); 
  });

  test('Login using invalid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the application', null, { page }); 
    await When('user clicks on sign in link', null, { page }); 
    await And('user enters "invalid" credentials', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should see an error message', null, { page }); 
  });

  test('Login with valid username and invalid password', async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the application', null, { page }); 
    await When('user clicks on sign in link', null, { page }); 
    await And('user enters "validUserInvalidPassword" credentials', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should see an error message', null, { page }); 
  });

  test('Login with invalid username and valid password', async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the application', null, { page }); 
    await When('user clicks on sign in link', null, { page }); 
    await And('user enters "invalidUserValidPassword" credentials', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should see an error message', null, { page }); 
  });

  test('Login with empty credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user launches the application', null, { page }); 
    await When('user clicks on sign in link', null, { page }); 
    await And('user enters "empty" credentials', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should see validation messages for required fields', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user launches the application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When user clicks on sign in link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And user enters \"valid\" credentials","stepMatchArguments":[{"group":{"start":12,"value":"\"valid\"","children":[{"start":13,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user should login successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user launches the application","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When user clicks on sign in link","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user enters \"invalid\" credentials","stepMatchArguments":[{"group":{"start":12,"value":"\"invalid\"","children":[{"start":13,"value":"invalid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given user launches the application","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user clicks on sign in link","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And user enters \"validUserInvalidPassword\" credentials","stepMatchArguments":[{"group":{"start":12,"value":"\"validUserInvalidPassword\"","children":[{"start":13,"value":"validUserInvalidPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user launches the application","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user clicks on sign in link","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And user enters \"invalidUserValidPassword\" credentials","stepMatchArguments":[{"group":{"start":12,"value":"\"invalidUserValidPassword\"","children":[{"start":13,"value":"invalidUserValidPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given user launches the application","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user clicks on sign in link","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And user enters \"empty\" credentials","stepMatchArguments":[{"group":{"start":12,"value":"\"empty\"","children":[{"start":13,"value":"empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then user should see validation messages for required fields","stepMatchArguments":[]}]},
]; // bdd-data-end