
conn = new Mongo();
db = conn.getDB("shops");


db.products.find({description: "camera" });

// $regex operator: find matching word
return 5 docs
db.products.find({description: {$regex:/camera/ }});



