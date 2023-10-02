
conn = new Mongo();
db = conn.getDB("shops");


// check _id value
db.products.findOne();

db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$set: {price: 900}});


// pass object to update 
const product = { "price": 901 };
db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$set: product});
ex

// $unset
db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$unset: {image: ""}});

// image: 'https://www.sampleimage.com/laptop/4/image.png'
db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$set: {image: "https://www.sampleimage.com/laptop/4/image.png"}});



db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$unset: {"rating.average": ""}});

// rating: { average: 8.5, max: 9.2 }
db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$set: {"rating.average": 8.5}});

const rateObj = { rating: { average: 8.5, max: 9.2 } };
db.products.updateOne({_id: ObjectId("64c37bbc0135b070ee5baef9")}, {$set:rateObj} });

