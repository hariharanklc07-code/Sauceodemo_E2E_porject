import { Page ,Locator } from "@playwright/test";
import { inventorypage_locators } from "../locator/inventorypage_locator";


export class inventory_page{
    private page:Page
    private backpack:Locator
    private light : Locator
    private tshirt1: Locator
    private jacket :Locator
    private onesie:Locator
    private tshirt2:Locator
     private checkout_btn:Locator
    constructor(page:Page){

        this.page=page
        const locators = inventorypage_locators(page)
        this.backpack= locators.backpack
        this.light=locators.light
        this.tshirt1 =locators.tshirt1
        this.jacket=locators.jacket
        this.onesie=locators.onesie
        this.tshirt2=locators.tshirt2
        this.checkout_btn=locators.checkout_btn
    }

    async select_backpack(){
        await this.backpack.click()
    }
    async select_light(){
       await this.light.click()

    }
    async select_tshirt1(){
        await this.tshirt1.click()
    }
    async select_jacket(){
        await this.jacket.click()
    }
    async select_onsie(){
    await this.onesie.click()
    }
    async select_tshirt2(){
    await this.tshirt2.click()

    }
    async select_checkout(){
     await this.checkout_btn.click()
    }
}


