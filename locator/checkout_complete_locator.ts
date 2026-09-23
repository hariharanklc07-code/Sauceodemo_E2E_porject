import { Page } from "@playwright/test";

export const checkout_done = (page:Page)=>( {
    back_home: page.locator("#back-to-products"),
    pdf: page.locator("#generate-pdf-order")
    
}) 
