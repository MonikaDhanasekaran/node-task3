const { MongoClient } = require('mongodb');

module.exports = {
    selectedDb : {},
    async connect() {
        try{
            const client = await MongoClient.connect(process.env.MONGODB_URL);
            this.selectedDb = client.db("mentorStudent");
            console.log(this.selectedDb);
        }
        catch(err){
            console.log(err);
        }
    }
};