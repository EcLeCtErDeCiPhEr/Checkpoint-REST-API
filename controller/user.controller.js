const userModel = require("../models/user.model");
const userService = require("../service/user.service");
const bcrypt = require("bcrypt");
const mailSender = require("../util/mail.send");

const createUser = async (req, res) => {
  const data = req.body;
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  if (data.email === "") {
    return res.status(400).json({ msg: `Email required` });
  } else {
    const newUser = await userService.createUser(data);
    mailSender.mailSender(newUser.email)
    return res
      .status(201)
      .json({ msg: `user created sucessfully`, data: newUser });
  }
};

const findAllUsers = async (req, res) => {
  const findAll = await userService.findAllUsers();
  if (!findAll) {
    return res.json({ msg: `Details not found` });
  } else {
    return res.status(201).json({ msg: `Detailed Found`, data: findAll });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const update = await userService.updateById(id, data);
  if (update) {
    return res.status(201).json({ msg: `Updated`, value: update });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const deleted = await userService.deleteById(id);
  if (deleted) {
    return res.status(201).json({ msg: `Deleted` });
  }
};
module.exports = { createUser, findAllUsers, updateById, deleteById };
