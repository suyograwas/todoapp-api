const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(200).json({
      status: "success",
      result: allTodo.length,
      data: {
        todos: allTodo,
      },
    });
  } catch (err) {
    console.log(err.message);
    console.error(err);

    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!tour) {
      res.status(404).json({
        status: "fail",
        message: "No Todo Found with that id ",
        data: {
          todo,
        },
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
