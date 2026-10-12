Feature: Calculator API Testing

  Background:
    * url 'http://localhost:3000'

  Scenario: Addition
    Given path 'add'
    And param a = 10
    And param b = 5
    When method get
    Then status 200
    And match response == { result: 15 }

  Scenario: Multiplication
    Given path 'multiply'
    And param a = 10
    And param b = 5
    When method get
    Then status 200
    And match response == { result: 50 }
