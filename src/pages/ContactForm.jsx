import React, { useState } from "react";
import { contactbackground } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const googleSheetURL =
    "https://script.google.com/macros/s/AKfycbyZg7OQPwVPNfxFam1t3PKCdAss6cJF0gU7ygDivIVuT_IhwJYkbxMFSxAGW19e7vz-/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const response = await axios.post(googleSheetURL, {
        Name: name,
        Organisation_Name: organization,
        Email: email,
        Phone_Number: phone,
        Messsage: query,
      });

      if (response.message === "Success") {
        setSubmissionMessage("Your message has been sent successfully!");
        setName("");
        setOrganization("");
        setEmail("");
        setPhone("");
        setQuery("");
      } else {
        setSubmissionMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setSubmissionMessage("Error occurred while sending your message.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center">
      <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between">
        <div className="max-w-[32.875rem] mx-auto mb-12 text-center gap-8 lg:flex lg:flex-col lg:justify-start lg:max-w-[23.75rem] lg:m-0 lg:text-left">
          <h2 className="h2">Get in Touch with Us</h2>
          <p className="hidden body-1 text-n-4 md:block">
            Have questions or need assistance? Reach out to our team, and we'll
            help you find the perfect solution for your needs. Your journey to
            seamless performance starts here.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12"
        >
          <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
            {/* Name Input */}
            <div className="relative mb-4 lg:mb-5">
              <FontAwesomeIcon
                icon="fa-regular fa-user"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Organization Input */}
            <div className="relative mb-4 lg:mb-5">
              <FontAwesomeIcon
                icon="fa-regular fa-building"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                type="text"
                placeholder="Organization Name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4 lg:mb-5">
              <FontAwesomeIcon
                icon="fa-regular fa-envelope"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Input */}
            <div className="relative mb-4 lg:mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-phone"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Query Input */}
            <div className="relative mb-4 lg:mb-5">
              <FontAwesomeIcon
                icon="fa-regular fa-comment-dots"
                className="inline-block  align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
              />
              <textarea
                className="w-full mt-3 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                placeholder="Your Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={6}
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className=" px-6 py-2 rounded-md transition-all w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>

            {/* Submission Message */}
            {submissionMessage && (
              <p className="text-green-500 mt-2 text-center">
                {submissionMessage}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactbackground}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
    </section>
  );
};

export default ContactForm;
