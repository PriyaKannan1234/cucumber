$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/AddAccount.feature");
formatter.feature({
  "name": "CodeFios login page functionality validation",
  "description": "//Background:",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Account Added Successfully.\u0027)]\"}\n  (Session info: chrome\u003d124.0.6367.118)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-N8OU58C\u0027, ip: \u0027192.168.1.48\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.118, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\kanna\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58166}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 427a1f3ee0cb292df4b724e198de9c47\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Account Added Successfully.\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat pages.AddAccountPage.getAccountAddedAlertText(AddAccountPage.java:42)\r\n\tat steps.AddAccountStepDefinition.user_should_be_able_to_see_account_added_alert(AddAccountStepDefinition.java:99)\r\n\tat ✽.User should be able to see account added alert(classpath:features/AddAccount.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});