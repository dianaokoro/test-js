const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

(async function example(){
   try{ var expectedTitle = "Nigeria's Leading Multi-Partnership Business Platform - Oxfordvest";
 
   
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("https://oxfordvest.com");
         
     //To send a search query by passing the value in searchString.
     //await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

     //Verify the page title and print it
      await driver.findElement(By.linkText("About")).click();
    //  console.log('Title is:',title);
    console.log(title);

    if(title == expectedTitle)
    {
        console.log("Test pass")
    }else {
        console.log("Test did not pass")
    }

} catch (e) {
    console.log("Test error:", e)
} finally {
    await driver.quit();
}

     //It is always a safe practice to quit the browser after execution
    
})();

//example();

