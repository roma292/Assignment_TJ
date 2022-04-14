$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/firstAssignment.feature");
formatter.feature({
  "name": "Perform first assignment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Assignment"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Signup on elearning and send message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestScenario1"
    }
  ]
});
formatter.step({
  "name": "Navigate to elearning home page",
  "keyword": "Given "
});
formatter.step({
  "name": "click on signup button",
  "keyword": "When "
});
formatter.step({
  "name": "fill up the registeration form for all mandatory fields",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Roma",
        "Khubnani",
        "rk@gmail.com",
        "pqr3",
        "password",
        "password"
      ]
    }
  ]
});
formatter.step({
  "name": "submit the details",
  "keyword": "And "
});
formatter.step({
  "name": "Verify registration message",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on username",
  "keyword": "When "
});
formatter.step({
  "name": "Profile is selected from dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "Click on messages",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Compose message",
  "keyword": "When "
});
formatter.step({
  "name": "enter the \"\u003csubject\u003e\" for message and send to \"\u003cSendTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on send message",
  "keyword": "And "
});
formatter.step({
  "name": "verify success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SendTo",
        "subject"
      ]
    },
    {
      "cells": [
        "Roma",
        "message1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Signup on elearning and send message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assignment"
    },
    {
      "name": "@TestScenario1"
    }
  ]
});
formatter.step({
  "name": "Navigate to elearning home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstAssignmentSteps.navigate_to_elearning_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on signup button",
  "keyword": "When "
});
formatter.match({
  "location": "FirstAssignmentSteps.click_on_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill up the registeration form for all mandatory fields",
  "rows": [
    {
      "cells": [
        "Roma",
        "Khubnani",
        "rk@gmail.com",
        "pqr3",
        "password",
        "password"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.fill_up_the_registeration_form_for_all_mandatory_fields(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit the details",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.submit_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify registration message",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAssignmentSteps.verify_registration_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.click_on_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on username",
  "keyword": "When "
});
formatter.match({
  "location": "FirstAssignmentSteps.user_click_on_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Profile is selected from dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.profile_is_selected_from_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on messages",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAssignmentSteps.click_on_messages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Compose message",
  "keyword": "When "
});
formatter.match({
  "location": "FirstAssignmentSteps.user_click_on_Compose_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"message1\" for message and send to \"Roma\"",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.enter_the_for_message(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on send message",
  "keyword": "And "
});
formatter.match({
  "location": "FirstAssignmentSteps.click_on_send_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstAssignmentSteps.verify_success_message()"
});
formatter.result({
  "status": "passed"
});
});