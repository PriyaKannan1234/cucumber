@AddAccountFeature
Feature: CodeFios login page functionality validation
  
  //Background:

  @AddAccountScenario1
  Scenario: 1 User should be able to login with valid credentials
    Given User is on codefios login page
    When User enters username as "demo@codefios.com"
    When User enters password as "abc123"
    When User clicks on sign in button
    When User lands on dashboard page
    
    When User clicks on list accounts button
    When User clicks on add account button
    When User enters account name as "TestAddOct23"
    When User enters description as "TestAddOct23"
    When User enters initial balance as "100"
    When User enters account number as "654879345"
    When User enters contact person as "TestingDemo"
    When User clicks on save button
    Then User should be able to see account added alert

  @AddAccountScenario2
  Scenario: 2 User should be able to login with valid credentials
    When User enters username as "demo@codefios.com"
    When User enters password as "abc124"
    When User clicks on sign in button
    When User lands on dashboard page

  @AddAccountScenario3
  Scenario: 3 User should be able to login with valid credentials
    When User enters username as "demo1@codefios.com"
    When User enters password as "abc123"
    When User clicks on sign in button
    When User lands on dashboard page
