import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import axios from "axios";

const ContactForm = ({ triggerfunction }) => {
  const modelRef = useRef(null);

  // State for form fields
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  // State for tracking submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Google Apps Script URL
  const googleSheetURL =
    "https://script.google.com/macros/s/AKfycbyZg7OQPwVPNfxFam1t3PKCdAss6cJF0gU7ygDivIVuT_IhwJYkbxMFSxAGW19e7vz-/exec"; // Replace this with your actual URL

  // Function to close the modal when clicking outside
  const closeModal = (e) => {
    if (modelRef.current === e.target) {
      triggerfunction(false);
      enablePageScroll();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      // Send form data to Google Sheet using Axios
      const response = await axios.post(googleSheetURL, {
        Name: name,
        Organisation_Name: organization,
        Email: email,
        Phone_Number: phone,
        Messsage: query,
      });

      if (response.message === "Success") {
        setSubmissionMessage("Your message has been sent successfully!");
        // Clear the form fields
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
      // enablePageScroll();
      // triggerfunction(false); // Close the modal after submission
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModal}
      className="h-screen w-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div className="flex justify-center justify-items-center text-center">
        <div className="mt-10 flex flex-col gap-5 text-white">
          <button
            className="place-self-end"
            onClick={() => {
              triggerfunction(false);
              enablePageScroll();
            }}
          >
            <IoClose size={30} />
          </button>
          <div className="rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 bg-gray-800">
            <h1 className="text-3xl font-extrabold">Contact us</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-md"
                required
              />

              {/* Organization */}
              <input
                type="text"
                placeholder="Organization Name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="p-2 rounded-md "
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md "
                required
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 rounded-md "
                required
              />

              {/* Query */}
              <textarea
                placeholder="Your Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 rounded-md  h-24"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {/* Submission message */}
              {submissionMessage && (
                <p className="text-green-500 mt-2">{console.log(submissionMessage)}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
