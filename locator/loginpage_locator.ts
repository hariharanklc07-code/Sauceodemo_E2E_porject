import {Page} from '@playwright/test';

export const login_locator = (page:Page)=>({
    username: page.getByPlaceholder("Username"),
    password:page.getByPlaceholder("Password"),
    loginbutton:page.getByRole('button',{name:"Login"})
})


