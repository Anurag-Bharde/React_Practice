const express=require("express")
// const bodyParser=require("body-parser")
// const Zod=require("zod")
// const { hawaldar } = require("zod");
const {hawaldar,updateTodo}=require("./types");
const { SchemaDB } = require("../Database/db");
const cors= require("cors")
const bodyParser = require("body-parser");
const app=express();


app.use(cors())
app.use(express.json());
app.use(bodyParser.json())


app.post("/todo",async (req,res)=>{
    const thecods= req.body;

    const titdone = hawaldar.safeParse(thecods);
    // console.log("don2")
    
   if(!titdone.success){
    return res.status(403).json({msg:"Not valid input"})
   }
//    console.log("don3")
   await SchemaDB.create({
    title:thecods.title,
    description:thecods.description,
    completed:false
   })
   res.json({"msg":"The todo is created"})

})
app.get("/todo",async (req,res)=>{ 
    const todo= await SchemaDB.find({});
    res.json(
        todo
    )

})
app.put("/completed", async (req, res) => {
    const update = req.body;
    console.log(update)
    const valid = updateTodo.safeParse(update);
    
    console.log(valid)
    if (!valid.success) {
        return res.status(403).json({ msg: "The ID is not correct" });
    }

    await SchemaDB.updateOne(
        { _id: update.update }, // Changed to update.update
        { completed: true }
    );

    res.json({ msg: "Todo marked as complete" });
});


app.listen(3000,()=>{
    console.log("The app is running on the port 3000")
});

module.exports= {app};
