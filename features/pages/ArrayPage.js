// features/pages/ArrayPage.js
const { expect } = require('@playwright/test');

class ArrayPage {
  constructor(page) {
    this.page = page;

    //  Array Page Locators
    this.topicsCoveredTitle    = page.locator('text=Topics Covered').first();
    this.arraysInPythonLink    = page.locator('a:has-text("Arrays in Python")').first();
    this.arraysUsingListLink   = page.locator('a:has-text("Arrays Using List")').first();
    this.basicOpsLink          = page.locator('a:has-text("Basic Operations in Lists")').first();
    this.applicationsLink      = page.locator('a:has-text("Applications of Array")').first();
    this.practiceQuestionsLink = page.locator('a:has-text("Practice Questions")').first();
    this.tryHereLink           = page.locator('a:has-text("Try here")').first();

    //  Practice Page Locators
    this.searchArrayLink    = page.locator('a:has-text("Search the Array"), a:has-text("Search the array")').first();
    this.maxConsecutiveLink = page.locator('a:has-text("Max Consecutive")').first();
    this.findEvenDigitsLink = page.locator('a:has-text("Find Numbers with Even"), a:has-text("Find numbers with even")').first();
    this.squaredArrayLink   = page.locator('a:has-text("Squares of a Sorted"), a:has-text("Sqares of a sorted")').first();

    //  Editor Locators
    this.codeMirrorEditor = page.locator('.CodeMirror').first();
    this.runButton        = page.locator('button:has-text("Run"), input[value="Run"], #run').first();
   // this.submitButton     = page.locator('button:has-text("Submit"), input[value="Submit"], #submit').first();
    this.submitButton = page.locator('button:has-text("Submit"), input[value="Submit"], #submit, input[type="submit"]').first();
    //  Sign Out
    this.signOutLink = page.locator('a[href="/logout"], a:has-text("Sign out")').first();
  }

  //  Navigation

