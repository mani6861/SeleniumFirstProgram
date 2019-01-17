package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import javafx.scene.layout.Region;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestStepDef {
    WebDriver driver;
    @Given("^Valid GoogleChrome path$")
    public void valid_GoogleChrome_path() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Downloads\\chromedriver.exe");
         driver = new ChromeDriver();
        driver.get("http://www.google.com");
//        throw new PendingException();
    }

    @When("^I click on enter$")
    public void i_click_on_enter() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        //driver.get("http://www.google.com");
        throw new PendingException();
    }

    @Then("^GoogleChrome default page should open$")
    public void googlechrome_default_page_should_open() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
