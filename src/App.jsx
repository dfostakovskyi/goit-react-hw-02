import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) =>
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={handleReset}
        showReset={totalFeedback > 0}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
