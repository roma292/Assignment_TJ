
@Assignment
Feature: Perform first assignment

  @TestScenario1
  Scenario Outline: Signup on elearning and send message
    Given Navigate to elearning home page
    When click on signup button
    And fill up the registeration form for all mandatory fields
    |Roma|	Khubnani	|	rk@gmail.com	|	pqr3	|	password	|	password	|
    And submit the details
    Then Verify registration message 
    And Click on Next button
    When user click on username
    And Profile is selected from dropdown 
    Then Click on messages
    When user click on Compose message
    And enter the "<subject>" for message and send to "<SendTo>"
    And Click on send message
    Then verify success message
    
    Examples:
    |SendTo |subject|
    |Roma		|message1|
 