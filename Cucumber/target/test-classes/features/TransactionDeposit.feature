@TransactionDepositFeature @Regression
Feature: CodeFios login page functionality validation

Background:
 Given User is on codefios login page
 When User enters username as "demo@codefios.com"
 
 @TransactionDepositScenario1
   Scenario: 1 User should be able to login with valid credentials
    When User enters password as "abc123"
    When User clicks on sign in button
    Then User lands on dashboard page 
    
 @TransactionDepositScenario2   
  Scenario: 2 User should be able to login with valid credentials
    When User enters password as "abc123"
    When User clicks on sign in button
    Then User lands on dashboard page 
    
 @TransactionDepositScenario3    
  Scenario: 3 User should be able to login with valid credentials
    When User enters password as "abc124"
    When User clicks on sign in button
    Then User lands on dashboard page 