  async clickArraysInPythonLink() {
    await this.arraysInPythonLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.arraysInPythonLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickArraysUsingListLink() {
    await this.arraysUsingListLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.arraysUsingListLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickBasicOpsLink() {
    await this.basicOpsLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.basicOpsLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickApplicationsLink() {
    await this.applicationsLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.applicationsLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickPracticeQuestionsLink() {
    await this.practiceQuestionsLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.practiceQuestionsLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickTryHereLink() {
    await this.tryHereLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.tryHereLink.click();
    
    await this.page.locator('.CodeMirror').waitFor({ state: 'visible', timeout: 15000 });
  }

  async hoverTryHereLink() {
    await this.tryHereLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.tryHereLink.hover();
  }

  async clickSearchArrayLink() {
    await this.searchArrayLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchArrayLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickMaxConsecutiveLink() {
    await this.maxConsecutiveLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.maxConsecutiveLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickFindEvenDigitsLink() {
    await this.findEvenDigitsLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.findEvenDigitsLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickSquaredArrayLink() {
    await this.squaredArrayLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.squaredArrayLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickBackArrow() {
    await this.page.goBack();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    console.log('Back arrow clicked — URL:', this.page.url());
  }

  async clickSignOut() {
    await this.signOutLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.signOutLink.click();
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  }

  //  Editor Actions

  async enterCodeAndRun(code) {
  
    await this.page.locator('.CodeMirror').waitFor({ state: 'visible', timeout: 15000 });
    await this.codeMirrorEditor.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.type(code);
    // Wait for Run button — most reliable for Firefox
    await this.page.locator('button:has-text("Run")').waitFor({ state: 'visible', timeout: 15000 });
    await this.runButton.click();
    await this.page.waitForTimeout(3000);
  }

  async enterCodeAndSubmit(code) {
    
    await this.page.locator('.CodeMirror').waitFor({ state: 'visible', timeout: 15000 });
    await this.codeMirrorEditor.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.type(code);
    // Wait for Submit button — most reliable for Firefox
    await this.page.locator('button:has-text("Submit")').waitFor({ state: 'visible', timeout: 15000 });
    await this.submitButton.click();
    await this.page.waitForTimeout(3000);
  }

  async clickRunWithoutData() {
    // Wait for Run button — most reliable for Firefox
    await this.page.locator('button:has-text("Run")').waitFor({ state: 'visible', timeout: 15000 });
    await this.runButton.click();
    await this.page.waitForTimeout(3000);
  }

  async clickSubmitWithoutData() {
    // Wait for Submit button — most reliable for Firefox
    await this.page.locator('button:has-text("Submit")').waitFor({ state: 'visible', timeout: 15000 });
    await this.submitButton.click();
    await this.page.waitForTimeout(3000);
  }

  //  Assertions

  async verifyOnArrayPage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('Array page URL:', url);
    expect(url).toContain('array');
  }

  async verifyArrayTitle(expectedTitle) {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain(expectedTitle);
  }

  async verifyTopicsCoveredVisible() {
    await expect(this.topicsCoveredTitle).toBeVisible();
  }

  async verifyLinkVisible(linkText) {
    const link = this.page.locator(`a:has-text("${linkText}")`).first();
    await expect(link).toBeVisible();
  }

  async verifyOnArraysInPythonPage() {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain('Arrays in Python');
  }

  async verifyOnArraysUsingListPage() {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain('Arrays Using List');
  }

  async verifyOnBasicOpsPage() {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain('Basic Operations in Lists');
  }

  async verifyOnApplicationsPage() {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain('Applications of Array');
  }

  async verifyOnPracticePage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url      = this.page.url();
    const bodyText = await this.page.locator('body').innerText();
    console.log('Practice/Question page URL:', url);
    console.log('Page text sample:', bodyText.substring(0, 100));
    const lowerBody = bodyText.toLowerCase();
    const lowerUrl  = url.toLowerCase();
    const isOnPage =
      lowerUrl.includes('question')          ||
      lowerUrl.includes('practice')          ||
      lowerBody.includes('question')         ||
      lowerBody.includes('practice')         ||
      lowerBody.includes('search the array') ||
      lowerBody.includes('max consecutive')  ||
      lowerBody.includes('find numbers')     ||
      lowerBody.includes('squares')          ||
      lowerBody.includes('given an integer');
    expect(isOnPage).toBe(true);
  }

  async verifySubTitleVisible(subTitle) {
    const el = this.page.locator(`text=${subTitle}`).first();
    await expect(el).toBeVisible();
  }

  async verifyTryHereLinkVisible() {
    await expect(this.tryHereLink).toBeVisible();
  }

  async verifyTryHereLinkHighlighted() {
    const isVisible = await this.tryHereLink.isVisible();
    expect(isVisible).toBe(true);
  }

  async verifyOnEditorPage() {
    
    await this.page.locator('.CodeMirror').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    expect(
      url.includes('editor') ||
      url.includes('try')    ||
      url.includes('code')
    ).toBe(true);
  }

  async verifyEditorErrorMessage() {
    await this.page.waitForTimeout(3000);
    const bodyText = await this.page.locator('body').innerText();
    const hasError =
      bodyText.includes('Error')       ||
      bodyText.includes('error')       ||
      bodyText.includes('SyntaxError') ||
      bodyText.includes('NameError');
    expect(hasError).toBe(true);
  }

  async verifyOutputContains(expectedOutput) {
    await this.page.waitForTimeout(3000);
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain(expectedOutput);
  }

  async verifyRunButtonClickable() {
    
    await this.page.locator('button:has-text("Run")').waitFor({ state: 'visible', timeout: 15000 });
    await expect(this.runButton).toBeEnabled();
  }

  async verifySubmitButtonClickable() {
    
    const submitLocator = this.page.locator(
    'button:has-text("Submit"), input[value="Submit"], #submit, input[type="submit"]'
  ).first();
  await submitLocator.waitFor({ state: 'visible', timeout: 30000 });
  await expect(submitLocator).toBeEnabled();
    
  }

  //  Back arrow verifications
  async verifyBackOnArraysInPythonPage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('After back arrow URL:', url);
    expect(url).toContain('arrays-in-python');
  }

  async verifyBackOnArraysUsingListPage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('After back arrow URL:', url);
    expect(url).toContain('arrays-using-list');
  }

  async verifyBackOnBasicOpsPage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('After back arrow URL:', url);
    expect(url).toContain('basic-operations');
  }

  async verifyBackOnApplicationsPage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('After back arrow URL:', url);
    expect(url).toContain('applications');
  }

  async verifyBackOnPracticePage() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const url = this.page.url();
    console.log('After back arrow URL:', url);
    expect(url).toContain('practice');
  }

  async verifySignedOut() {
    await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
    const bodyText = await this.page.locator('body').innerText();
    const isSignedOut =
      bodyText.includes('Logged out')  ||
      bodyText.includes('logged out')  ||
      bodyText.includes('successfully');
    expect(isSignedOut).toBe(true);
  }
}

module.exports = { ArrayPage };
