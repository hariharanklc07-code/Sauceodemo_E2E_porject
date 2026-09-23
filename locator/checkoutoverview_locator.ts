import { Page } from "@playwright/test";

export const checkout_overview =(page:Page)=>({
    cancel_1 : page.getByRole("button",{name:"cancel"}),
    finish: page.locator("#finish")
})
