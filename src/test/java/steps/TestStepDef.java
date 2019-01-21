package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import javafx.scene.layout.Region;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestStepDef {
    WebDriver driver;
    @Given("^I am a chrome user$")
    public void step1(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Downloads\\chromedriver.exe");
         driver = new ChromeDriver();
            System.out.println("Given---");

    }

    @When("^I access facebook url$")
    public void step2(){
        driver.get("http://www.facebook.com");
        System.out.println("When---");
    }

    @Then("^I see facebook homepage$")
    public void step3() {
        System.out.println("Then-Before getTitle---");
        System.out.println(driver.getTitle());
        System.out.println("Then-After getTitle---");
        Assert.assertEquals(true, driver.getTitle().contains("Facebook"));
        System.out.println("Then-before quit---");
        driver.quit();
    }


        @When("^I access google url$")
                public void step4(){
            driver.get("http://www.google.com");
            System.out.println("When---");
        }

        @Then("^I see google homepage$")
        public void step5(){
            System.out.println("Then-Before getTitle---");
            System.out.println(driver.getTitle());
            System.out.println("Then-After getTitle---");
            Assert.assertEquals(true,driver.getTitle().contains("Google"));
            System.out.println("Then-before quit---");
            driver.quit();

        }
    @When("^I access Amazon url$")
    public void step6(){
        driver.get("https://www.amazon.co.uk");
        System.out.println("When---");
    }

    @Then("^I see Amazon homepage$")
    public void step7(){
        System.out.println("Then-Before getTitle---");
        System.out.println(driver.getTitle());
        System.out.println("Then-After getTitle---");
        Assert.assertEquals(true,driver.getTitle().contains("Amazon"));
        System.out.println("Then-before quit---");
        driver.quit();

    }
    @When("^I access \"([^\"]*)\" Website$")

    public void step8(String arg) {
        System.out.println("When----\n");
        driver.get(arg);
        System.out.println("When After get(Arg)----\n");
    }
    @Then("^I can see \"([^\"]*)\" homepage$")
    public void step9(String arg) {
        System.out.println("Then----\n");
        System.out.println("driver.getTitle()");
        Assert.assertEquals(driver.getTitle().contains(arg),true);
        driver.quit();
    }

          }

