Feature('login');

Scenario('test something', ({ I }) => {

    I.amOnPage('');

    I.waitForElement({ xpath: "//button[@id='loginButton']" })
    I.wait(2);

    I.fillField('#user_id', 'rchamyal');
    I.fillField("input[type='password']", 'Rolika@123');
    I.saveScreenshot("loggedIn.jpg")
    I.click('Login');

    I.waitForElement("//td[@id='appTab_1']", 5)

    I.saveScreenshot("DashboardPage.png");
    I.moveCursorTo("//td[@id='appTab_1']");
    I.wait(3);
    I.click('Create New Shipping Request');
    I.wait(10);

    I.switchTo("//iframe[@id='mainFrame']")

    I.saveScreenshot("RequestTypePage.png");
    I.click('Next');

    I.waitForElement('input#eto5', 5)

    I.fillField('input#eto5', 'TestAMA1');
    I.waitForElement('li#eto7-0', 5)
    I.click('li#eto7-0');

    I.fillField('input#eto9', 'TestAMA1');
    I.waitForElement('li#eto11-0', 5)
    I.click('li#eto11-0');
    I.saveScreenshot("RequestDetailShipmentInfo.png");

    I.fillField('input#eto13', 'GUPTAAM7');
    I.waitForElement('li#eto15-0', 5)
    I.click('li#eto15-0');
    
    I.fillField('input#eto1', 'GUPTAAM7');
    I.waitForElement('li#eto3-0', 5)
    I.click('li#eto3-0');
    
    I.saveScreenshot("RequestDetailContact.png");

    I.selectOption("select#eto1", "Dedicated Transport");
    I.checkOption("input[value='N']")
    I.selectOption("select#eto4", "Frozen");
    I.saveScreenshot("RequestDetailTransportInfo.png");

    I.click('Next');
    I.wait(10);
    I.saveScreenshot("MaterialsPage.png");
});
