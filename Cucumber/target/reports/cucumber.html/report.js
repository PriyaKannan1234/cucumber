$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/AddAccount.feature");
formatter.feature({
  "name": "CodeFios login page functionality validation",
  "description": "  //Background:",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.scenario({
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@AddAccountScenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.userEntersUserNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_lands_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on list accounts button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_list_accounts_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on add account button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_add_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters account name as \"TestAddOct23\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_account_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters description as \"TestAddOct23\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters initial balance as \"100\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_initial_balance(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters account number as \"654879345\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_account_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters contact person as \"TestingDemo\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_contact_person(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see account added alert",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_should_be_able_to_see_account_added_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});