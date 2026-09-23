import { checkout } from "../locator/checkoutpage_locator";
import { Locator, Page } from "@playwright/test";
import { login_page } from "./login_page";
export class ct_item{
    private page:Page
    private firstname:Locator
    private lastname:Locator
    private zipcode:Locator
    private cancel:Locator
    private continue:Locator

    constructor(page:Page){
        this.page=page
        const locator = checkout(page)
        this.firstname=locator.firstname
        this.lastname=locator.lastname
        this.zipcode=locator.zipcode
        this.cancel=locator.cancel
        this.continue=locator.continue

    }
    async fill_firstname(firstname:string){
        await this.firstname.fill(firstname)

    }
    async fill_lastname(lastname:string){
        await this.lastname.fill(lastname)

    }
    async fill_zipcode(zipcode:string){
        await this.zipcode.fill(zipcode)

    }
    async click_cancel(){
        await this.cancel.click()

    }
    async click_continue(){
        await this.continue.click()
    }

}






  