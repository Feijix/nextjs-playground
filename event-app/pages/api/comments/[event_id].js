export default function handler(req, res) {
  const event_id = req.query.event_id;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    // TODO server side input validation
    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "veri gud" },
      { id: "c2", name: "Not Max", text: "veri bed" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}
