import { Page} from "@playwright/test";

export const checkout = (page:Page)=>({
    firstname: page.getByRole("textbox",{name:"First Name"}),
    lastname:page.getByRole("textbox",{name:"Last Name"}),
    zipcode:page.getByRole("textbox",{name:"Zip/Postal Code"}),
    cancel:page.locator(".cancel"),
    continue: page.locator("#continue")
    
})


