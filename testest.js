var AWS = require("aws-sdk");
var fs = require("fs");
AWS.config.update({
	accessKeyId: "AKIASU7QDHB2TP3CYMMY",
	secretAccessKey: "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",
	region: "us-east-1",
});
var docClient = new AWS.DynamoDB.DocumentClient();

console.log("send cartoon into DynamoDB. Please wait.");

// var params = {
// 	TableName: "todo-test",
// 	Item: {
// 		todoId: "uyihonujnpi",
// 		year: "2021",
// 		title: "tom and jerry",
// 	},
// };

// docClient.put(params, function (err, data) {
// 	if (err) {
// 		console.error(
// 			"Unable to add movie",
// 			". Error JSON:",
// 			JSON.stringify(err, null, 2),
// 		);
// 	} else {
// 		console.log("PutItem succeeded:");
// 	}
// });

// var params = {
// 	TableName: "todo-test",
// 	Key: {
// 		todoId: "uyihonujnpi",
// 	},
// };

// docClient.get(params, function (err, data) {
// 	if (err) console.log(err);
// 	else console.log(data);
// });

// UPDATE

// 1.change the value of existing attribute
// 2.adding new attribute on the presvious record
// 3.adding new record by changing primery key
// 4.removing an atribute from existing record

// var params = {
// 	TableName: "todo-test",
// 	Key: { todoId: "uyihonujnpiaa" },
// 	UpdateExpression: "set #t =  :c",
// 	ExpressionAttributeNames: { "#t": "title" },
// 	ExpressionAttributeValues: {
// 		":c": "tom",
// 	},
// 	ReturnValues: "UPDATED_NEW",
// };

// var params = {
// 	TableName: "todo-test",
// 	Key: { todoId: "uyihonujnpiaa" },
// 	UpdateExpression: "REMOVE #t ",
// 	ExpressionAttributeNames: { "#t": "ttle" },
// 	// ExpressionAttributeValues: {
// 	// 	":c": "tom",
// 	// },
// 	ReturnValues: "ALL_NEW",
// };

// DELETE

// var params = {
// 	TableName: "todo-test",
// 	Key: { todoId: "uyihonujnpi" },
// };

docClient.delete(params, function (err, data) {
	if (err) console.log(err);
	else console.log(data);
});
