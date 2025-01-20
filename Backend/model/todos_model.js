import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    },
})

const Todos = mongoose.model('Todos', todosSchema);
export default Todos;