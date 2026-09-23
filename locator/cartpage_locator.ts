import { Page } from "@playwright/test";
 export const cp_locator = (page:Page)=>({
    remove_backpack : page.locator("#remove-sauce-labs-backpack"),
    remove_light: page.locator("#remove-sauce-labs-bike-light"),
    remove_thsirt1 :page.locator("#remove-sauce-labs-bolt-t-shirt"),
    remove_jacket:page.locator("#remove-sauce-labs-fleece-jacket"),
    remove_onesie:page.locator("#remove-sauce-labs-onesie"),
    remove_tshirt2:page.locator("#remove-test.allthethings()-t-shirt-(red)"),

    continue_shopping_button: page.locator(".continue-shopping"),
    checkout_button: page.locator("#checkout")

 })