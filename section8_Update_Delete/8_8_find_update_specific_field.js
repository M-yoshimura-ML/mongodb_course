
conn = new Mongo();
db = conn.getDB("contactData");


db.detailPersons.find({"workExperience.duration":{$gt:6} });

// arrayFilters: Finding & Updating Specific Fields
db.detailPersons.updateMany(
  {"workExperience.duration":{$gt:6} }, 
  {$set: {"workExperience.$[el].longExp": true }},
  {arrayFilters: [{"el.duration":{$gt:6}} ] }
);


db.detailPersons.updateMany(
  {"workExperience.duration":{$gt:6} }, 
  {$unset: {"workExperience.$[el].longExp": "" }},
  {arrayFilters: [{"el.duration":{$gt:6}} ] }
);


