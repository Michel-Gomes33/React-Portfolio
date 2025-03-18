import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    if (!form[e.target.name]) {
      setError(`${e.target.name} is required`);
    } else if (e.target.name === "email" && !validateEmail(form.email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <form>
      <input type="text" name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} />
      <textarea name="message" placeholder="Message" onBlur={handleBlur} onChange={handleChange}></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
