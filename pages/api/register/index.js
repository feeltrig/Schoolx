import {generateJWTToken, hashPassword} from "../../../Funtions/authFunctions";
import Users from "../../../models/users/usermodel";
import connectMongo from "../../../services/connectMongo";

export default async function handler(req, res) {
  // hash password
  try {
    await connectMongo();
    const encryptedpassword = await hashPassword(req.body.password);

    // upload user credentials with hashed password
    await Users.create({...req.body, password: encryptedpassword});

    const response = await generateJWTToken(
      {...req.body, password: encryptedpassword},
      process.env.TOKEN_KEY,
      "1h"
    );
    console.log("response", response);

    res.json({token: response, message: "success"});
  } catch (error) {
    console.log("register error", error);
  }
}
