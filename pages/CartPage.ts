import {Page,Locator} from '@playwright/test'

export class CartPage{
    readonly page:Page;
    readonly productcards:Locator;

    constructor(page:Page){
        this.page=page;
        this.productcards=page.locator(".ng-star-inserted");
    }

     getProduct(product:string):Locator{
        const productlabel=this.productcards.getByRole('heading', { name: product })
        return productlabel;
    }
}