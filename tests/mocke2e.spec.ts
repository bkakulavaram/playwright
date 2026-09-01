import{test,expect} from '@playwright/test'

test.describe('mocke2e',()=>{
    

    test('select radio',async({page})=>{
               await  page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        const radiobtn=page.locator("input[value='radio1']");
        await radiobtn.click();
        await expect(radiobtn).toBeChecked();
    })

})