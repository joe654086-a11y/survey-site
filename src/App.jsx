import React, { useState, useEffect } from "react";

export default function App() {
  // Check if the URL has ?success=true
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setPaid(true);
    }
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Premium Survey</h1>
      <p>Take our exclusive survey and unlock personalized insights.</p>

      {!paid ? (
        <>
          <h2>$59.99</h2>
          {/* Stripe Payment Link button */}
          <a
            href="https://buy.stripe.com/test_7sY3cn2Qo6CF7AU7tV7N600?redirect_url=https://survey-site-mm7a-p80ctfh6b-joe654086-5194s-projects.vercel.app/?success=true"
          >
            <button>Purchase & Start Survey</button>
          </a>
        </>
      ) : (
        <form style={{ marginTop: 20 }}>
          <p>1. How old are you?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>2. What does this mean to you?</p>
          <textarea style={{ width: "100%", marginBottom: 10 }} />

          <p>3. Are you on a timeline, or just exploring options?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>4. Are you currently living in a home?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>5. If you have a home, what’s the reason for wanting to move?</p>
          <textarea style={{ width: "100%", marginBottom: 10 }} />

          <p>6. Is this temporary or long-term?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>7. If you could change one thing about your current home, what would it be?</p>
          <textarea style={{ width: "100%", marginBottom: 10 }} />

          <p>8. Where do you work if you have a job?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>9. Is there a certain use you will use the house for besides everyday living?</p>
          <textarea style={{ width: "100%", marginBottom: 10 }} />

          <p>10. If you have rented before, have you ever not been able to pay rent one month?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>11. Will this be for you only, or friends/family to live in?</p>
          <input style={{ width: "100%", marginBottom: 10 }} />

          <p>12. What’s not working with your current place?</p>
          <textarea style={{ width: "100%", marginBottom: 10 }} />

          <button type="submit">Submit Survey</button>
        </form>
      )}
    </div>
  );
}
