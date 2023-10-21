import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = "Task";

const connect = async() => {
    await client.connect(); 
    console.log("Conectado");
    const db = client.db(dbName);
    const collection = db.collection("mensual");

    const result = await collection.aggregate([

        {$sort: {fecha_limite: 1}},
        {$project:{tarea:1}}


    ]).toArray()
    console.log(result)
};

export default connect
