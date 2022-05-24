import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const event_id = req.query.event_id;

  const client = await MongoClient.connect(process.env.MONGODB_EVENTS_URL);

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // TODO server side input validation
    const newComment = {
      email,
      name,
      text,
      event_id,
    };

    const db = client.db();
    await db.collection("comments").insertOne(newComment);

    client.close();

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();
    const eventComments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    client.close();

    res.status(200).json({ comments: eventComments });
  }
}
