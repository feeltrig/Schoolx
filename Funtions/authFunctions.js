const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// hash password
export const hashPassword = async (password) => {
  try {
    const hashedpassword = await bcrypt.hash(password, 10);
    return hashedpassword;
  } catch (error) {
    console.log("hasherror", error);
  }
};

// validate hash password
export const validateHashPassword = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (error) {
    console.log("validateHashError", error);
  }
};

// generate jwt
export const generateJWTToken = (obj, salt, time) => {
  try {
    console.log("generating token", obj, salt, time);
    const token = jwt.sign(obj, salt, {
      expiresIn: time,
    });

    return token;
  } catch (error) {
    console.log("jwterror", error);
  }
};

// auth jwt
export const verifyJWTToken = (token, jwtSecretKey, callback) => {
  try {
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      callback();
    }
  } catch (error) {
    console.log("validateJWTerror", error);
  }
};
