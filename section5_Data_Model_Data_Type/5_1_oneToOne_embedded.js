
conn = new Mongo();
db = conn.getDB("users");

// embedded document
db.users.insertOne({
 username:"masa",
 contact: {
   phone: "123-456-789",
   email:"xyz@sample.com"
 },
 access: {
   level: 5,
   group: "dev"
 }
});





