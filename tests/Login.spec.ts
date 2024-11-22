import {test, expect} from '@playwright/test';
import {customTest} from '../Utils/Fixtures';
import {POManager} from '../PageObjectsModel/POManager';
import dataset from '../utils/placeorderTestData.json';




for(const data of dataset)
    {
     test(`@Webs Client App login for ${data.productName}`, async ({page})=>
     {
        const poManager = new POManager(page);

        // Login and navigate to dashboard
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);
            
  });

  }
    
    customTest(`Client App login`, async ({page,testDataForOrder})=>
     {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);

          
    });