package steps;

import org.openqa.selenium.support.PageFactory;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.AddAccountPage;
import pages.LoginPage;
import pages.TestBase;

public class AddAccountStepDefinition extends TestBase{

	AddAccountPage addaccountPage;
	
// LoginStepDefinition extends TestBase class
// TestBase extends Util class
	
//@Before
	public void beforeRun() {
		initDriver();
		
	}
	
//	We need java.IO - Import that is very very important
//  snake_case


	/*
	 * public void user_is_on_codefios_login_page() {
	 * driver.get("https://codefios.com/ebilling/login"); takeScreenshot(driver); }
	 * 
	 * // camelCase
	 * 
	 * @When("User enters userName as {string}") public void
	 * userEntersUserNameAs(String userName) { loginPage.enterUserName(userName); }
	 * 
	 * @When("User enters password as {string}") public void
	 * user_enters_password_as(String password) { loginPage.enterPassword(password);
	 * }
	 * 
	 * @When("User clicks on sign in button") public void
	 * user_clicks_on_sign_in_button() { loginPage.clickSignInButton();
	 * 
	 * }
	 * 
	 * @When("User lands on dashboard page") public void
	 * user_lands_on_dashboard_page() { String expectedTitle = "Codefios"; String
	 * actualTitle = loginPage.getPageTitle(); Assert.assertEquals(expectedTitle,
	 * actualTitle); takeScreenshot(driver); }
	 */
	
	@When("User clicks on list accounts button")
	public void user_clicks_on_list_accounts_button() {
		addaccountPage = PageFactory.initElements(driver,AddAccountPage.class);
		addaccountPage.clickListAccountsButton();
	}

	@When("User clicks on add account button")
	public void user_clicks_on_add_account_button() {
		addaccountPage.clickAddAccountButton();
	}
	
	@When("User enters account name as {string}")
	public void user_enters_account_name(String accountName) {
		addaccountPage.enterAccountName(accountName);
	}
	
	@When("User enters description as {string}")
	public void user_enters_description(String description) {
		addaccountPage.enterDescription(description);
	}

	@When("User enters initial balance as {string}")
	public void user_enters_initial_balance(String initialBalance) {
		addaccountPage.enterInitialBalance(initialBalance);
	}
	
	@When("User enters account number as {string}")
	public void user_enters_account_number(String accountNumber) {
		addaccountPage.enterAccountNumber(accountNumber);
	}
	
	@When("User enters contact person as {string}")
	public void user_enters_contact_person(String contactPerson) {
		addaccountPage.enterContactPerson(contactPerson);
	}
	
	@When("User clicks on save button")
	public void user_clicks_on_save_button() {
		addaccountPage.clickSaveButton();
	}
	
	@Then ("User should be able to see account added alert")
	public void user_should_be_able_to_see_account_added_alert() {
		String expectedAlertText = "Account Added Successfully.";
		String actualAlertText = addaccountPage.getAccountAddedAlertText();
		Assert.assertEquals(expectedAlertText, actualAlertText);
	//	takeScreenshot(driver);
	}
	
		@After
	public void tearDown() {
		driver.close();
		driver.quit();
		
	}
	
}
	
	
	
	
	
	
	
	
	

