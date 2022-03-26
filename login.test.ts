import {Scheels} from "./pageObjects"

const scheels = new Scheels;

test("login", async () => {
    await scheels.navigate()
    await scheels.driver.manage().window().maximize()
    await scheels.driver.sleep(8000)
    await scheels.click(scheels.signDrop)
    await scheels.click(scheels.accountMenu)
    await scheels.setInput(scheels.loginEmail, "nathan.nethery@gmail.com")
    await scheels.setInput(scheels.passWord, "123Thomas?")
    await scheels.click(scheels.signButton)
    await scheels.click(scheels.logout)
    await scheels.driver.quit()

})