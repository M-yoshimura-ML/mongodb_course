
conn = new Mongo();
db = conn.getDB("shops");



db.products.getIndexes();

db.products.dropIndex("description_text_name_text");


db.products.createIndex(
  {description:"text", name:"text"},
  {default_language: "english", weights: {name:1, description: 10}}
);


// score might be different from single text index {description: "text"}
db.products.find( 
  { $text: { $search: "portable" } }, 
  { score: { $meta: "textScore" } }
);


