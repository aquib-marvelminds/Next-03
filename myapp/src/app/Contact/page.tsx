"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "875d0884-2bf8-45f3-890e-97d963f7cc95");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
        {/* <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" /> */}
        <h1 className="head items-center text-6xl justify-center text-center font-extrabold">
          Get In Touch{" "}
        </h1>
        <div className="contact  justify-between items-center p-10 m-10 z-10">
          <div className="contact-info flex flex-col">
            <h2 className="font-bold text-3xl mb-6">Message me 📩</h2>
            <p className="text-white-200 text-base mb-8">
              Hello there! How can i assist you today? Whether you have
              questions about web development, need help with coding, or want
              advice on technology trends, feel free to share your thoughts. i’m
              here to provide information and guidance. Let’s make your
              interaction a positive and informative experience!
            </p>
            <ul className="text-white-700">
              <li className="mb-4">📞 Contact @ +91-6005045066</li>
              <li className="mb-4">🏠 J&K Srinagar, India</li>
              <li>📥 Email: bhataqib604@gmail.com</li>
            </ul>
          </div>
          <div className="contact-details mt-9">
            <form onSubmit={onSubmit} className="flex flex-col z-10">
              <label className="text-white-700">Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="block w-full bg-gray-200 px-4 py-3 rounded-lg mb-4 outline-none"
              />
              <label className="text-white-700">Phone number</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your mobile number"
                required
                className="block w-full bg-gray-200 px-4 py-3 rounded-lg mb-4 outline-none"
              />
              <label className="text-white-700">Write your message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={6}
                className="block w-full bg-gray-200 px-4 py-3 rounded-lg mb-4 outline-none resize-none"
              ></textarea>
              <button
                style={{ color: "white" }}
                className="btn bg-red-500 text-white-700 px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
            <span className="text-white-700 block mt-4">{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
// import { BackgroundBeams } from "@/app/components/ui/background-beams";
// import React, { FormEvent, useState } from "react";

// function MusicSchoolContactUs() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Submitted:", { email, message });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
//       {" "}
//       {/* Ensure the container is relative */}
//       {/* BackgroundBeams with adjusted z-index */}
//       <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
//       {/* Content with higher z-index */}
//       <div className="max-w-2xl mx-auto p-4 relative z-10">
//         {" "}
//         {/* Add relative and z-10 to bring content to the front */}
//         <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
//           Contact Us
//         </h1>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
//           We&apos;re here to help with any questions about our courses,
//           programs, or events. Reach out and let us know how we can assist you
//           in your musical journey.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your email address"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//             required
//           />
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Your message"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//             rows={5}
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default MusicSchoolContactUs;
