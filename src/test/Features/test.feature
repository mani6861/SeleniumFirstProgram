Feature: GoogleChrome browser should open.

  Scenario: GoogleChrome browser should open.
    Given Valid GoogleChrome path
    When I click on enter
    Then GoogleChrome default page should open