import {Page,Locator} from '@playwright/test'

export class LoginPage{
readonly page:Page;
readonly emailInput:Locator;
readonly password:Locator;
readonly loginBtn:Locator;

constructor(page:Page){
    this.page=page;
    this.emailInput=page.locator("#userEmail");
    this.password=page.locator("#userPassword");
    this.loginBtn=page.locator("#login");

}

async navigate(){
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
}

async login(email:string,password:string):Promise<void>{

    await this.emailInput.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
}
}
