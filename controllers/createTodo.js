const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    // const { title, description } = req.body;

    const newTodo = await Todo.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    console.log(err.message);
    console.error(err);

    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
