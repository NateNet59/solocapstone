import {Scheels} from "./pageObjects"

const scheels = new Scheels;

test("add to cart", async () => {
    await scheels.navigate()
    await scheels.driver.manage().window().maximize()
    await scheels.driver.sleep(8000)
    //await scheels.click(scheels.closePopup)
    await scheels.click(scheels.closeCookies)
    await scheels.click(scheels.searchBar)
    await scheels.setInput(scheels.searchBar, "Magpul PMAG 30 AR/M4 GEN M3 Magazine")
    await scheels.click(scheels.searchButton)
    await scheels.click(scheels.magBlack)
    await scheels.driver.sleep(3000)
    await scheels.setInput(scheels.addQuantity, "3")
    await scheels.click(scheels.addPickup)
    await scheels.driver.sleep(3000)
    await scheels.click(scheels.viewCart)
    await scheels.click(scheels.removeCart)
    await scheels.driver.quit()

})