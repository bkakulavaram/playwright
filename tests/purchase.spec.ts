import {test,expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'

import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage' 
import { products } from '../test-data/products';


test('valid login',async({page})=>{

    const loginpage=new LoginPage(page);
    const dashboardpage=new DashboardPage(page);
    const cartpage=new CartPage(page);

    const productName = products.adidas;

    await loginpage.navigate();

   await loginpage.login(process.env.Test_email!,process.env.Test_password!)
   console.log("test")

await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");

await dashboardpage.addProductToCart(productName);
const productlabel= cartpage.getProduct(productName);
await expect(productlabel).toHaveText(productName);
console.log("testing changes")

})

