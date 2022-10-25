const mongo  = require("../connect");
const { ObjectId } = require("mongodb");

module.exports.getMentor = async (req,res) => {
    try{
        const mentorData = await mongo.selectedDb.collection("mentor").find().toArray();
        res.send(mentorData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.createMentor = async (req,res) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("mentor").insertMany(req.body);
        res.send(insertedResponse);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.updateMentor = async (req,res) => {
    try{
        const id = req.params.id;
        const updatedData = await mongo.selectedDb.collection("mentor").findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: {...req.body} },
        { returnDocument: "after" }
        );
        res.send(updatedData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.deleteMentor = async (req,res) => {
    try{
        const id = req.params.id;
        const deletedData = await mongo.selectedDb.collection("mentor").remove({ _id: ObjectId(id) });
        res.send(deletedData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}