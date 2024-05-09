import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[20rem] flex justify-evenly">
        <div>
          <h1 className="text-2xl">Follow Me On</h1>
          <ul className="text-2md ">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">Quick links</h1>
          <ul className="text-2md ">
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">Contact Us</h1>
          <ul className="text-2md ">
            <li>London UK</li>
            <li>J&K, 190002</li>
            <li>Email: mehranbhat2001@gmail.com</li>
            <li>Phone: (+91) 6005046534 </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
