import { useState } from "react";
import { buildFeedbackFilePath, getAllFeedbacks } from "../api/feedback";

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function showDetails(id) {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackArray.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={showDetails.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const file = buildFeedbackFilePath();
  const data = getAllFeedbacks(file);

  return {
    props: {
      feedbackArray: data,
    },
  };
}
