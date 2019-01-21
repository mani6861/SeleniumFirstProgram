Feature: Multi Bank
  Scenario Outline: Open Multi Windows
    Given I am a chrome user
    When I access "<BankWebsite>" Website
    Then I can see "<BankName>" homepage

    Examples:
    |BankWebsite|BankName|
    |https://www.hsbc.com|HSBC|
    |https://www.barclays.co.uk|Barclays|
    |https://www.lloydsbank.com|Lloyds|










