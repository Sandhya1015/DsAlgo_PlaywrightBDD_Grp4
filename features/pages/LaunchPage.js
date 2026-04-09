const {expect}=require('@playwright/test');
class LaunchPage{
    constructor(page){
        this.page=page;

        // Locators
    this.getStartedButton = page.locator('text=Get Started');
    this.heading          = page.locator('text=Preparing for the Interviews');
    this.subText          = page.locator('text=You are at the right place');
    this.content          = page.locator('.content');
    }

 //Methods
 //  Background step User navigates to dsAlgo portal
 async navToDsAlgo()
 {
    await this.page.goto ('https://dsportalapp.herokuapp.com/')
 }
// Scenario 1 
async verifyDsAlgo()  
{
    await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/');
}
//  Scenario 2 
async verifyButtonVisible()
{
    await expect(this.getStartedButton).toBeVisible();
}
// Scenario 3
async verifyButtonEnabled()
{
    await expect(this.getStartedButton).toBeEnabled();
}
//  Scenario 4
async verifyButtonText() 
{
    await expect(this.getStartedButton).toHaveText('Get Started');
}
 // Scenario 5  
async verifyPageTitle() 
{ await expect(this.page).toHaveTitle('Numpy Ninja');}
//  Scenario 6  
async verifyHeadingText() 
{
    await expect(this.heading).toHaveText('Preparing for the Interviews');
}
// Scenario 7
async verifyHeadingSubText() 
{
    await expect(this.subText).toHaveText('You are at the right place');
}
 //  Scenario 8 When     
async clickGetStarted() 
{
    await this.getStartedButton.click();
}
 //  Scenario 9 Then  
async verifyHomePage()
{
    await expect(this.page).toHaveURL ('https://dsportalapp.herokuapp.com/home');

}    
  
}

module.exports = { LaunchPage };