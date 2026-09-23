import { Page,Locator } from "@playwright/test";
import { checkout_done } from "../locator/checkout_complete_locator";

export class  check_done{
    private page:Page
    private back_home:Locator
    private pdf :Locator

    constructor(page:Page){
        this.page=page
        const locator=checkout_done(page)
        this.back_home= locator.back_home
        this.pdf=locator.pdf


    }
    async click_backhome(){
        await this.back_home.click()
    }
    async generate_pdf(){
        await this.pdf.click()
    }
}