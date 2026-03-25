import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51TDsIo07nriJUSeFyeedy2a2lsNEqwZW79voe3WxGnJxZp5TTb5vBkez6Lu8BbpSsqSg7Z41NYS3tL3A7kWHWPq800IdAHQvYe");

export default function App() {
  const [paid] = useState(window.location.search.includes("success=true"));

 const handleCheckout = async () => {
  console.log("CLICKED");

  const stripe = await stripePromise;
  console.log("STRIPE:", stripe); 

  if (!stripe) {
    alert("Stripe failed to load");
    return;
  }

  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1TEgpf07nriJUSeFaaZtAl8P",
        quantity: 1,
      },
    ],
    mode: "payment",
    successUrl: window.location.href + "?success=true",
    cancelUrl: window.location.href,
  });

  if (error) {
    console.error("ERROR:", error);
    alert(error.message);
  }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Premium Survey</h1>
      <p>Take our exclusive survey and unlock personalized insights.</p>

      {!paid ? (
        <>
          <h2>$59.99</h2>
          <button onClick={handleCheckout}>
            Purchase & Start Survey
          </button>
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
