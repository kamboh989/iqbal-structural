"use client";

import React, { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {

  
	const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgoepypk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side - Info Section */}
      <div className="flex-1 bg-gradient-to-br from-orange-900 via-gray-800 to-orange-900 flex items-center justify-center p-6">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 md:mt-0 mt-15">
            Let’s discuss your <br /> steel structure project
          </h1>
          <p className="text-gray-300 text-lg">
            Get in touch with our expert team for design, fabrication, and
            construction solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Fill out the form and we’ll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                 name="phone"
                placeholder="+92 300 1234567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-800 cursor-pointer text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
             {status === "sending" ? "Sending..." : "Send Message"}
						

							

							{/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center pt-2">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center pt-2">
              Something went wrong. Try again.
            </p>
          )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
