const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const mailSender = require("../util/mail.send")

const createUser = (obj) => {
  try {
    const user = userModel.create(obj);
    return user;
  } catch (error) {
    return error;
  }
};

const findAllUsers = async () => {
  try {
    const data = await userModel.find({});
    console.log(data);
    if (data.length > 0) {
      return data;
    } else {
      return "no user found";
    }
  } catch (error) {
    return error;
  }
};

const updateById = async (id, newValue) => {
  const query = { _id: id };
  const value = newValue;
  try {
    const user = userModel.updateOne(query, value);
    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
};

const deleteById = async (id) => {
  const query = { _id: id };
  const deleted = await userModel.deleteOne(query);
  try {
    if (deleted) {
      return deleted;
    }
  } catch (error) {
    return error;
  }
};
module.exports = { createUser, findAllUsers, updateById, deleteById };
