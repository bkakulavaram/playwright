import {Page,Locator} from '@playwright/test'

export class DashboardPage{

    readonly page:Page;
    readonly products:Locator;
    readonly cartBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.products = page.locator('.card-body');
//this.products= page.locator('div.container').locator('div').nth(1)
        this.cartBtn= page.locator('i.fa.fa-shopping-cart').first();}

    async addtocart(product:string){

 const productCard = this.products.filter({
            hasText: product
        });

        const addToCartBtn = productCard.getByRole(
            'button',
            { name:" Add To Cart"}
        );

        await addToCartBtn.click();
            await this.cartBtn.click();

    }

    }

