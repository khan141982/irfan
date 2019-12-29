$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "user able to signup for facebook account",
  "description": "",
  "id": "user-able-to-signup-for-facebook-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8762578566,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user able to create facebook accout",
  "description": "",
  "id": "user-able-to-signup-for-facebook-account;user-able-to-create-facebook-accout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given user able to open facebook url"
    },
    {
      "line": 5,
      "value": "#Then user able to write first name into the first name field"
    },
    {
      "line": 6,
      "value": "#And user able to write lastname into the last name field"
    },
    {
      "line": 7,
      "value": "#Then user able to write phone number or email address into the field"
    },
    {
      "line": 8,
      "value": "#When user able to re-write into the phone or email address field"
    },
    {
      "line": 9,
      "value": "#And select the passord into the password field"
    }
  ],
  "line": 11,
  "name": "user able to open facebook url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "verfiy the title \"Facebook - Log In or Sign Up\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user able to write \"irfan\" into the first name field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user able to write lastname into the \"nigah\" field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user able to write \"irfankhan.va@gmail.com\" into the field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user able to re-write into the \"irfankhan.va@gmail.com\" field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "select the passord into the \"Irfankhan1\" field",
  "keyword": "And "
});
formatter.match({
  "location": "Facebook.user_able_to_open_facebook_url()"
});
formatter.result({
  "duration": 447143875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook - Log In or Sign Up",
      "offset": 18
    }
  ],
  "location": "Facebook.verfiy_the_title(String)"
});
formatter.result({
  "duration": 690910016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "irfan",
      "offset": 20
    }
  ],
  "location": "Facebook.user_able_to_write_into_the_first_name_field(String)"
});
formatter.result({
  "duration": 12921525486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nigah",
      "offset": 38
    }
  ],
  "location": "Facebook.user_able_to_write_lastname_into_the_field(String)"
});
formatter.result({
  "duration": 67752380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "irfankhan.va@gmail.com",
      "offset": 20
    }
  ],
  "location": "Facebook.user_able_to_write_into_the_field(String)"
});
formatter.result({
  "duration": 144319725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "irfankhan.va@gmail.com",
      "offset": 32
    }
  ],
  "location": "Facebook.user_able_to_re_write_into_the_field(String)"
});
formatter.result({
  "duration": 135231938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Irfankhan1",
      "offset": 29
    }
  ],
  "location": "Facebook.select_the_passord_into_the_field(String)"
});
formatter.result({
  "duration": 88404070,
  "status": "passed"
});
formatter.after({
  "duration": 164025916,
  "error_message": "org.assertj.core.api.SoftAssertionError: \nThe following assertion failed:\n1) expected:\u003c\"[www.facebook.com]\"\u003e but was:\u003c\"[Facebook - Log In or Sign Up]\"\u003e\n\n\tat org.assertj.core.error.AssertionErrorCreator.multipleSoftAssertionsError(AssertionErrorCreator.java:75)\n\tat org.assertj.core.api.SoftAssertions.assertAll(SoftAssertions.java:134)\n\tat com.SignUp.Utilities.driver.tearDown(driver.java:56)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
});