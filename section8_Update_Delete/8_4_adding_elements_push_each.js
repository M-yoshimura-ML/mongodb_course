
conn = new Mongo();
db = conn.getDB("contactData");

// check if there is no document
db.detailPersons.find({name: "Walter White"})

db.detailPersons.insertOne({
  name: "Walter White",
  age: 50,
  workExperience:[{company:"first corp.", position: "co-founder", duration: 1, salary: 3000 }]
});



const elem1 = {company: "ABC high school", position: "chemist teacher", duration: 20, salary: 40000};
const elem2 = {company: "XYZ factory", position: "drug producer", duration:1, salary: 900000};


// $push & $each can add multiple
db.detailPersons.updateOne(
  { name: "Walter White", age: 50}, 
  {$push: {
      workExperience: {
          $each:[ elem1, elem2 ], 
          $sort:{salary: -1} 
          } 
      }  
  }
);
