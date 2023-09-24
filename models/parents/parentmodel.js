import {Schema, model, models} from "mongoose";

const parentSchema = new Schema({
  full_name: String,
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  child: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Parent = models.Test || model("parents", parentSchema);

export default Parent;
