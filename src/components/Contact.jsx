import React from "react";
import { useState, useRef } from "react";
import { animate, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Please contact me</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름을 입력해주세요."
              className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요."
              className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="보낼 내용을 입력해주세요."
              className="bg-tertiary rounded-lg py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={`bg-tertiary py-3 px-9 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-[98%] hover:shadow-sm ${styles.animate}`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
