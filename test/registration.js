import assert from "assert";
import { Builder, By, until } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox.js";
import generateRandomEmail from "./util/randomEmail.js";
import "dotenv/config";



describe("Registration Functionality", function () {
  this.timeout(30000);

  let driver;
  // Extract sensitive information
  const password = process.env.REGISTRATION_PASSWORD;

  beforeEach(async () => {
    // driver = await new Builder()
      // .usingServer("http://localhost:4444/wd/hub")
     // .forBrowser("firefox")
     // .build();
     let options = new firefox.Options();
     options.addArguments("headless");
     options.addArguments("no-sandbox");
     options.addArguments("disable-dev-shm-usage");
     driver = new Builder()
       .forBrowser("firefox")
       .setFirefoxOptions(options)
       .build();
    await driver.manage().window().maximize();
  });

  afterEach(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it("New account first test", async () => {

    // Navigate to the login page
    await driver.get("https://demowebshop.tricentis.com");
    await driver.manage().window().maximize();
    // Click on register element
    await driver.findElement(By.className("ico-register")).click();
    // Select gender
    await driver.findElement(By.id("gender-male")).click();
    // Enter registration details
    await driver.findElement(By.id("FirstName")).sendKeys("group-3");
    await driver.findElement(By.id("LastName")).sendKeys("QuPaSu");
    await driver.findElement(By.id("Email")).sendKeys(generateRandomEmail());
    await driver.findElement(By.id("Password")).sendKeys(password);
    await driver.findElement(By.id("ConfirmPassword")).sendKeys(password);

    // Click on register button
    await driver.findElement(By.id("register-button")).click();

    // Wait until the account link is visible
    const registrationMessage = await driver.wait(
      until.elementLocated(By.className("result")),
      10000
    );
    const registrationMessageText = await registrationMessage.getText();
    assert(registrationMessageText === "Your registration completed");
  });

  it("New account second test", async () => {
    // Navigate to the login page
    await driver.get("https://demowebshop.tricentis.com");
    await driver.manage().window().maximize();
    // Click on register element
    await driver.findElement(By.className("ico-register")).click();
    // Select gender
    await driver.findElement(By.id("gender-male")).click();
    // Enter registration details
    await driver.findElement(By.id("FirstName")).sendKeys("group-3");
    await driver.findElement(By.id("LastName")).sendKeys("QuPaSu");
    await driver.findElement(By.id("Email")).sendKeys(generateRandomEmail());
    await driver.findElement(By.id("Password")).sendKeys(password);
    await driver.findElement(By.id("ConfirmPassword")).sendKeys(password);

    // Click on register button
    await driver.findElement(By.id("register-button")).click();

    // Wait until the account link is visible
    const registrationMessage = await driver.wait(
      until.elementLocated(By.className("result")),
      10000
    );
    const registrationMessageText = await registrationMessage.getText();
    assert(registrationMessageText === "Your registration completed");
  });
});
