const {By, Key, Builder, Alert} = require("selenium-webdriver");

require("chromedriver")

async function test_visitBassLogic(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get('http://127.0.0.1:5501/index.html');


    setInterval(function(){
        driver.quit
    }, 10000);
}


async function test_loginToAccount(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/signin.html')

    const email = "pan@neverland.com"
    const pwd = "testing"

    await driver.findElement(By.name("email")).sendKeys(email)
    await driver.findElement(By.name("password")).sendKeys(pwd)

    let click = driver.findElement(By.id("submitButton"));
    const actions = driver.actions({async: true});
    await actions.move({origin: click}).click().perform();
}

async function test_signOut(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/studentPage.html')


    await driver.findElement(By.id("submitButton")).click();
    
    driver.switchTo().alert().accept();
}



async function test_createAccount(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/signup.html')

    const fname = "Jack"
    const lname = "Sparrow"
    const email = "jack@testing.com"
    const pwd = "testing"

    await driver.findElement(By.name("first-name")).sendKeys(fname)
    await driver.findElement(By.name("last-name")).sendKeys(lname)
    await driver.findElement(By.name("email")).sendKeys(email)
    await driver.findElement(By.name("password")).sendKeys(pwd)

    let click = driver.findElement(By.id("submitButton"));
    const actions = driver.actions({async: true});
    await actions.move({origin: click}).click().perform();
}

async function test_scheduleLesson(){
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/studentPage.html')

    const date = "05/20/2023"
    const time = "12:00PM"
    const instructor = "Gregory Vasquez"
    const note = "Putting a note here"

    await driver.findElement(By.id("date")).sendKeys(date)
    await driver.findElement(By.id("time")).sendKeys(time)
    await driver.findElement(By.id("instructor")).sendKeys(instructor)
    await driver.findElement(By.id("message")).sendKeys(note)

    await driver.findElement(By.id("buttonOne")).click();
}

async function test_modifyLesson(){
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/studentPage.html')

    const date = "05/25/2023"
    const time = "05:00PM"
    const instructor = "Naomi Bacop"
    const note = "I would like to update my lesson"

    await driver.findElement(By.id("date")).sendKeys(date)
    await driver.findElement(By.id("time")).sendKeys(time)
    await driver.findElement(By.id("instructor")).sendKeys(instructor)
    await driver.findElement(By.id("message")).sendKeys(note)

    await driver.findElement(By.id("buttonTwo")).click();

}

async function test_cancelLesson(){
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://127.0.0.1:5501/studentPage.html')

    await driver.findElement(By.id("buttonThree")).click();
}



//Uncomment function for testing

// test_visitBassLogic();

// test_loginToAccount();

// test_signOut();

// test_createAccount();

// test_scheduleLesson();

// test_modifyLesson();

// test_cancelLesson();
