import { useState } from "react";

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To track message status

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the phone number and message to the serverless function
    try {
      const response = await fetch("/api/sendSms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
