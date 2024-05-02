package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

	  // go with the Add JUnit library (the 2nd option) add to path instead of 
     //	just import RunWith(1st option)
     // this way both we can get - import RunWith class and JUnit path also
   
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features",
		glue = "steps",     // glue is a package name //
		tags = " @AddAccountScenario1",
		monochrome = true,
		strict = true,
		dryRun = false,
		plugin = {
			"pretty",
			"html:target/reports/cucumber.html",
			"json:target/reports/cucumber.json"
		}
		
		)

public class LoginRunner {

}
