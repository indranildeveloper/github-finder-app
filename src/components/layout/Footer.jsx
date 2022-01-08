import { FaSlackHash } from "react-icons/fa";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <FaSlackHash className="text-5xl" />
      <p>Copyright &copy; {footerYear}, Indranil Halder</p>
    </footer>
  );
};

export default Footer;
