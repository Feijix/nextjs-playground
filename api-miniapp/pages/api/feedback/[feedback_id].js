import { buildFeedbackFilePath, getAllFeedbacks } from ".";

export default function handler(req, res) {
  const feedback_id = req.query.feedback_id;

  const file = buildFeedbackFilePath();
  const data = getAllFeedbacks(file);

  const selectedFeedback = data.find((feedback) => feedback.id === feedback_id);

  res.status(200).json({ feedback: selectedFeedback });
}
