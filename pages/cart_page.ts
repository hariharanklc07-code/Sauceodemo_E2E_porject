import {cp_locator } from "../locator/cartpage_locator"

import { Page,Locator } from "@playwright/test"


export class cart_page{
    private page:Page
    private remove_backpack:Locator
    private remove_light : Locator
    private remove_tshirt1: Locator
    private remove_jacket :Locator
    private remove_onesie:Locator
    private remove_tshirt2:Locator
    private continue_shopping_button:Locator
     private checkout_btn:Locator

     constructor (page:Page){
        this.page=page
        const locator= cp_locator(page)
        this.remove_backpack=locator.remove_backpack
        this.remove_light=locator.remove_light
        this.remove_tshirt1=locator.remove_thsirt1
        this.remove_jacket=locator.remove_jacket
        this.remove_onesie=locator.remove_onesie
        this.remove_tshirt2=locator.remove_tshirt2
        this.continue_shopping_button=locator.continue_shopping_button
        this.checkout_btn=locator.checkout_button

     }
     async rem_backpack(){
        await this.remove_backpack.click()

     }
      async rem_light(){
        await this.remove_light.click()
        
     }
      async rem_tshirt1(){
        await this.remove_tshirt1.click()
        
     }
      async rem_jacket(){
        await this.remove_jacket.click()
        
     }
      async rem_onesie(){
        await this.remove_onesie.click()
        
     }
      async rem_tshirt2(){
        await this.remove_tshirt2.click()
        
     }
      async s_button(){
        await this.continue_shopping_button.click()
        
     }
      async ch_out(){
        await this.checkout_btn.click()
        
     }
}