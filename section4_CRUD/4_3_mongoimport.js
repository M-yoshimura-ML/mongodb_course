// command from shell
// mongoimport randomPersons.json -d blog -c persons --jsonArray --drop


mongosh;

use blog;

db.persons.find().count();


