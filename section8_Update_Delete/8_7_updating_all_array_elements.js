
conn = new Mongo();
db = conn.getDB("contactData");

db.detailPersons.find({age:{$gt:30}});
db.detailPersons.find({age:{$gt:30}}).count();

// becomes error:  Cannot create field 'duration' in element
db.detailPersons.updateMany(
  {age: {$gte:30}}, 
  {$inc: {"workExperience.duration": 1 }}
);

// MongoServerError: The positional operator did not find the match needed from the query.
db.detailPersons.updateMany(
  {age: {$gte:30}}, 
  {$inc: {"workExperience.$.duration": -1 }}
);

// Updating all array elements: duration = duration + 1
db.detailPersons.updateMany(
  {age: {$gte:30}}, 
  {$inc: {"workExperience.$[].duration": 1 }}
);


