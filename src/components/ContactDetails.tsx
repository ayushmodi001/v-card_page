"use client";

import { useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  CopyIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons";

const ContactDetails = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-8 space-y-4 animate-fadeIn">
      <div className="flex items-center">
        <div className="bg-green-500 p-2 rounded-full">
          <PhoneIcon className="w-6 h-6 text-white" />
        </div>
        <a href="tel:+918160423535" className="ml-4 text-gray-800">
          +918160423535
        </a>
        <button
          onClick={() => handleCopy("+918160423535", "phone")}
          className="ml-auto p-2"
        >
          {copied === "phone" ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <CopyIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-500 p-2 rounded-full">
          <MailIcon className="w-6 h-6 text-white" />
        </div>
        <a href="mailto:ayushmodi2002@gmail.com" className="ml-4 text-gray-800">
          ayushmodi2002@gmail.com
        </a>
        <button
          onClick={() => handleCopy("ayushmodi2002@gmail.com", "email")}
          className="ml-auto p-2"
        >
          {copied === "email" ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <CopyIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <div className="bg-purple-500 p-2 rounded-full">
          <LocationIcon className="w-6 h-6 text-white" />
        </div>
        <p className="ml-4 text-gray-800">A/29 Arbuda nagar-2,link road, Bharuch, Gujarat</p>
      </div>
      <div className="flex items-center">
        <div className="bg-gray-800 p-2 rounded-full">
          <GitHubIcon className="w-6 h-6 text-white" />
        </div>
        <a
          href="https://github.com/ayushmodi001"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-gray-800"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center">
        <div className="bg-blue-700 p-2 rounded-full">
          <LinkedInIcon className="w-6 h-6 text-white" />
        </div>
        <a
          href="https://linkedin.com/in/ayushmodi47"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-gray-800"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
