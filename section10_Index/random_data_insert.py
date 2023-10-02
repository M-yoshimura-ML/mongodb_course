import pymongo
import random
import string

# MongoDB connection details
mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
db = mongo_client["testdb"]
collection = db["testcollection"]

# Function to generate a random string
def random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

# Number of documents to insert
num_documents = 10000000

# Insert random documents
for _ in range(num_documents):
    document = {
        "field1": random_string(10),
        "field2": random.randint(0, 1000),
        "field3": random.choice([True, False]),
    }
    collection.insert_one(document)

print(f"{num_documents} documents inserted.")
