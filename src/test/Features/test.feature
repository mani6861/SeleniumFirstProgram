Feature: Login different web pages

  Scenario: Login to facebook page with valid credentials
    Given I am a chrome user
    When I access facebook url
    Then I see facebook homepage

  Scenario: Login to Google page with valid credentials
    Given I am a chrome user
    When I access google url
    Then I see google homepage

  Scenario: Login to Amazon page with valid credentials
    Given I am a chrome user
    When I access Amazon url
    Then I see Amazon homepage

