import {Builder, By, Capabilities, until, WebDriver,} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Scheels extends BasePage {
    driver: WebDriver 
    url: string = "https://www.scheels.com/";
    searchBar: By = By.xpath('//input[@type="search"]')
    searchButton: By = By.xpath('//button[@id="header-search-btn"]')
    magBlack: By = By.xpath('(//a[@class="swatchanchor mx-1 my-1"])[1]')
    addPickup: By = By.xpath('(//button[@data-href="/on/demandware.store/Sites-scheels-Site/en_US/ItemAdded-ItemAdded?pid=87375000617"])[2]')
    viewCart: By = By.xpath('//a[text()="View Cart & Checkout"]')
    removeCart: By = By.xpath('//button[@class="button-text"]')
    addQuantity: By = By.xpath('//input[@id="Quantity-Web"]')
    myStore: By = By.xpath('(//button[@class="dropbtn"])[1]')
    changeStore: By = By.xpath('(//a[@class="select-preferred-store"])[1]')
    overlandPark: By = By.xpath('(//a[@class="set-preferred-store-link button is-primary"])[19]')
    findOther: By = By.xpath('//a[@class="button is-primary search-preferred-stores mb-5"]')
    storeDetail: By = By.xpath('(//a[@href="/store?StoreID=088"])[1]')
    zipBox: By = By.xpath('//input[@class="input-text  required"]')
    zipSearch: By = By.xpath('(//button[@type="submit"])[3]')
    eauClaire: By = By.xpath('(//a[@class="set-preferred-store-link button is-primary"])[1]')
    closePopup: By = By.xpath('//button[@id="closeIconContainer"]')
    noThanks: By = By.xpath('//button[@id="dismissbutton2"]')
    closeCookies: By = By.xpath('//button[@id="cookiesClose"]')
    searchItem: By = By.xpath('(//img[@class="product-tile-image lozad fade"])[1]')
    signDrop: By = By.xpath('(//button[@aria-expanded="false"])[4]')
    accountMenu: By = By.xpath('//a[@id="header-menu-log-in"]')
    loginEmail: By = By.xpath('//input[@class="input-text email  required"]')
    passWord: By = By.xpath('//input[@class="input-text  required"]')
    signButton: By = By.xpath('//button[@class="g-recaptcha"]')
    logout: By = By.xpath('//a[@title="Logout"]')
    
    

    
    constructor(){
        super({url: "https://www.scheels.com/"});
    }
    

}