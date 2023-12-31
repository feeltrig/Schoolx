import fakeDb from "../../../fakeDb/parents.json";
import connectMongo from "../../../services/connectMongo";
import Test from "../../../models/testmodel";

export default async function handler(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const test = await Test.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({test});
  } catch (error) {
    console.log(error);
    res.json({error});
  }
}
