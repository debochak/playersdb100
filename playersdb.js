const express = require("express");
const app = express();
const port = 8000;
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017";
// const dbUrl = "mongodb+srv://debopam:debopam@cluster0.aqd3g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json())

// app.get("/players", async (req, res)=>{

//     //open the connection
//     let client = await mongoClient.connect(dbUrl);

//     try {
//         //select the db
//         var db = client.db("playerdb")

//         //open the collection and perform the operation
//         const data = db.collection("India").find().toArray();
//         // console.log(data);
//         res.status(200).json(data)
//         res.status(200).json({message: "The data can be displayed"})
        

//     } catch (error) {
//         console.log(error);
//         res.json({message:"something went wront"})
//     } finally{
//         //close the connection
//         client.close()
//     }
// })

app.get("/players", async (req, res)=>{

    //open the connection
    let client = await mongoClient.connect(dbUrl);

    try {
        //select the db
        let db = client.db("playerdb")
        
        //open the collection and perform the operation
        const data = db.collection("India").find().toArray();
        res.status(200).json(data)
        res.status(200).json({message:"Player added"})
        
    } catch (error) {
        console.log(error);
        res.json({message:"something went wront"})
    } finally{
        //close the connection
        client.close()
    }

})

app.post("/players", async (req, res)=>{

    //open the connection
    let client = await mongoClient.connect(dbUrl);

    try {
        //select the db
        let db = client.db("playerdb")
        
        //open the collection and perform the operation
        const data = db.collection("India").insertOne(req.body)
        res.status(200).json({message:"Player added"})
        
    } catch (error) {
        console.log(error);
        res.json({message:"something went wront"})
    } finally{
        //close the connection
        client.close()
    }

})


app.delete("/delete-/players/:id", async (req, res)=>{

    //open the connection
    let client = await mongoClient.connect(dbUrl);
    const objid = mongodb.ObjectID(req.params.id);

    try {
        //select the db
        let db = client.db("playerdb")
        
        //open the collection and perform the operation
        const data = db.collection("India").findOneAndDelete({_id:objid})
        res.status(200).json({message:"Player removed"})
        
    } catch (error) {
        console.log(error);
        res.json({message:"something went wront"})
    } finally{
        //close the connection
        client.close()
    }

})

app.listen((port),()=>{
    console.log(`listening to port ${port}`);
})







