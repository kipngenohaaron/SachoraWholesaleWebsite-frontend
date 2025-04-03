import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Send an Inquiry</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <textarea
        name="message"
        placeholder="Your Inquiry"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default InquiryForm;
