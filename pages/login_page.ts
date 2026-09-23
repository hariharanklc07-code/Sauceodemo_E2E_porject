import { Page, Locator} from "@playwright/test";

import { login_locator } from "../locator/loginpage_locator";

export class login_page{
    private page:Page
    private username:Locator
    private password : Locator
    private loginbutton : Locator

    constructor(page:Page){
        this.page=page
        const locators =login_locator(page)
        this.username =locators.username;
        this.password = locators.password;
        this.loginbutton=locators.loginbutton;

    }
    async enterusername(username:string){
     await this.username.fill(username)

     }
    async enterpasswrod(password:string){
       await await  this.password.fill(password)
    }
    async click()
    {
    await this.loginbutton.click()
    }
    
}

