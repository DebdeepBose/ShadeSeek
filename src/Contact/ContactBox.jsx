import { useState } from "react";
import SendButton from "./Send"; 

export function ContactBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg service-card">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    
        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <div className="flex justify-center">
          <SendButton />
        </div>
      </form>
    </div>
  );
}
