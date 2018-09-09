##What is this? 
This is my solution on a techical test job I did.

##Tech test job description
Your task is to create a calculator application, using the web services provided here.

Your calculator should act like a "normal" calculator. e.g. if you push '5', then '+', then '5', then '+', the calculator should display '10', while waiting for the user to enter the next operand. The standard calculator applications that come with Windows, OS X and Linux are all representative of this behaviour.

Calls can be made as regular HTTP GET requests, with parameters embedded in the query string. The response is a JSON object, and can be seen using the examples below.

The front end is responsible for validating user input (all values must be numeric), but is not responsible for ensuring the server calculates values correctly.

All responses are of Content-Type: application/json, and have the Access-Control-Allow-Origin: * header set.

The application should be functional, using the latest version of Chrome, Safari, Internet Explorer or FireFox. (It doesn't have to work in all four, but must work in at least one). The brower used for validation should be stated in the submissions

The application should be delivered as a zip or tar archive file, ready to be expanded and run from a web server. It should consist of static HTML, CSS and JavaScript. If intermediate languages, such as CoffeeScript or SASS, are used, they should be included, but the resulting HTML, JavaScript and CSS should also be included and ready to deploy.

Visual appearance and quality of code will be taken into consideration. At the very least, it should look better than this page. Use of tools such as unit-testing and version control will also be taken into consideration

The expected time frame for the exercise is between 2 and 4 hours. It is not necessary to complete all the functionality, though any missing functionality should be listed in a README file.

The full list of operations is dictated by this web service. This should be examined at runtime. A partial list, with test endpoints, is shown below.

Service endpoint:
http://calctest.iesim.biz
Methods:
[
  { "operation": "add", "arguments": 2, "symbol": "+", "description": "Add" },
  { "operation": "subtract", "arguments": 2, "symbol": "-", "description": "Subtract" },
  { "operation": "multiply", "arguments": 2, "symbol": "*", "description": "Multiply" },
  { "operation": "divide", "arguments": 2, "symbol": "/", "description": "Divide" },
  { "operation": "power", "arguments": 2, "symbol": "^", "description": "Power Of" },
  { "operation": "square_root", "arguments": 1, "symbol": "\u221A", "description": "Square Root" },
  { "operation": "log10", "arguments": 1, "symbol": "log", "description": "Log, Base 10" },
  { "operation": "ln", "arguments": 1, "symbol": "ln", "description": "Log, Natural" },
  { "operation": "pi", "arguments": 0, "symbol": "\u03C0", "description": "\u03C0" },
  { "operation": "e", "arguments": 0, "symbol": "e", "description": "e" }
]
Response:
{ "result": 5.0 }


# TehnicalTestCalc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
