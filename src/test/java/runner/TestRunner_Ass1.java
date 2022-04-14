package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/firstAssignment.feature",
		glue= {"stepDefination"},
		tags = {"@Assignment"},
		plugin = {"pretty", "html:output/report.html"}
		)
public class TestRunner_Ass1 {

}
