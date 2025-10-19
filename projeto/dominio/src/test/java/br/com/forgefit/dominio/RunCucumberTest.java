package br.com.forgefit.dominio;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {
        "br.com.forgefit.dominio.steps",
        "br.com.forgefit.dominio.aluno", 
        "br.com.forgefit.dominio.aula",
        "br.com.forgefit.dominio.guilda",
        "br.com.forgefit.dominio.checkin",
        "br.com.forgefit.dominio.treino"
    },
    plugin = {"pretty"}
)
public class RunCucumberTest {
}