var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync") ();
var url = "mongodb://localhost:27017/restaurants_db";

mongo.connect(url, function(err,db) {
	var collection = db.collection('restaurants');
 //  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
 //  if(allChoice == "all"){
 //    collection.find().toArray(function(err, doc){
 //      console.log(doc);
 //    });
 //  } else {
 //    console.log("Aw, you don't want to see the restaurants?");
 //  }

// task 1
//  var whichChoice = prompt("What restaurant would you like to know about?");
// 	collection.find({"name": whichChoice}).toArray(function (err,doc){
// 	console.log(doc);
// });

// task 2
// var newChoice = prompt("Add a new restaurant: ");
// var yelpChoice = prompt("Does it have a Yelp to add? ");
// collection.insert({
// 	"name":newChoice,
// 	"yelp": yelpChoice
// 	});
// });

//task 3 homework

var name = prompt("What Restaurant would you like to change?");
var location = prompt("What is the new address?");
var zipcode = prompt("What is the new zip?");
var yelpChoice = prompt("Does it have a yelp?");
collection.update({
	"name": name
}, {
	$set: {
		"address": {
		"street": location,
		"zipcode": zipcode
	},
	"yelp": yelpChoice
	}
});


//task 4 homework
// var deletedRestaurant = prompt("Which restaurant would you like to get rid of? ");
// collection.remove({name: deletedRestaurant}, function(err,doc) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log("You removed the restaurant");
});