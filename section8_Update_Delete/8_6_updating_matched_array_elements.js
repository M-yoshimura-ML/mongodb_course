
conn = new Mongo();
db = conn.getDB("contactData");


// $and hits arrays that element doesn't match with condition.
db.detailPersons.find(
  {$and:[{'workExperience.duration':5}, 
         {'workExperience.salary': {$gt:80000}}
  ]}, {workExperience: 1}
);


// $elemMatch hits array that element does match.
db.detailPersons.find(
  {workExperience:
      {$elemMatch:{
          duration:5, 
          salary: {$gt:80000}
          }
      }
  }, 
  {workExperience: 1}
);


// Updating matched array elements
db.detailPersons.updateMany(
  {workExperience:
      {$elemMatch:{
          duration:5, 
          salary: {$gt:80000}
          }
      }
  }, 
  {$set: {"workExperience.$.longExpHighSalary": true }}
);




