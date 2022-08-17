Feature: Password less login into the oliu Studio

  @smokeTest1
  Scenario Outline: Organization is able to perform password less login successfully in the oliu Studio
    Given the user launches the url
    Then the user waits for "20" seconds
    Then the user scans the QR code
    Then the user waits for "30" seconds

    Examples: 
      | name     | mobileNumber | billingAddress | postalCode |
      | John Doe |   6471239876 |   109 9 Ave SW | T3H 3H9    |
