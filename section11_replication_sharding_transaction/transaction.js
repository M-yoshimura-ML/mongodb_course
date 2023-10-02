// connect to primary from shell
// mongosh --port 27001

use banks;

db.accounts.insertOne({name: "userA", balance: 1000});
db.accounts.insertOne({name: "userB", balance: 500});


const session = db.getMongo().startSession();
session.startTransaction();

const accounts = session.getDatabase("banks").accounts;

accounts.find();

accounts.updateOne(
 {name:"userA"}, 
 {$inc: { balance: -300 }}
);

accounts.updateOne(
 {name:"userB"}, 
 {$inc: { balance: 300 }}
);


// before commit, open new prompt and connect to primary
// mongosh --port 27001
// use banks
// db.account.find();


// session.abortTransaction();
session.commitTransaction();




// Delete multiple times for multiple collections. //

use blogs;
db.users.insertOne({name: "white"});

// check _id value
db.users.findOne({name:"white"});

db.comments.insertMany([
  {userId: ObjectId("64ea2e9855c55781be6d739f"), comment: "1st comment"},
  {userId: ObjectId("64ea2e9855c55781be6d739f"), comment: "2nd comment"}
]);

session.startTransaction();

const users = session.getDatabase("blogs").users;
const comments = session.getDatabase("blogs").comments;

users.find({name: "white"});
comments.find({userId: ObjectId("64ea2e9855c55781be6d739f")});

users.deleteOne({name: "white"});
comments.deleteMany({userId: ObjectId("64ea2e9855c55781be6d739f")});

// before commit, open new prompt and connect to primary
// mongosh --port 27001
// use blogs
// db.users.find();
// db.comments.find();


session.commitTransaction();

