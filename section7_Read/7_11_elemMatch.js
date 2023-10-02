// mongoimport detailPersons.json -d contactData -c detailPersons --jsonArray --drop

conn = new Mongo();
db = conn.getDB("contactData");


// $and returns missmatching data for duration and salary
// returns 2 docs
db.detailPersons.find({$and:[
  {"workExperience.duration": {$gt:5}}, 
  {"workExperience.salary": {$gt:80000}}
]});

// $elemMach will find embedded document(element) which has matching condtion(duration and salary)
// returns 1 doc
db.detailPersons.find({workExperience: {$elemMatch:
  {duration: {$gt:5}, salary: {$gt:80000}}
  }}
);

