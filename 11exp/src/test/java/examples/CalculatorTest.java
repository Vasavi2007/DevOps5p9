package examples;

import com.intuit.karate.junit5.Karate;

class CalculatorTest {
    @Karate.Test
    Karate test() {
        return Karate.run("calculator").relativeTo(getClass());
    }
}
