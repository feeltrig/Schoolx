import {Schema, model, models} from "mongoose";

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = models.users || model("users", usersSchema);

export default Users;
