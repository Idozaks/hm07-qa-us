# Sprint 7 project
# Sprint 7 project - Using Visual Studio to run NPM Jest tests on the Urban Grocers API
In this project, we will be using Visual Studio with a NPM Jest environment set up to run tests on 4 endpoint from the Urban Grocers API.
The project is mirrored as a github repository (this repo).
## Description
This project is designed to manage and test the functionality of a warehouse management system. It includes a series of automated tests to ensure that the API endpoints for managing warehouses, kits, and products are functioning as expected. These tests verify successful operations (status code 200) and validate the response bodies against expected results.

- The API doc used for the project is at the endpoint {server-url}/docs/

## Technologies and Techniques Used
- **JavaScript**: The primary programming language used for writing tests.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity, used for writing all of our test cases.
- **Fetch API**: Used to make HTTP requests to our API endpoints within the test cases.
- **Node.js**: The runtime environment to execute our JavaScript code server-side.
## How to Run Tests
To run the tests, follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your system.
2. Navigate to the project's root directory in your terminal or command prompt.
3. Install the project dependencies by running:

    `npm install`
   in the project's root directory

5. Once the dependencies are installed, you can run the tests using the following command:

    `npx jest`

 - Should you want to run only a single test file, run the command (example):
```
    npx /postHandlers.test.js
```
  Replace `postHandlers.test.js` with the file you want to run the test for.

  Please note that the tests require a `config.js` file that should contain the API URL and any other necessary configuration details. Make sure to create this file in the root directory with the appropriate configurations.

### Example `config.js`:
```
module.exports = {
  API_URL: 'http://your-api-url-here'
};
```

Replace `http://your-api-url-here` with the actual API URL you are testing against.

Make sure that your API server is running and accessible before executing the tests. The tests are designed to validate the response from the API, so a functional API is a prerequisite for successful test execution.

The project test files are named and structured as follows: 
```
{project-root}/tests/getHandlers.test.js
{project-root}/tests/postHandlers.test.js
{project-root}/tests/putHandlers.test.js
{project-root}/tests/deleteHandlers.test.js
```
