Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the Dockerfile is created
