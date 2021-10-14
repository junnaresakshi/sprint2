package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
features="src/test/java/Feature"
,glue={"StepDefination","hooks"},
dryRun=false,
monochrome=true,
tags={"@search"}
//plugin={"pretty","html:target/cucumber-pretty"},
//plugin={"pretty","junit:target/report.xml","json:target/jsonreport.json"}
)

public class TestRunnerEstate {

}
