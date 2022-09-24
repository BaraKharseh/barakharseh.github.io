import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvzgleb");
  if (state.succeeded) {
    return <p>Thanks for the email!</p>;
  }

  return (
    <div id="contact">
      <h1 className="md:text-4xl text-3xl dark:text-white text-black font-bold font-merriweather text-center py-10">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto md:max-w-lg max-w-xs">
          <input
            id="name"
            type="name"
            name="name"
            className="font-merriweather mb-5 bg-zinc-200 border border-zinc-300 dark:border-zinc-800 text-black text-sm rounded-lg w-full p-2.5 dark:bg-zinc-700 dark:text-white placeholder:italic"
            placeholder="Name"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            className="font-merriweather mb-5 bg-zinc-200 border border-zinc-300 dark:border-zinc-800 text-black text-sm rounded-lg w-full p-2.5 dark:bg-zinc-700 dark:text-white placeholder:italic"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            rows="6"
            className="font-merriweather mb-5 p-2.5 w-full text-sm text-black bg-zinc-200 rounded-lg border border-zinc-300 dark:bg-zinc-700 dark:border-zinc-800 dark:text-white placeholder:italic"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex justify-center pb-10">
            <button
              type="submit"
              disabled={state.submitting}
              className="font-merriweather py-3 px-5 text-sm font-bold text-center text-black dark:text-white rounded-lg bg-zinc-200 hover:bg-zinc-300 focus:ring-4 dark:bg-zinc-700 dark:hover:bg-zinc-800 duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
