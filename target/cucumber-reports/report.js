$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Examples.feature");
formatter.feature({
  "line": 1,
  "name": "Multi Bank",
  "description": "",
  "id": "multi-bank",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"\u003cBankWebsite\u003e\" Website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"\u003cBankName\u003e\" homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "multi-bank;open-multi-windows;",
  "rows": [
    {
      "cells": [
        "BankWebsite",
        "BankName"
      ],
      "line": 8,
      "id": "multi-bank;open-multi-windows;;1"
    },
    {
      "cells": [
        "https://www.hsbc.com",
        "HSBC"
      ],
      "line": 9,
      "id": "multi-bank;open-multi-windows;;2"
    },
    {
      "cells": [
        "https://www.barclays.co.uk",
        "Barclays"
      ],
      "line": 10,
      "id": "multi-bank;open-multi-windows;;3"
    },
    {
      "cells": [
        "https://www.lloydsbank.com",
        "Lloyds"
      ],
      "line": 11,
      "id": "multi-bank;open-multi-windows;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.hsbc.com\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"HSBC\" homepage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 28996897274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hsbc.com",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step8(String)"
});
formatter.result({
  "duration": 21306089001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 11
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 1363123638,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.barclays.co.uk\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Barclays\" homepage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 9815307579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.barclays.co.uk",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step8(String)"
});
formatter.result({
  "duration": 16023874608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 11
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 683174338,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Open Multi Windows",
  "description": "",
  "id": "multi-bank;open-multi-windows;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access \"https://www.lloydsbank.com\" Website",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I can see \"Lloyds\" homepage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 3299956935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.lloydsbank.com",
      "offset": 10
    }
  ],
  "location": "TestStepDef.step8(String)"
});
formatter.result({
  "duration": 5403753764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lloyds",
      "offset": 11
    }
  ],
  "location": "TestStepDef.step9(String)"
});
formatter.result({
  "duration": 704743234,
  "status": "passed"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Login different web pages",
  "description": "",
  "id": "login-different-web-pages",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to facebook page with valid credentials",
  "description": "",
  "id": "login-different-web-pages;login-to-facebook-page-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access facebook url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see facebook homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 3973547183,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step2()"
});
formatter.result({
  "duration": 5043958701,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step3()"
});
formatter.result({
  "duration": 805110225,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login to Google page with valid credentials",
  "description": "",
  "id": "login-different-web-pages;login-to-google-page-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I access google url",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see google homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 3019416786,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step4()"
});
formatter.result({
  "duration": 3259457086,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step5()"
});
formatter.result({
  "duration": 716998832,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to Amazon page with valid credentials",
  "description": "",
  "id": "login-different-web-pages;login-to-amazon-page-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I access Amazon url",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I see Amazon homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.step1()"
});
formatter.result({
  "duration": 2751684625,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step6()"
});
formatter.result({
  "duration": 20618143950,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.step7()"
});
formatter.result({
  "duration": 1065509393,
  "status": "passed"
});
});