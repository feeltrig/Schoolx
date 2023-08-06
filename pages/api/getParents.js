import fakeDb from "../../fakeDb/parents.json";

export default function handler(req, res) {
  res.status(200).json(fakeDb);
}
