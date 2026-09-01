import{test,expect} from '@playwright/test'

test.describe('Automation practice page',()=>{



    test.beforeEach(async({page})=>{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    })

    test('Check radio button',async({page})=>{
        const radioBtn=page.locator("input[value='radio1']");
        await (radioBtn.check());
        await expect(radioBtn).toBeChecked();
    })

    test('Auto complete',async({page})=>{
        const autofill=page.locator("#autocomplete");
        await autofill.pressSequentially("In")
        //await autofill.fill("In");
        const option=page.getByText('India',{exact:true});
        await option.click();
        await expect(autofill).toHaveValue('India');
    })

    test('dropdown',async({page})=>{
        const dropdown= page.locator("#dropdown-class-example");
        await dropdown.selectOption('option2');
        await expect(dropdown).toHaveValue('option2');
    })

    test('checkbox',async({page})=>{
        const checkbox=page.locator("#checkBoxOption1");
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        const options= page.locator("#checkbox-example input[type='checkbox']");
        await expect (options).toHaveCount(3);

    })

    test('new window',async({page})=>{
        const[newpage]=await Promise.all([page.context().waitForEvent('page'),
            page.getByRole("button",{name : 'Open Window'}).click()]);
            await newpage.waitForLoadState();
            console.log(await newpage.title());
            await expect(newpage).toHaveURL('https://www.qaclickacademy.com/');
    });

test('open tab',async({page})=>{
    const[newpage]=await Promise.all([page.context().waitForEvent('page'),
        page.getByRole("link", {name : 'Open Tab'}).click()]);
        await newpage.waitForLoadState();
        await expect(newpage).toHaveTitle('qaclickacademy.com | 526: Invalid SSL certificate');
        await newpage.close();
        await expect(page).toHaveTitle('Practice Page');
})

test('alert',async({page})=>{
    const palceholder=page.getByPlaceholder('Enter Your Name');
    await palceholder.fill('bhargavi');
    const alertbtn=page.getByRole("button",{name : 'Alert'});

    page.once('dialog',async dialog=>{
        console.log(dialog.message());
     expect(dialog.message()).toContain('Hello bhargavi, share this practice page and share your knowledge')

        await dialog.accept();
    });
            await alertbtn.click();


})

test('hide show',async({page})=>{
    const hide=page.getByRole("button",{name: 'Hide'});
    const show=page.getByRole("button",{name:'Show'});
    await hide.click();
     await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();
    await show.click();
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();
})

test('web table', async({page})=>{
const table=page.locator("#product");
const rows=table.locator('tbody tr');
const rowcount=await rows.count();
console.log(rowcount);
expect(rows.first().locator('th').first()).toHaveText("Instructor");

})

test('mouse hover',async({page})=>{
const mousehover=page.getByRole("button",{name: 'Mouse Hover'});
await mousehover.hover();
const top=page.getByRole("link",{name : 'Top'});
await expect(top).toBeVisible();
})

test('total amount', async({page})=>{
const table=page.locator('#product').nth(1);
 const rowcount=await table.locator('tr').count();
 let amount=0;
for(let i=1;i<rowcount;i++){
 const a=await table.locator('tr').nth(i).locator('td').nth(3).textContent();
 amount=amount+Number(a);
}

console.log('total amount'+amount);

const totamount=await page.locator('.totalAmount').textContent();
expect(totamount?.includes(amount.toString()));

})

test('iframe',async({page})=>{
    const frame=page.frameLocator('#courses-iframe');
    const link=frame.getByRole('link', {name:'Home'});
    await expect(link).toBeVisible();

})

});