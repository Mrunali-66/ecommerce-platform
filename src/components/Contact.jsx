import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
        Have questions, feedback, or need assistance? We’re here to help!  
        Fill out the form below or reach us directly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-indigo-600" />
            <p className="text-gray-700">support@shopease.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-indigo-600" />
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-indigo-600" />
            <p className="text-gray-700">
              123 Market Street, Mumbai, India
            </p>
          </div>

          <div className="mt-10">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609935196!2d72.74109938484807!3d19.082197839502316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6305c438c3d%3A0x72a8fdb0b3c7dff0!2sMumbai!5e0!3m2!1sen!2sin!4v1709531212345!5m2!1sen!2sin"
              width="100%"
              height="220"
              className="rounded-2xl shadow-md border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
