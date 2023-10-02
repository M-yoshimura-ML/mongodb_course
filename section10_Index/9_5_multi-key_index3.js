
conn = new Mongo();
db = conn.getDB("contactData");


// use contactData;

// compound index with multikey indexes are possible with one multikey index
// https://www.mongodb.com/docs/manual/core/indexes/index-types/index-multikey/

// this does not work because there is more than one array filed.
db.detailPersons.createIndex({hobbies:1, education:1})


// using $elemMatch
db.detailPersons.explain('executionStats').find({workExperience: {$elemMatch:
  {duration: {$gt:5}, salary: {$gt:80000}}
  }}
);

db.detailPersons.createIndex({"workExperience.duration": 1});

// what will happen when $elemMatch is used 
// 'workExperience.duration': this is multikey index
db.detailPersons.explain('executionStats').find({
  workExperience: {$elemMatch:
    {duration: {$gt:5}, salary: {$gt:80000}}
  }
});
