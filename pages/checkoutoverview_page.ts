import { Locator, Page } from "@playwright/test";
import { checkout_overview } from "../locator/checkoutoverview_locator";


export class checkoutoverview{
    private page:Page
    private cancel_1:Locator
    private finish:Locator
    constructor(page:Page){
        this.page=page
        const locator= checkout_overview(page)
        this.cancel_1=locator.cancel_1
        this.finish=locator.finish
    }

    async click_cancel_1(){
        await this.cancel_1.click()

    }
    async click_finish(){
     await this.finish.click()
    }

}