import {Scheels} from "./pageObjects"

const scheels = new Scheels;

test("add to cart", async () => {
    await scheels.navigate()
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.changeStore)
    await scheels.click(scheels.overlandPark)
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.storeDetail)
    await scheels.click(scheels.myStore)
    await scheels.click(scheels.changeStore)
    await scheels.click(scheels.findOther)
    await scheels.setInput(scheels.zipBox, "54701")
    await scheels.click(scheels.zipSearch)
    await scheels.click(scheels.eauClaire)

    await scheels.driver.quit()

})