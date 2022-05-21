import fs from "fs";
import path from "path";

export function buildFeedbackFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function getAllFeedbacks(file) {
  const fileData = fs.readFileSync(file);
  return JSON.parse(fileData);
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(), //dummy
      email: email,
      feedback: feedback,
    };

    const file = buildFeedbackFilePath();
    const data = getAllFeedbacks(file);
    data.push(newFeedback);
    fs.writeFileSync(file, JSON.stringify(data));

    res
      .status(201)
      .json({ message: "Successfully added feedback", feedback: newFeedback });
  } else {
    const file = buildFeedbackFilePath();
    const data = getAllFeedbacks(file);

    res.status(200).json({ feedback: data });
  }
}
