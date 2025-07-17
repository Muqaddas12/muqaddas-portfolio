import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-yellow-300 mb-6 text-center font-serif">
        🚀 Let's Connect
      </h2>
      <p className="text-center text-slate-300 mb-10">
        Have a question, idea, or opportunity? Drop me a message below!
      </p>

      {submitted ? (
        <div className="bg-green-600/20 border border-green-400 text-green-300 p-5 rounded-lg text-center animate-fade-in">
          ✅ Your message has been sent! I’ll get back to you shortly.
        </div>
      ) : (
        <form
          onSubmit={() => setSubmitted(true)}
          action="https://formspree.io/f/your-form-id" // 🔁 Replace with your actual Formspree ID
          method="POST"
          className="bg-slate-800 p-6 rounded-lg shadow-lg space-y-6 animate-fade-in"
        >
          <div>
            <label className="block text-slate-200 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-slate-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-slate-200 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
          >
            ✉️ Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
