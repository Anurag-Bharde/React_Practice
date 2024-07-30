const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anuragadmin:KIkBqYjyBQZXxJ33@cluster0.3sk1xst.mongodb.net/TheTodoApp")

const SchemaDB=mongoose.model('todo',{
    title:String,
    description:String,
    completed:Boolean
})
module.exports={
    SchemaDB
}