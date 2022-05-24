import { MongoClient } from "mongodb";

async function connectDatabase() {
  return await MongoClient.connect(process.env.MONGODB_EVENTS_URL);
}

async function saveEmailInDB(client, email) {
  const db = client.db();
  await db.collection("newsletter").insertOne({ email: email });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      //dummy validation
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed." });
      return;
    }

    try {
      await saveEmailInDB(client, userEmail);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Saving to database failed." });
      return;
    }

    res.status(201).json({ message: "Signed up" });
  }
}
