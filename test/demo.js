
import { Builder, By } from "selenium-webdriver";
import assert from "assert";
import "dotenv/config";

const headlessOptions = {
  args: ["--headless"],
};

describe("Login Functionality (Headless)", function () {
  this.timeout(30000);

  let driver;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  beforeEach(async () => {
    driver = await new Builder()
    //   .usingServer("http://localhost:4444/wd/hub")
      .forBrowser("firefox")
      .setFirefoxOptions(headlessOptions) 
      .build();
  });

  afterEach(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it("should login with valid credentials 1", async () => {
   
    await driver.get("https://demowebshop.tricentis.com");
    await driver.findElement(By.className("ico-login")).click();

    const emailInput = await driver.findElement(By.id("Email"));
    const passwordInput = await driver.findElement(By.id("Password"));

    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);

    const loginButton = await driver.findElement(By.className("login-button"));
    await loginButton.click();

    const accountLink = await driver.findElement(By.className("account"));
    const accountLinkText = await accountLink.getText();

    assert.strictEqual(
      accountLinkText,
      email,
      "Email does not match, login might have failed"
    );
  });

  it("should login with valid credentials 2", async () => {
  
    await driver.get("https://demowebshop.tricentis.com");
    await driver.findElement(By.className("ico-login")).click();

    const emailInput = await driver.findElement(By.id("Email"));
    const passwordInput = await driver.findElement(By.id("Password"));

    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);

    const loginButton = await driver.findElement(By.className("login-button"));
    await loginButton.click();

    const accountLink = await driver.findElement(By.className("account"));
    const accountLinkText = await accountLink.getText();

    assert.strictEqual(
      accountLinkText,
      email,
      "Email does not match, login might have failed"
    );
  });
});