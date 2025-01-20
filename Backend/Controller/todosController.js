import Todo from '../model/todos_model.js';

const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;

        if (!title) {
            return res.status(400).json({ msg: "Title is required." });
        }

        const todo = new Todo({
            title,
            completed,
        });

        await todo.save();

        res.status(200).json({ msg: "Todo created successfully.", todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error creating todo.", error: error.message });
    }
};

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ msg: "Todos fetched successfully.", todos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error fetching todos.", error: error.message });
    }
};

const updateTodo = async(req, res) => {
    try {
        const updateTodos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({ msg: "Todos updated successfully.", updateTodos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error updating todos.", error: error.message });
    }
}

const deleteTodo = async(req, res) => {
    try {
        const todos = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Todos deleted successfully.", todos});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error deleting todos.", error: error.message });
    }
}

export { createTodo, getTodo, updateTodo, deleteTodo };
