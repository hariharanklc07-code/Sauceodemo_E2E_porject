import { test, expect } from "@playwright/test";
import {Page} from "@playwright/test";
import { login_locator} from "../locator/loginpage_locator"
import {inventorypage_locators} from "../locator/inventorypage_locator"
import {logipage_credentials} from "../test_data/sauceodemo_testdata.json"
import { login_page } from "../pages/login_page";
import { inventory_page } from "../pages/inventory_page";
import {cart_page} from "../pages/cart_page"
import { ct_item } from "../pages/checkout_page";
import { checkout_overview } from "../locator/checkoutoverview_locator";
import {checkout_credential} from "../test_data/sauceodemo_testdata.json"
import {checkoutoverview} from "../pages/checkoutoverview_page"
import { check_done } from "../pages/checkout_complete_page";


test ('login_test', async({page})=>{
    const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()

})

test ("sc_001: Adding backpack ", async({page}) =>{
     const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()

    const inv=new inventory_page(page)
    await inv.select_backpack()
    await inv.select_checkout()

    const car=new cart_page(page)
    await car.ch_out()

    const ovr =new ct_item(page)
    await ovr.fill_firstname(checkout_credential.firstname)
    await ovr.fill_lastname(checkout_credential.lastname)
    await ovr.fill_zipcode(checkout_credential.zipcode)
    await ovr.click_continue()

    const m =new checkoutoverview(page)
    await m.click_finish()

    const c=new check_done(page)
    await c.generate_pdf()

})


test ("sc_002: select light",async ({page})=>{
     const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()


    const inv=new inventory_page(page)
    await inv.select_light()
    

    const car=new inventory_page(page)
    await car.select_checkout()

    const ca=new cart_page(page)
    await ca.ch_out()
       

    const ovr =new ct_item(page)
    await ovr.fill_firstname(checkout_credential.firstname)
    await ovr.fill_lastname(checkout_credential.lastname)
    await ovr.fill_zipcode(checkout_credential.zipcode)
    await ovr.click_continue()

    const m =new checkoutoverview(page)
    await m.click_finish()

    const c=new check_done(page)
    await c.generate_pdf()

})


test ("sc_003: adding tshirt ",async ({page})=>{
     const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()


    const inv=new inventory_page(page)
    await inv.select_tshirt1()
    

    const car=new inventory_page(page)
    await car.select_checkout()

    const ca=new cart_page(page)
    await ca.ch_out()
       

    const ovr =new ct_item(page)
    await ovr.fill_firstname(checkout_credential.firstname)
    await ovr.fill_lastname(checkout_credential.lastname)
    await ovr.fill_zipcode(checkout_credential.zipcode)
    await ovr.click_continue()

    const m =new checkoutoverview(page)
    await m.click_finish()

    const c=new check_done(page)
    await c.generate_pdf()

})

test ("sc_004: adding jacket ",async ({page})=>{
     const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()


    const inv=new inventory_page(page)
    await inv.select_jacket()
    

    const car=new inventory_page(page)
    await car.select_checkout()

    const ca=new cart_page(page)
    await ca.ch_out()
       

    const ovr =new ct_item(page)
    await ovr.fill_firstname(checkout_credential.firstname)
    await ovr.fill_lastname(checkout_credential.lastname)
    await ovr.fill_zipcode(checkout_credential.zipcode)
    await ovr.click_continue()

    const m =new checkoutoverview(page)
    await m.click_finish()

    const c=new check_done(page)
    await c.generate_pdf()

})

test ("sc_005: adding and removing the onsie ",async ({page})=>{
     const L= new login_page(page)
     await page.goto("https://www.saucedemo.com/");
     await L.enterusername(logipage_credentials.username);
     await L.enterpasswrod(logipage_credentials.password)
    await L.click()


    const inv=new inventory_page(page)
    await inv.select_onsie()
    

    const car=new inventory_page(page)
    await car.select_checkout()


    const r =new cart_page(page)
    await r.rem_onesie()

    const ca=new cart_page(page)
    await ca.ch_out()
       

    const ovr =new ct_item(page)
    await ovr.fill_firstname(checkout_credential.firstname)
    await ovr.fill_lastname(checkout_credential.lastname)
    await ovr.fill_zipcode(checkout_credential.zipcode)
    await ovr.click_continue()

    const m =new checkoutoverview(page)
    await m.click_finish()

    const c=new check_done(page)
    await c.generate_pdf()

})