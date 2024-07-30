const Zod=require("zod")



const Schema=Zod.object({
    title:Zod.string(),
    description: Zod.string(),
})

const updateTodo=Zod.object({
    update:Zod.string()
})

module.exports={
    hawaldar:Schema,
    updateTodo:updateTodo
}
