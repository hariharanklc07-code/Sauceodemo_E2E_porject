import {Page} from "@playwright/test";

export const inventorypage_locators = (page:Page)=>({
    backpack:page.locator("#add-to-cart-sauce-labs-backpack"),
    light:page.locator("#add-to-cart-sauce-labs-bike-light"),
    tshirt1:page.locator("#add-to-cart-sauce-labs-bolt-t-shirt"),
    jacket:page.locator("#add-to-cart-sauce-labs-fleece-jacket"),
    onesie:page.locator("#add-to-cart-sauce-labs-onesie"),
    tshirt2:page.locator("#add-to-cart-test.allthethings()-t-shirt-(red)"),

    checkout_btn:page.locator(".shopping_cart_link")

});