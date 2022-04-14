package stepDefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class FirstAssignmentSteps {
	
	WebDriver driver;
	
	@Given("Navigate to elearning home page")
	public void navigate_to_elearning_home_page() {
		System.setProperty("webdriver.chrome.driver",  "C:\\FST_Selenium\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/index.php");	
		
	}

	@When("click on signup button")
	public void click_on_signup_button() throws InterruptedException {
		Thread.sleep(3000);
	    driver.findElement(By.xpath("//div[@id='login_block']//a[text()=' Sign up! ']")).click();
	    Thread.sleep(3000);
	}

	@And("fill up the registeration form for all mandatory fields")
	public void fill_up_the_registeration_form_for_all_mandatory_fields(DataTable datatable) {
		
		List <String> formData = datatable.asList();
		
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(formData.get(0));
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(formData.get(1));
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(formData.get(2));
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(formData.get(3));
		driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys(formData.get(4));
		driver.findElement(By.xpath("//input[@id='pass2']")).sendKeys(formData.get(5));	   
	}

	@And("submit the details")
	public void submit_the_details() throws InterruptedException {
		driver.findElement(By.xpath("//button[@name='submit']")).click();
		Thread.sleep(3000);
	}
	
	@Then("Verify registration message")
	public void verify_registration_message(){
		
		String text = driver.findElement(By.xpath("//div[@id='top_main_content']//p[1]")).getText();
		text.contains("Your personal settings have been registered.");
	}
	
	@Then("Click on Next button")
	public void click_on_Next_button() throws InterruptedException {
		driver.findElement(By.xpath("//button[@name='next']")).click();	
		Thread.sleep(3000);   
	}

	@When("user click on username")
	public void user_click_on_username() {
		driver.findElement(By.xpath("//div[@id='menuone']/ul[2]/li[1]/a")).click();	
	}

	@When("Profile is selected from dropdown")
	public void profile_is_selected_from_dropdown() throws InterruptedException {
		driver.findElement(By.xpath("//div[@id='menuone']/ul[2]/li[1]/ul/li/a[text()=' Profile']")).click();
		Thread.sleep(3000); 
	}

	@Then("Click on messages")
	public void click_on_messages() throws InterruptedException {
		driver.findElement(By.xpath("//div[@id='sn-sidebar-collapse']/div/ul/li[@class='messages-icon ']/a")).click();	
		Thread.sleep(3000);
	}

	@When("user click on Compose message")
	public void user_click_on_Compose_message() throws InterruptedException {
		driver.findElement(By.xpath("//div[@id='toolbar']//img[@title='Compose message']")).click();
		Thread.sleep(3000);
	}

	@When("enter the {string} for message and send to {string}")
	public void enter_the_for_message(String string, String string1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).click();
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(string1);
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(string);   
	}

	@Then("Click on send message")
	public void click_on_send_message() {
		driver.findElement(By.xpath("//button[@name='compose']")).click();
	}
	
	@Then("verify success message")
	public void verify_success_message() {
	    
	    String actualMsg = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    String expectedMsg = "The message has been sent to ";
	    Assert.assertEquals(true, actualMsg.contains(expectedMsg));
	    driver.quit();
	}

}
