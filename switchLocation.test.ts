import {Scheels} from "./pageObjects"

const scheels = new Scheels;

test("add to cart", async () => {
    await scheels.navigate()
    await scheels.driver.manage().window().maximize()
    await scheels.driver.sleep(10000)
    //await scheels.click(scheels.closePopup)
    await scheels.click(scheels.closeCookies)
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.changeStore)
    await scheels.click(scheels.overlandPark)
    await scheels.driver.sleep(5000)
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.storeDetail)
    await scheels.driver.sleep(5000)
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.changeStore)
    await scheels.click(scheels.findOther)
    await scheels.setInput(scheels.zipBox, "54701")
    await scheels.click(scheels.zipSearch)
    await scheels.click(scheels.eauClaire)
    await scheels.driver.quit()

})