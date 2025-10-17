package br.com.forgefit;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/tests/resources/features",
    glue = {
        "br.com.forgefit.dominio.steps",
        "br.com.forgefit.dominio.aluno", 
        "br.com.forgefit.dominio.aula"
    },
    plugin = {"pretty"}
)
public class RunCucumberTest {
}