package br.com.forgefit.dominio;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {
        "br.com.forgefit.dominio"
    },
    plugin = {"pretty"}
)
public class RunCucumberTest {
}