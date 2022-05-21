import { useRef, useState } from "react";

export default function Home() {
  const [feedbackArray, setFeedbackArray] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function onSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        feedback: enteredFeedback,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadFeedback() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbackArray(data.feedback));
  }

  return (
    <>
      <h1>Homepage</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Your e-mail address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {feedbackArray.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </>
  );
}
