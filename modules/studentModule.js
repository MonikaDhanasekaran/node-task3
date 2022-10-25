const mongo  = require("../connect");
const { ObjectId } = require("mongodb");

module.exports.getStudent = async (req,res) => {
    try{
        const studentsData = await mongo.selectedDb.collection("student").find().toArray();
        res.send(studentsData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.createStudent = async (req,res) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("student").insertMany(req.body);
        res.send(insertedResponse);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.updateStudent = async (req,res) => {
    try{
        const id = req.params.id;
        const updatedData = await mongo.selectedDb.collection("student").findOneAndUpdate(
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

module.exports.deleteStudent = async (req,res) => {
    try{
        const id = req.params.id;
        const deletedData = await mongo.selectedDb.collection("student").remove({ _id: ObjectId(id) });
        res.send(deletedData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}