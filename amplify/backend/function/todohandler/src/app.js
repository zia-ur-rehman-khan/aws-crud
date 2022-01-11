/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_DYNAMOTODO_ARN
	STORAGE_DYNAMOTODO_NAME
	STORAGE_DYNAMOTODO_STREAMARN
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
	http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const { v4: uuidv4 } = require('uuid');
var AWS = require("aws-sdk");
var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});


var docClient = new AWS.DynamoDB.DocumentClient();

/**********************
 * Example get method *
 **********************/

app.get("/api/v1/create", function (req, res) {
	// Add your code here
	res.json({ success: "get call succeed!", url: req.url });
});



/****************************
 * Example post method *
 ****************************/

// app.post("/api/v1/create", function (req, res) {
// Add your code here  
// res.json({ success: "huzmaan mera bhai hai", url: req.url, body: req.body });
// });



/****************************
 * Example put method *
 ****************************/

app.post("/api/v1/create", function (req, res) {
	let data = req.body



	var params = {
		TableName: process.env.STORAGE_DYNAMOTODO_NAME,
		Item: {
			todoId: uuidv4(),
			name: data.name,

		},
	};


	docClient.put(params).promise()
		.then((data) => {
			console.log("PutItem succeeded:");
			res.send({
				success: true,
				message: "Data added to Dynamodb"
			})
		})
		.catch((err) => {
			console.error(
				"Unable to add data",
				". Error JSON:",
				JSON.stringify(err),
			);
			res.send({
				success: false,
				message: err.message
			})
		})
});



/****************************
 * Example delete method *
 ****************************/

app.delete("/api/v1/create", function (req, res) {
	// Add your code here
	res.json({ success: "delete call succeed!", url: req.url });
});



app.listen(3000, function () {
	console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
