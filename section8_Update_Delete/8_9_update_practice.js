
conn = new Mongo();
db = conn.getDB("contactData");


// 1. Choose any one person from detailPersons and add 2 hobbies at the same time.
db.detailPersons.findOne();
db.detailPersons.updateOne({name: "Emily Johnson"}, {$push: {hobbies: {$each: ["Dancing", "Walking"]}}})

// using $addToSet is also fine and if there is duplicated element, that is not added.
db.detailPersons.updateOne({name: "Emily Johnson"}, {$addToSet: {hobbies: {$each: ["Dancing", "Basketball"]}}});


// 2. Select same person of No.1 and Remove last element from hobbies. 
db.detailPersons.updateOne({name: "Emily Johnson"}, {$pop: {hobbies: 1 }});



// 3. multiply current salary by 1.5
db.detailPersons.find(
  {workExperience:
      {$elemMatch:{
          company:"Growth Corp", 
          position: "Product Manager"
          }
      }
  }, 
  {workExperience: 1}
);


db.detailPersons.updateMany(
  {workExperience:
      {$elemMatch:{
          company:"Growth Corp", 
          position: "Product Manager"
          }
      }
  }, 
  {$mul: {"workExperience.$.salary": 1.5 }}
);



