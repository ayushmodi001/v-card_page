import { PhoneIcon, MailIcon } from "./icons";

const Footer = () => {
  return (
    <div className="flex justify-around p-4 bg-gray-100 rounded-b-lg animate-fadeIn">
      <a
        href="tel:+918160423535"
        className="flex items-center justify-center w-1/2 py-3 mr-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
      >
        <PhoneIcon className="w-5 h-5 mr-2" />
        Call
      </a>
      <a
        href="mailto:ayushmodi2002@gmail.com"
        className="flex items-center justify-center w-1/2 py-3 ml-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <MailIcon className="w-5 h-5 mr-2" />
        Email
      </a>
    </div>
  );
};

export default Footer;
