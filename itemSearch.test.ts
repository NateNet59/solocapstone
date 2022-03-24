import {Scheels} from "./pageObjects"

const scheels = new Scheels;

test("add to cart", async () => {
    await scheels.navigate()

    await scheels.driver.quit()

})