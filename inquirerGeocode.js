// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder and inquirer NPM packages
var geocoder = require("geocoder");
var inquirer = require("inquirer");

// Take in the command line arguments
// var nodeArgs = process.argv;

// Prompt the user to provide location information.
inquirer.prompt(

    {
        type: "input",
        name: "location",
        message: "Which location or landmark would you like to geocode?"
    }

    // After the prompt, store the user's response in a variable called location.
).then(function(response) {
    // console.log(response)

    // console.log(location.userInput);

    // Then use the Google Geocoder to Geocode the address
    geocoder.geocode(response.location, function(err, data) {
        console.log(JSON.stringify(data, null, 2));
    });

    // Then console log the result and stringify it.
    // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
    // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript

}).catch(function(error) {
    console.log(error)
})