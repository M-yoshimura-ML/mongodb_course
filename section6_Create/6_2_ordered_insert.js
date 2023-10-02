// command from shell
// mongosh --file 6_2_ordered_insert.js

conn = new Mongo();
db = conn.getDB("blog");

// insert doesn't return _id (older version of mongodb)
// ver.7.0 return _id 
db.comments.insert([{
  _id: 1,
  "rating":"4.5",
  "comments":"this is awesome"
},
{
  _id:2,
  "rating": "5",
  "comments":"this is useful"
}
]);


db.comments.find();


// just becomes error
db.comments.insertMany([{
  _id: 1,
  "rating":"4.5",
  "comments":"this is awesome"
},
{
  _id:2,
  "rating": "5",
  "comments":"this is useful"
},
{
  _id:3,
  "rating": "3.6",
  "comments":"this is not so bad"
}
]);


// Error happens but continues to insert for _id = 3
db.comments.insertMany([{
  _id: 1,
  "rating":"4.5",
  "comments":"this is awesome"
},
{
  _id:2,
  "rating": "5",
  "comments":"this is useful"
},
{
  _id:3,
  "rating": "3.6",
  "comments":"this is not so bad"
}
], {ordered: false});


db.comments.find();
