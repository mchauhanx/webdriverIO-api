Feature: Oliu Studio POC

  @smokeTest
  Scenario Outline: Organization is able to onboard successfully on oliu Studio
    Given the user launches the url
    Then the user clicks on the button with html tag "id" as "rcc-confirm-button"
    Then the user enter details on Welcome page
    Then the user enters text "<mobileNumber>" in the textbox "Mobile Number"
    Then the user validates if "I accept Oliu Studio" checkbox is not selected
    Then the user clicks on the checkbox with html tag "name" as "acceptPolicy"
    Then the user click on "Continue"
    Then the user enters text "<billingAddress>" in textbox with placeholder "Billing Address"
    Then the user enters text "<postalCode>" in textbox with placeholder "Zip/Postal Code"
    Then in iframe "0" the user enters text "4242 4242 4242 4242" in textbox with placeholder "Card Number"
    Then the user enters text "<name>" in textbox with placeholder "Cardholder Name"
    Then in iframe "1" the user enters text "12/24" in textbox with placeholder "MM/YY"
    Then in iframe "2" the user enters text "123" in textbox with placeholder "CVC Number"
    Then the user click on "Confirm & Pay"
    Then the user waits for "10" seconds
    Then the user scans the QR code
    Then the user waits for "50" seconds

    Examples: 
      | name     | mobileNumber | billingAddress | postalCode |
      | John Doe |   6471239876 |   109 9 Ave SW | T3H 3H9    |
