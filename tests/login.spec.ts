import {test,expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'

import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage' 
import { products } from '../test-data/products';


test('valid login',async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.navigate();
    const productName = products.adidas;

    // console.log('Current URL:', page.url());

   // await page.waitForTimeout(2000);
   await loginpage.login(process.env.Test_email!,process.env.Test_password!)
   console.log("test")

    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");

    const dashboardpage=new DashboardPage(page);
await dashboardpage.addtocart(productName);
const cartpage=new CartPage(page);
const productlabel= cartpage.verifyproducts(productName);
await expect(productlabel).toHaveText(productName);

})

