const {Builder, By, Key} = require('selenium-webdriver');

    async function example () {
        try {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000');
        await driver.findElement(By.id('email')).sendKeys('tarikibrahimovic2016@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('123456', Key.RETURN);
        await driver.sleep(4000);
        await driver.findElement(By.id('anime')).click();
        await driver.sleep(4000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/main/div/div[2]/div/div[1]/div[1]/div[2]/img')).click();
        await driver.sleep(4000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/main/div[1]/div[3]/div/div/button')).click();
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/main/div[2]/div/div[1]/div/textarea')).sendKeys('Hello World');
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/main/div[2]/div/div[1]/div/div[2]/button')).click();
        await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/nav/div/div/ul/li[4]/a')).click();
        await driver.sleep(4000);

    } catch (error) {
        console.log(error)
    }
}

example();

