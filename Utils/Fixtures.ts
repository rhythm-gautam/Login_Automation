import {test as baseTest} from '@playwright/test';
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;

    
};
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
{
testDataForOrder :    {
    username : "rhythmgautam07@gmail.com",
    password : "Rhythm07",
    productName : "ZARA COAT 3",
   
    
    }

}

)