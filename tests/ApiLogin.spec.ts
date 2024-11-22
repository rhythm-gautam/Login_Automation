import { test, expect, request } from '@playwright/test';

const loginPayLoad = {
  userEmail: "rhythmgautam07@gmail.com",
  userPassword: "Rhythm07",
};

let token: string;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: loginPayLoad }
  );

  expect(loginResponse.ok()).toBeTruthy();

  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  console.log("Token:", token);
});

test('Login with saved username and password', async ({ page }) => {
  // Inject token into localStorage
  await page.addInitScript((value: string) => {
    window.localStorage.setItem('token', value);
  }, token);

  // Navigate to the application
  await page.goto("https://rahulshettyacademy.com/client");

  // Locate products
  const products = page.locator(".card-body");
  const titles = await products.locator("b").allTextContents();
  console.log(titles);

  // Select and add the product to the cart
  const productName = 'IPHONE 13 PRO';
  const count = await products.count();
  for (let i = 0; i < count; ++i) 
  {
    if (await products.nth(i).locator("b").textContent() === productName) 
      {
       //add to cart
       await products.nth(i).locator("text= Add To Cart").click();
       break;
    }
  }

  await page.locator("[routerlink*='cart']").click();

  // Check if the product is visible in the cart
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
  expect(bool).toBeTruthy();
  console.log(bool);  // True
  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("ind");

  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) 
  {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   const email="rhythmgautam07@gmail.com" ;
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);


   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) 
    {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) 
        {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
});
