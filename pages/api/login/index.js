import {
  generateJWTToken,
  validateHashPassword,
} from "../../../Funtions/authFunctions";
import connectMongo from "../../../services/connectMongo";
import Users from "../../../models/users/usermodel";

export default async function handler(req, res) {
  try {
    // find user on db and verify password
    await connectMongo();
    const user = await Users.findOne({username: req.body.username}).toObject();
    if (user !== undefined) {
      const encryptedpassword = await validateHashPassword(
        req.body.password,
        user.password
      );

      if (encryptedpassword) {
        const token = generateJWTToken(user, process.env.TOKEN_KEY, "1h");
        console.log(".......>>", token);
        res.json({token, message: "success"});
      }

      // generate token and send as response
    }
  } catch (error) {
    res.json({message: "error"});
    console.log("loginerror".error);
  }
}
