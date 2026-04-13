const { expect } = require('@playwright/test');

class QueuePage {
  constructor(page) {
    this.page = page;

    this.queueGetStartedBtn = page.locator('a[href="queue"]:has-text("Get Started")');
    this.queueTitleHeading = page.getByRole('heading', { name: 'Queue' });
    this.queueTitleParagraph = page.locator('p.bg-secondary.text-white').filter({ hasText: /^Queue$/ });

    this.tryHereBtn = page.getByRole('link', { name: 'Try here>>>' });

    this.editor = page.locator('.CodeMirror');
    this.runBtn = page.getByRole('button', { name: 'Run' });

    this.output = page.locator('#output');
  }

  async clickQueueGetStarted() {
    await this.queueGetStartedBtn.click();
  }

  async verifyQueuePage() {
    await Promise.race([
      expect(this.queueTitleHeading).toBeVisible(),
      expect(this.queueTitleParagraph).toBeVisible()
    ]);
  }

  async navigateToQueuePage() {
    await this.clickQueueGetStarted();
    await this.verifyQueuePage();
  }

  async clickImplementationLink(name) {
    await this.page.getByRole('link', { name }).click();
  }

  async verifyImplementationPage() {
    await expect(this.tryHereBtn).toBeVisible();
  }

  async navigateToImplementationPage(name) {
    await this.navigateToQueuePage();
    await this.clickImplementationLink(name);
    await this.verifyImplementationPage();
  }

  async verifyPracticeQuestionsPage() {
    await expect(this.page).toHaveURL(/practice/);
  }

  async clickTryHere() {
    await this.tryHereBtn.click();
  }

  async verifyTryEditorPage() {
    await expect(this.runBtn).toBeVisible();
  }

  async navigateToTryEditor(name) {
    await this.navigateToImplementationPage(name);
    await this.clickTryHere();
    await this.verifyTryEditorPage();
  }

  
  async runCode(code,type) {
    await this.editor.click({ force: true });

    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');

    if (code) {
      await this.page.keyboard.type(code, { delay: 50 });
    }
    if (type === 'invalid' || type === 'empty') {
    this.page.once('dialog', async (dialog) => {
      console.log("Dialog message:", dialog.message());
      await dialog.accept();
    });
   }
    await this.runBtn.click();
  }

  async verifyOutput(expected) {
    await expect(this.output).toContainText(expected, { timeout: 5000 });
  }

   
}

module.exports = QueuePage;